import './Section.css';
//import { Fragment } from "react";
import { useCV } from "./CVProvider";
import { useSection } from "./SectionProvider";
//import { formatYearMonth } from "../lib/Utils";
//import { useEffect, useState } from "react";
import GenDetails from './GenDetails';

function GenSection(props)
{
    const { sectionsPerGroup } = useCV();
    // const [ testVal, setTestVal ] = useState(Math.floor(Math.random() * 10000));
    const { sectionKey, activeSection } = useSection();
    // console.log(`${sectionKey}::${testVal}`);

    function mapIFrame()
    {
        return null;
    }

    return (
        <>
            <section id = {`${sectionKey}`} aria-labelledby = {`${sectionKey}-article`}  heightfactor={sectionsPerGroup}>
                <GenDetails />
                {props.iFrameMapper ? props.iFrameMapper(activeSection) : mapIFrame(activeSection)}
            </section>
        </>
    );
}

export default GenSection;