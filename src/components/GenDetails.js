import './GenDetails.css';
import { Fragment } from "react";
import { useCV } from "./CVProvider";
import { useSection } from "./SectionProvider";
import { formatYearMonth } from "../lib/Utils";
import { useState } from "react";

function GenDetails(props)
{
    const { presentationMode, presentDayTags, selectedLanguage, sectionsPerGroup } = useCV();
//    const [ testVal ] = useState(Math.floor(Math.random() * 10000));
    const { sectionKey, activeSection } = useSection();
    const [ certViewerActive, setCertViewerActive ] = useState(false);
    const [ certViewerZoom, setCertViewerZoom ] = useState(false);
    const dateSeparator = " - ";
//    console.log(`${sectionKey}::${testVal}`);

    function mapDate()
    {
        return (
          <>
            <time dateTime={activeSection.timeFrameStart}>
                {formatYearMonth(activeSection.timeFrameStart, "-", activeSection.timeFrameTextualMonth, selectedLanguage)}
            </time>
            {activeSection.timeFrameEndExists ? (
              <>
                {dateSeparator}
                {activeSection.timeFrameIsOver === false ? (
                  <span>{presentDayTags[selectedLanguage]}</span>
                ) : (
                    <time dateTime={activeSection.timeFrameEnd}>
                        {formatYearMonth(activeSection.timeFrameEnd, "-", activeSection.timeFrameTextualMonth, selectedLanguage)}
                    </time>
                )}
              </>
            ) : null}
          </>
        );
    }

    function mapParagraphs()
    {
        let paragraphCount = 1;
        return activeSection.paragraphs.map(paragraph =>
            <p id = {`${sectionKey}-p${paragraphCount++}`} key = {`${sectionKey}-p${paragraphCount++}`}>
                {paragraph.content}
            </p>
        );
    }

    function mapDescriptionList()
    {
        if(activeSection.descriptionList.length > 0)
        {
            return <dl>{mapDescriptionListContent(activeSection.descriptionList)}</dl>;
        }
        else
        {
            return null;
        }
    }

    function mapDescriptionListContent(descriptionList)
    {
        return descriptionList.map((description, descriptionIndex) => (
            <Fragment key={`${sectionKey}-dl-${descriptionIndex}`}>
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
            <dd key={`${sectionKey}-dd-${detailIndex}`}>
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

/*
    <a href = {`${process.env.PUBLIC_URL}/certs/${sectionKey}.pdf`} target="_blank" rel="noreferrer">
        <img className={`cert-thumbnail`} src={`${process.env.PUBLIC_URL}/certs/${sectionKey}-tn.png`} alt={`${activeSection.title} - ${activeSection.organisation}`}/>
    </a>
*/
    function showCert()
    {
        return (
            <span className = {`cert-image-span ${certViewerActive ? "cert-viewer-on" : ""}`} onClick={(event) => event.stopPropagation()}>
                <button aria-label = {`Show ${activeSection.title} - ${activeSection.organisation}`} className = {"cert-image-enlarge-button"} onClick={(event) => {event.stopPropagation(); setCertViewerActive(true);}}>
                    <img className={`cert-thumbnail`} src={`${process.env.PUBLIC_URL}/certs/${sectionKey}-tn.png`} alt={`${activeSection.title} - ${activeSection.organisation} (thumbnail)`}/>
                </button>
                <span className = {"cert-viewer-container"}>
                    <span className = {"cert-viewer"}>
                        <button aria-label = "Collapse certificate viewer" className={"cert-viewer-collapse-button"} onClick={(event) => {event.stopPropagation(); setCertViewerActive(false);}}></button>
                        <img className={`cert-image ${certViewerZoom ? "cert-image-zoomed" : ""}`}
                            src={`${process.env.PUBLIC_URL}/certs/${sectionKey}.jpg`}
                            alt={`${activeSection.title} - ${activeSection.organisation}`}
                            onClick={() => setCertViewerZoom(zoomStatus => !zoomStatus)}/>
                    </span>
                </span>
            </span>
        )
    }

    return (
        <>
            <details open={presentationMode === "laptop"}>
                <summary heightfactor={sectionsPerGroup}>
                    <span className = {`details-summary${activeSection.hasCertImage ? "-with-cert-image" : ""}-span`}>
                        <span role = "heading" aria-level = "3" id = {`${sectionKey}-section-heading`} className = "details-summary">
                            <span className="laptop-span">
                                {activeSection.title}
                            </span>
                            <span className="mobile-span">
                                {activeSection.mobileTitle}
                            </span>
                        </span>
                        <p className = "organisation-subtitle">
                            {activeSection.organisation}
                        </p>
                        <p className = "time-frame-subtitle">
                            {activeSection.timeFrameExists ? mapDate() : null}
                        </p>
                    </span>
                    {activeSection.hasCertImage ? showCert() : null}
                </summary>
                {props.mapParagraphs ? props.mapParagraphs() : mapParagraphs()}
                {props.mapDescriptionList ? props.mapDescriptionList() : mapDescriptionList()}
                {activeSection.organisationHasURL ?
                    <p>
                        <a target = "_blank" rel = "noopener noreferrer" href = {activeSection.organisationURL}>
                            {activeSection.organisationAnchorText}
                        </a>
                    </p>
                : null}
                <button aria-label = "Collapse section" className={"section-collapse-button"} onClick={(event) => collapseSection(event)}></button>
            </details>
        </>
    );
}

export default GenDetails;