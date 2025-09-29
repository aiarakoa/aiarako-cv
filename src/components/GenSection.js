import './Section.css';
import GenDetails from './GenDetails';
import { useSection } from "./SectionProvider";

function GenSection(props)
{
    // const [ testVal, setTestVal ] = useState(Math.floor(Math.random() * 10000));
    const { sectionKey, activeSection } = useSection();
    // console.log(`${sectionKey}::${testVal}`);

    function mapIFrame()
    {
        return null;
    }

    return (
        <>
            <section id = {`${sectionKey}`} aria-labelledby = {`${sectionKey}-article`}>
                <GenDetails />
                {props.iFrameMapper ? props.iFrameMapper(activeSection) : mapIFrame(activeSection)}
            </section>
        </>
    );
}

export default GenSection;