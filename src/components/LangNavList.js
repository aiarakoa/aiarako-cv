import './LangNavList.css';
import { useCV } from "./CVProvider";
import LangButton from './LangButton';

function LangNavList()
{
  const {languages, selectedLanguage, setSelectedLanguage} = useCV();

  function updateLanguage(event)
  {
    if(event.currentTarget.getAttribute('activelocale') !== "true")
    {
      setSelectedLanguage(event.currentTarget.getAttribute("languagecode"));
    }
  }

  return (
    <ul>
      {
        languages.map(language => 
          <li key={language.code}>
            <LangButton className={"lang-button"}
              language={language}
              isActiveLocale={language.code === selectedLanguage ? "true" : "false"}
              handleLanguageUpdate={updateLanguage}/>
          </li>
        )
      }
    </ul>
  );
}

export default LangNavList;