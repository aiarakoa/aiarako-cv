import './Article.css';
import { useArticle } from './ArticleProvider';
import { useCV } from './CVProvider';
import GenArticle from './GenArticle';
import NSection from './NSection';
import { SectionProvider } from './SectionProvider';

function NSectionArticle()
{
    const { sectionsPerGroup } = useCV();
    const { activeArticle, sectionGroupIndex, newSectionGroupIndex, sectionsCount } = useArticle();

    function getSectionGroupIndexUpperBound()
    {
        return Math.ceil(sectionsCount / sectionsPerGroup);
    }

    function handleNavButtonVisibility(buttonType)
    {
        if((buttonType === "first" && sectionGroupIndex < 2) ||
            (buttonType === "previous" && sectionGroupIndex === 0) ||
            (buttonType === "next" && sectionGroupIndex === getSectionGroupIndexUpperBound() - 1) ||
            (buttonType === "last" && sectionGroupIndex > getSectionGroupIndexUpperBound() - 3))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    function navigateToFirstSectionGroup()
    {
        newSectionGroupIndex(0);
    }

    function navigateToPreviousSectionGroup()
    {
        newSectionGroupIndex(sectionGroupIndex - 1);
    }
  
    function navigateToNextSectionGroup()
    {
        newSectionGroupIndex(sectionGroupIndex + 1);
    }

    function navigateToLastSectionGroup()
    {
        newSectionGroupIndex(getSectionGroupIndexUpperBound() - 1);
    }

    function sliceIntoSectionGroup()
    {
        const sectionGroup = activeArticle.sections.slice(sectionGroupIndex * sectionsPerGroup, (sectionGroupIndex + 1) * sectionsPerGroup);
        return sectionGroup.map(section => {
            return (
                <li key={section.key}>
                    <SectionProvider sectionKey = {section.key}>
                        <NSection />
                    </SectionProvider>
                </li>
            )
        });
    }

    function sectionNavControls()
    {
        return (
            <>
                <li>
                    <button aria-label = "Navigate to first section group" className={'nav-seq-button to-the-first-nav-button'} disabled={handleNavButtonVisibility("first")} onClick={() => navigateToFirstSectionGroup(newSectionGroupIndex)}></button>
                </li>
                <li>
                    <button aria-label = "Navigate to previous section group" className={'nav-seq-button to-the-previous-nav-button'} disabled={handleNavButtonVisibility("previous")} onClick={() => navigateToPreviousSectionGroup(newSectionGroupIndex, sectionGroupIndex)}></button>
                </li>
                <li>
                    <button aria-label = "Navigate to next section group" className={'nav-seq-button to-the-next-nav-button'} disabled={handleNavButtonVisibility("next")} onClick={() => navigateToNextSectionGroup(newSectionGroupIndex, sectionGroupIndex)}></button>
                </li>
                <li>
                    <button aria-label = "Navigate to last section group" className={'nav-seq-button to-the-last-nav-button'} disabled={handleNavButtonVisibility("last")} onClick={() => navigateToLastSectionGroup(newSectionGroupIndex)}></button>
                </li>
            </>
        );
    }

    return (
        <>
            <GenArticle pagination = {"section-nav"}
                activeSelectorQuery = {""}
                reCenterMode = {""}
                trigger = {null}
                sectionArranger={sliceIntoSectionGroup}
                sectionController={sectionNavControls}>
            </GenArticle>
        </>
    );
}

export default NSectionArticle;