import './LangNav.css';
import { useEffect, useRef } from 'react';

import { useReCenterActive } from '../hooks/ReCenterActive';

import { useCV } from './CVProvider';
import LangNavList from './LangNavList.js';

function NewLangNav() {
  const { navComponents, resizeTick, selectedLanguage, openLangDialog } = useCV();
  const navComponent = navComponents.find((component) => component.root === 'lang-nav');
  const activeSelectorQuery = `${navComponent.activeSelectorType}[${navComponent.activeSelectorAttribute}="${navComponent.activeSelectorValue}"]`;
  const navRef = useReCenterActive(
    activeSelectorQuery,
    navComponent.reCenterMode,
    selectedLanguage,
  );
  const langNavDialogRef = useRef(null);

  useEffect(() => {
    bumpReCenter(document.querySelector(activeSelectorQuery));
  }, [resizeTick, activeSelectorQuery]);

  useEffect(() => {
    openLangDialog ? langNavDialogRef.current.showModal() : langNavDialogRef.current.close();
  }, [openLangDialog]);

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
*/
  return (
    <nav className={`lang-nav ${navComponent.standardLayout}`} aria-label="navigation" ref={navRef}>
      <LangNavList />
      <dialog className={`lang-nav-dialog`} ref={langNavDialogRef}>
        <nav className={`lang-nav ${navComponent.modalLayout}`} aria-label="navigation">
          <LangNavList />
        </nav>
      </dialog>
    </nav>
  );
}

export default NewLangNav;
