import { useEffect } from 'react';

import { useReCenterActive } from '../hooks/ReCenterActive';

import { useCV } from './CVProvider';

function GenNav(props) {
  const { navComponents, resizeTick } = useCV();
  const navComponent = navComponents.find((component) => component.root === props.navType);
  const activeSelectorQuery = `${navComponent.activeSelectorType}[${navComponent.activeSelectorAttribute}="${navComponent.activeSelectorValue}"]`;
  const navRef = useReCenterActive(activeSelectorQuery, navComponent.reCenterMode, props.trigger);
  //  const checkExclusionClauses = props.handleExclusionClauses;
  //  const clickHandler = props.layoutToggle ? toggleHandler : {};

  useEffect(() => {
    bumpReCenter(document.querySelector(activeSelectorQuery));
  }, [resizeTick, activeSelectorQuery]);

  function bumpReCenter(activeSelector) {
    activeSelector
      ? activeSelector.parentElement.scrollIntoView({
          behavior: 'instant',
          inline: 'center',
          block: 'nearest',
        })
      : {};
  }
  /*
  function toggleHandler(event)
  {
    event.stopPropagation();
    const originalTarget = event.target;
    const navElement = navRef.current;
    const activeSelector = navElement.querySelector(activeSelectorQuery);
    if(checkExclusionClauses(originalTarget, navElement))
    {
      return;
    }
    navElement.classList.toggle(navComponent.standardLayout);
    navElement.classList.toggle(navComponent.modalLayout);
    if(navElement.classList.contains(navComponent.standardLayout))
    {
      activeSelector ? bumpReCenter(activeSelector) : {};
    }
  }
*/
  return (
    <nav
      className={`${props.navType} ${navComponent.standardLayout}`}
      aria-label={props.ariaLabel}
      ref={navRef}
    >
      {props.children}
    </nav>
  );
}

export default GenNav;
