import './LangNav.css';
import LangNavList from './LangNavList.js';
import GenNav from './GenNav.js';
import { useCV } from "./CVProvider";

function LangNav(props)
{
  const { selectedLanguage } = useCV();

  function checkExclusionClauses(originalTarget, navElement)
  {
    return false;
  }

  return (
    <>
      <GenNav
        navType={"lang-nav"}
        handleExclusionClauses={checkExclusionClauses}
        trigger={selectedLanguage}
        layoutToggle = {true}>
        <LangNavList />
      </GenNav>
    </>
  )
}

export default LangNav;