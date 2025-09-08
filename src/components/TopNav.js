import './TopNav.css';
import NavButton from './NavButton';
import TopNavList from './TopNavList';
import { useNavigate } from 'react-router';
import { useTopNav } from "./TopNavProvider";
import GenNav from './GenNav.js';

function TopNav(props)
{
  const { isFirstArticle, isLastArticle, previousPath, nextPath } = useTopNav();
  const navigate = useNavigate();

  function checkExclusionClauses(originalTarget, navElement)
  {
    let res = false;
    switch(originalTarget.localName)
    {
      case "button":
        res = true;
        break;
      case "a":
        if(!navElement.classList.contains("nav-dropdown-layout") && originalTarget.getAttribute("aria-current") !== "page")
        {
          res = true;
        }
        break;
      case "nav":
        if(navElement.classList.contains("nav-sliding-layout"))
        {
          res = true;
        }
        break;
      default:
        break;
    }
    return res;
  }

  return (
    <>
      <GenNav
        navType={"top-nav"}
        trigger={previousPath}
        handleExclusionClauses={checkExclusionClauses}
        ariaLabel = "navigation"
        layoutToggle = {true}>
        <NavButton buttonType="previous" disabled={isFirstArticle} onClick={() => navigate(previousPath)}/>
        <TopNavList 
          />
        <NavButton buttonType="next" disabled={isLastArticle} onClick={() => navigate(nextPath)}/>
      </GenNav>
    </>
  )
}

export default TopNav;