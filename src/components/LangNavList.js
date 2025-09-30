import './LangNavList.css';
import { useCV } from './CVProvider';
import LangButton from './LangButton';

function LangNavList() {
  const { selectedLanguage, languages } = useCV();
  const sortedLanguages = languages.sort((langOne, langTwo) => {
    if (langOne.code === selectedLanguage) {
      return -1;
    } else if (langTwo.code === selectedLanguage) {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    <ul>
      {sortedLanguages.map((language) => (
        <li key={language.code}>
          <LangButton language={language} />
        </li>
      ))}
    </ul>
  );
}

export default LangNavList;
