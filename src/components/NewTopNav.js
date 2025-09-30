import './TopNav.css';
import { useEffect, useRef } from 'react';

import { useNavigate } from 'react-router';

import { useReCenterActive } from '../hooks/ReCenterActive';

import { useCV } from './CVProvider';
import NavButton from './NavButton';
import TopNavList from './TopNavList';
import { useTopNav } from './TopNavProvider';

function NewTopNav() {
  const { isFirstArticle, isLastArticle, previousPath, nextPath, openDialog } = useTopNav();
  const { navComponents, resizeTick } = useCV();
  const navComponent = navComponents.find((component) => component.root === 'top-nav');
  const activeSelectorQuery = `${navComponent.activeSelectorType}[${navComponent.activeSelectorAttribute}="${navComponent.activeSelectorValue}"]`;
  const navRef = useReCenterActive(activeSelectorQuery, navComponent.reCenterMode, previousPath);
  const topNavDialogRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    bumpReCenter(document.querySelector(activeSelectorQuery));
  }, [resizeTick, activeSelectorQuery]);

  useEffect(() => {
    openDialog ? topNavDialogRef.current.showModal() : topNavDialogRef.current.close();
  }, [openDialog]);

  function bumpReCenter(activeSelector) {
    activeSelector
      ? activeSelector.parentElement.scrollIntoView({
          behavior: 'instant',
          inline: 'center',
          block: 'nearest',
        })
      : {};
  }

  return (
    <>
      <nav
        className={`top-nav ${navComponent.standardLayout}`}
        aria-label="navigation"
        ref={navRef}
      >
        <NavButton
          buttonType="previous"
          disabled={isFirstArticle}
          onClick={() => navigate(previousPath)}
        />
        <TopNavList />
        <NavButton buttonType="next" disabled={isLastArticle} onClick={() => navigate(nextPath)} />
        <dialog className={`top-nav-dialog`} ref={topNavDialogRef}>
          <nav className={`top-nav ${navComponent.modalLayout}`} aria-label="navigation">
            <TopNavList />
          </nav>
        </dialog>
      </nav>
    </>
  );
}

export default NewTopNav;
