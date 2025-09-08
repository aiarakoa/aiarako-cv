import './LevelOneHeading.css';
import LangNav from './LangNav';

function LevelOneHeading()
{
    return (
        <h1 className = "cv-header">
            <span className = "cv-header-balance-left-span"></span>
            <span className = "mobile-span">CARLOS AYALA</span>
            <span className = "laptop-span">CARLOS DE LA CRUZ AYALA VARGAS</span>
            <LangNav />
        </h1>
    );
}

export default LevelOneHeading;