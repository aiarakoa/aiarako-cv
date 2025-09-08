import './Article.css';
import PortfolioSection from './PortfolioSection';
import GenArticle from './GenArticle';
import { useCV } from './CVProvider';
import { useArticle } from './ArticleProvider';
import { SectionProvider } from './SectionProvider';
import { useState, useLayoutEffect } from "react";

function PortfolioArticle(props)
{
    const name = "portfolio";
    const { activeArticle, sectionsCount, carouseledSectionKeys, setCarouseledSectionKeys } = useArticle();
    const [ activeSectionKey, setActiveSectionKey ] = useState(activeArticle.sections[0].key); 
    const [ previouslyActiveSectionKey, setPreviouslyActiveSectionKey ] = useState(activeArticle.sections[0].key);

    useLayoutEffect(() => {
        if (!previouslyActiveSectionKey || !activeSectionKey) return;
    
        const nav = document.querySelector("nav.portfolio-nav");
        if (!nav) return;
    
        const prevLi = nav.querySelector(`section#${previouslyActiveSectionKey}`)?.parentElement;
        if (!prevLi) return;
    
        prevLi.scrollIntoView({ behavior: "instant", inline: "center", block: "nearest" });
    }, [carouseledSectionKeys, previouslyActiveSectionKey, activeSectionKey]);

    function rotateCarousel(direction)
    {
        if (sectionsCount < 2 || (activeSectionKey === carouseledSectionKeys[0] && direction === "next") || (activeSectionKey === carouseledSectionKeys[sectionsCount - 1] && direction === "previous"))
        {
            return;
        }
        if (direction === "previous")
        {
            setCarouseledSectionKeys(carouSections => [carouSections[sectionsCount - 1], ...carouSections.slice(0, sectionsCount - 1)]);
        }
        else
        {
            setCarouseledSectionKeys(carouSections => [...carouSections.slice(1, sectionsCount), carouSections[0]]);
        }
        console.log(`rotateCarousel(${direction})`)
    }

    function handleNavButtonVisibility()
    {
        return sectionsCount < 2;
    }

    function getIndexOfPreviousSection()
    {
        return (carouseledSectionKeys.indexOf(activeSectionKey) + sectionsCount - 1) % sectionsCount;
    }

    function getIndexOfNextSection()
    {
        return (carouseledSectionKeys.indexOf(activeSectionKey) + 1) % sectionsCount;
    }

    function navigateToPreviousSectionGroup()
    {
        setPreviouslyActiveSectionKey(activeSectionKey);
        rotateCarousel("previous");
        setActiveSectionKey(carouseledSectionKeys[getIndexOfPreviousSection()]);
    }

    function navigateToNextSectionGroup()
    {
        setPreviouslyActiveSectionKey(activeSectionKey);
        rotateCarousel("next");
        setActiveSectionKey(carouseledSectionKeys[getIndexOfNextSection()]);
    }

    function sectionCarousel()
    {
        console.log(carouseledSectionKeys);
        return carouseledSectionKeys.map(key => {
            return (
                <li key = {key}>
                    <SectionProvider sectionKey = {key}>
                        <PortfolioSection />
                    </SectionProvider>
                </li>
            )
        });
    }

    function carouselRotator()
    {
        return (
            <>
                <li>
                    <button aria-label = "Navigate to previous section group" className={'nav-seq-button to-the-previous-nav-button'} disabled={handleNavButtonVisibility()} onClick={navigateToPreviousSectionGroup}></button>
                </li>
                <li>
                    <button aria-label = "Navigate to next section group" className={'nav-seq-button to-the-next-nav-button'} disabled={handleNavButtonVisibility()} onClick={navigateToNextSectionGroup}></button>
                </li>
            </>
        );
    }

    return (
        <>
            <GenArticle pagination = {"portfolio-nav"}
                activeSelectorQuery = {`section#${activeSectionKey}`}
                reCenterMode = {"smooth"}
                trigger = {activeSectionKey}
                sectionArranger={sectionCarousel}
                sectionController={carouselRotator}>
            </GenArticle>
        </>
    );
}

export default PortfolioArticle;