import './Article.css';
import { useLayoutEffect } from "react";

import { useReCenterActive } from "../hooks/ReCenterActive";

import { useArticle } from "./ArticleProvider";
import LevelTwoHeading from './LevelTwoHeading';

function GenArticle(props)
{
    const { articleKey, activeCertViewer } = useArticle();
    const navRef = useReCenterActive(props.activeSelectorQuery, props.reCenterMode, props.trigger);

    useLayoutEffect(() => {
        if(!props.trigger) return;
        const navElement = navRef.current;
        if(!navElement) return;
        const activeSectionDOMElement = navElement.querySelector(`section#${props.trigger}`);
        if(!activeSectionDOMElement) return;
        activeSectionDOMElement.parentElement.scrollIntoView({ behavior: "instant", inline: 'center', block: 'nearest' });
    }, [props.trigger, navRef]);

    return (
        <>
            <article className="cert-article plan-4pp" id = {`${articleKey}`} aria-labelledby = {`${articleKey}-article`}>
                <LevelTwoHeading />
                <nav className={`${props.pagination} ${activeCertViewer ? "active-cert-viewer" : ""}`} ref={navRef}>
                    <ol>
                        {props.sectionArranger()}
                    </ol>
                    <ul>
                        {props.sectionController()}
                    </ul>
                </nav>
            </article>
        </>
    );
}

export default GenArticle;