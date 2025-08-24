import './Article.css';
import Section from './Section';
import { useCV } from "./CVProvider";

function Article(props)
{
    const {articles, sectionsPerGroup} = useCV();

    const thisArticle = articles.get(props.articleKey);

    function getSectionGroupIndexUpperBound()
    {
        let sectionsCount = thisArticle.sections.length;
        return Math.ceil(sectionsCount / sectionsPerGroup);
    }

    function handleNavButtonVisibility(buttonType)
    {
        if((buttonType === "far-left" && props.sectionGroupIndex === 0) ||
            (buttonType === "left" && props.sectionGroupIndex === 0) ||
            (buttonType === "right" && props.sectionGroupIndex === getSectionGroupIndexUpperBound() - 1) ||
            (buttonType === "far-right" && props.sectionGroupIndex === getSectionGroupIndexUpperBound() - 1))
        {
            return `nav-seq-button to-the-${buttonType}-nav-button invisible-nav-button`;
        }
        else
        {
            return `nav-seq-button to-the-${buttonType}-nav-button`;
        }
    }

    function navigateToFirstSectionGroup()
    {
        props.newSectionGroupIndex(props.sectionGroupIndex - 1);
    }

    function navigateToPreviousSectionGroup()
    {
        props.newSectionGroupIndex(props.sectionGroupIndex - 1);
    }
  
    function navigateToNextSectionGroup()
    {
        props.newSectionGroupIndex(props.sectionGroupIndex + 1);
    }

    function navigateToLastSectionGroup()
    {
        props.newSectionGroupIndex(getSectionGroupIndexUpperBound() - 1);
    }

    function sliceIntoSectionGroup()
    {
        return thisArticle.sections.slice(props.sectionGroupIndex * sectionsPerGroup, (props.sectionGroupIndex + 1) * sectionsPerGroup).map((section, index) => {
            console.log(section);
            console.log(`${thisArticle.title}::sliceIntoSectionGroup -- iter ${index}`);
            return (
                <li>
                    <Section sectionKey = {section.key} key = {section.key}/>
                </li>
            )
        });
    }

    return (
        <>
            <article className="cert-article plan-4pp" id = {`${props.articleKey}`} aria-labelledby = {`${props.articleKey}-article`}>
                <hgroup className = "cv-article-heading-group">
                    <h2 className = "cv-article-heading" id = {`${props.articleKey}-article-heading`}>
                        <span className="laptop-span">
                            {thisArticle.title}
                        </span>
                        <span className="mobile-span">
                            {thisArticle.mobileTitle}
                        </span>
                    </h2>
                    <p className = "cv-article-subheading" id = {`${props.articleKey}-article-subheading`}>
                        {thisArticle.subtitle}
                    </p>
                </hgroup>
                <nav className="section-nav">
                <ol>
                    {sliceIntoSectionGroup()}
                </ol>
                <ul>
                    <li>
                        <button aria-label = "Navigate to first section group" className={handleNavButtonVisibility("far-left")} onClick={() => navigateToFirstSectionGroup()}></button>
                    </li>
                    <li>
                        <button aria-label = "Navigate to previous section group" className={handleNavButtonVisibility("left")} onClick={() => navigateToPreviousSectionGroup()}></button>
                    </li>
                    <li>
                        <button aria-label = "Navigate to next section group" className={handleNavButtonVisibility("right")} onClick={() => navigateToNextSectionGroup()}></button>
                    </li>
                    <li>
                        <button aria-label = "Navigate to last section group" className={handleNavButtonVisibility("far-right")} onClick={() => navigateToLastSectionGroup()}></button>
                    </li>
                </ul>
                </nav>
            </article>
        </>
    );
}

export default Article;