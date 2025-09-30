import './LangNav.css';
import { useCV } from './CVProvider';
import GenNav from './GenNav.js';
import LangNavList from './LangNavList.js';

function LangNav() {
  const { selectedLanguage } = useCV();

  function checkExclusionClauses() {
    return false;
  }

  return (
    <>
      <GenNav
        navType={'lang-nav'}
        handleExclusionClauses={checkExclusionClauses}
        trigger={selectedLanguage}
        layoutToggle={true}
      >
        <LangNavList />
      </GenNav>
    </>
  );
}

export default LangNav;
