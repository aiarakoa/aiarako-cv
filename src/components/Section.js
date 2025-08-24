import './Section.css';
import { Fragment } from "react";
import { useCV } from "./CVProvider";
import { formatYearMonth } from "../lib/Utils";

function Section(props)
{
    const {sections, presentationMode, presentDayTags, selectedLanguage, sectionsPerGroup} = useCV();
    const thisSection = sections.get(props.sectionKey);
    const dateSeparator = " - ";
    let paragraphCount = 1;

    function mapDate()
    {
        return (
          <>
            <time dateTime={thisSection.timeFrameStart}>
                {formatYearMonth(thisSection.timeFrameStart, "-", thisSection.timeFrameTextualMonth, selectedLanguage)}
            </time>
            {thisSection.timeFrameEndExists ? (
              <>
                {dateSeparator}
                {thisSection.timeFrameIsOver === false ? (
                  <span>{presentDayTags[selectedLanguage]}</span>
                ) : (
                    <time dateTime={thisSection.timeFrameEnd}>
                        {formatYearMonth(thisSection.timeFrameEnd, "-", thisSection.timeFrameTextualMonth, selectedLanguage)}
                    </time>
                )}
              </>
            ) : null}
          </>
        );
    }

    function mapParagraphs()
    {
        return thisSection.paragraphs.map(paragraph =>
            <p id = {`${props.sectionKey}-p${paragraphCount++}`} key = {`${props.sectionKey}-p${paragraphCount++}`}>
                {paragraph.content}
            </p>
        );
    }

    function mapDescriptionList()
    {
        if(thisSection.descriptionList.length > 0)
        {
            return <dl>{mapDescriptionListContent(thisSection.descriptionList)}</dl>;
        }
        else
        {
            return null;
        }
    }

    function mapDescriptionListContent(descriptionList)
    {
        return descriptionList.map((description, descriptionIndex) => (
            <Fragment key={`${props.sectionKey}-dl-${descriptionIndex}`}>
                <dt>
                    <strong>{description.dt}</strong>
                </dt>
                {mapDescriptionDetails(description.dd)}
            </Fragment>
        ));
    }

    function mapDescriptionDetails(descriptionDetails)
    {
        return descriptionDetails.map((detail, detailIndex) => (
            <dd key={`${props.sectionKey}-dd-${detailIndex}`}>
                {processDetailContent(detail)}
            </dd>
        ));
    }

    function processDetailContent(detail)
    {
        switch(detail.type)
        {
            case "text":
                return detail.content;
            case "phone":
                return (
                    <a href = {`tel:${detail.number}`} target="_blank" rel="noreferrer">
                        {detail.content}
                    </a>
                );
            case "mail":
                return (
                    <a href = {`mailto:${detail.address}`} target="_blank" rel="noreferrer">
                        {detail.content}
                    </a>
                );
            case "url":
                return (
                    <a href = {`${detail.url}`} target="_blank" rel="noreferrer">
                        {detail.content}
                    </a>
                );
            default:
                return null;
        }
    }

    function collapseSection(event)
    {
        event.currentTarget.closest("details").open = false;
    }

    return (
        <>
            <section id = {`${props.sectionKey}`} aria-labelledby = {`${props.sectionKey}-article`}>
                <details open={presentationMode === "laptop"}>
                    <summary heightfactor={sectionsPerGroup}>
                        <span role = "heading" aria-level = "3" id = {`${props.sectionKey}-section-heading`} className = "details-summary">
                            <span className="laptop-span">
                                {thisSection.title}
                            </span>
                            <span className="mobile-span">
                                {thisSection.mobileTitle}
                            </span>
                        </span>
                        <p className = "organisation-subtitle">
                            {thisSection.organisation}
                        </p>
                        <p className = "time-frame-subtitle">
                            {thisSection.timeFrameExists ? mapDate() : null}
                        </p>
                    </summary>
                    {mapParagraphs()}
                    {mapDescriptionList()}
                    {thisSection.organisationHasURL ?
                        <p>
                            <a target = "_blank" rel = "noopener noreferrer" href = {thisSection.organisationURL}>
                                {thisSection.organisationAnchorText}
                            </a>
                        </p>
                    : null}
                    <button aria-label = "Collapse section" className={"section-collapse-button"} onClick={(event) => collapseSection(event)}></button>
                </details>
            </section>
        </>
    );
}

export default Section;