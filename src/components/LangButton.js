import './LangButton.css';

//import { useState } from "react";

import { useCV } from './CVProvider';

function LangButton(props) {
  const { selectedLanguage, setSelectedLanguage, setOpenLangDialog } = useCV();

  function updateLanguage(event) {
    if (props.language.code !== selectedLanguage) {
      setSelectedLanguage(props.language.code);
      event.currentTarget.setAttribute('data-active-locale', 'true');
    }
    setOpenLangDialog((currentStatus) => !currentStatus);
  }

  return (
    <button
      className={'lang-button'}
      aria-label={props.language.description}
      data-language-code={props.language.code}
      data-active-locale={props.language.code === selectedLanguage}
      onClick={(event) => updateLanguage(event)}
    >
      <span className={`lang-button-abbr`}>{props.language.abbreviation}</span>
    </button>
  );
}

export default LangButton;
