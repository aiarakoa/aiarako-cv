import './LevelOneHeading.css';
import NewLangNav from './NewLangNav';

function LevelOneHeading()
{
    return (
        <h1 className = "cv-header">
            <span className = "cv-header-balance-left-span"></span>
            <span className = "mobile-span">CARLOS AYALA</span>
            <span className = "laptop-span">CARLOS DE LA CRUZ AYALA VARGAS</span>
            <NewLangNav />
        </h1>
    );
}

export default LevelOneHeading;