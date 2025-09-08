import './LangButton.css'

function LangButton(props)
{
    return (
        <button className={props.className}
            activelocale={props.isActiveLocale}
            languagecode={props.language.code}
            aria-label={props.language.description}
            onClick={event => props.handleLanguageUpdate(event)}>
            <span className={`${props.className}-abbr`}>
                {props.language.abbreviation}
            </span>
        </button>
    );
}

export default LangButton;