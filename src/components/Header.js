import './Header.css';
import {NavLink, useLocation} from 'react-router-dom';
import {useEffect, useRef} from 'react';
import { useCV } from "./CVProvider";

function useTopNavCenterActive(setArticleIndex, setActiveLink, setPresentationMode) {
  const ref = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const scroller = ref.current;
    if (!scroller) return;

    const active = scroller.querySelector('a[aria-current="page"]');
    if (!active) return;

    console.log("top-nav scroller");
    console.log(scroller);
    console.log(active);
    active.parentElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    setArticleIndex(parseInt(active.getAttribute("index"), 10));
    setActiveLink(active);
  }, [pathname, setArticleIndex, setActiveLink]);

  useEffect(() => {
    const onResize = () => {
      const scroller = ref.current;
      if (!scroller) return;

      setPresentationMode(window.matchMedia('(min-width: 1200px)').matches ? 'laptop' : 'mobile');

      if (!scroller.classList.contains('nav-sliding-layout')) return;

      const active = scroller.querySelector('a[aria-current="page"]');
      if (!active) return;

      // no animation during continuous resize
      active.parentElement.scrollIntoView({ behavior: 'auto', inline: 'center', block: 'nearest' });

      let langNav                   = document.querySelector(`.lang-nav`);
      let isLangShowingSelected     = langNav.classList.contains("selected-language-layout");
  
      if(isLangShowingSelected)
      {
        langNav.querySelector('[activelocale="true"]').parentElement.scrollIntoView({ behavior: 'instant', inline: 'center', block: 'nearest' });  
      }
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('orientationchange', onResize);
    };
  }, [setPresentationMode]);

  return ref;
}

function useLangNavCenterActive() {
  const ref = useRef(null);

  useEffect(() => {
    const scroller = ref.current;
    if (!scroller) return;

    const active = scroller.querySelector('button[activelocale="true"]');
    if (!active) return;

    console.log("lang-nav scroller");
    console.log(scroller);
    console.log(active);
    active.parentElement.scrollIntoView({ behavior: 'instant', inline: 'center', block: 'nearest' });
  }, []);

  return ref;
}

function Header()
{
  const {articles, articleIndex, setArticleIndex, languages, selectedLanguage, setSelectedLanguage, activeLink, setActiveLink, setPresentationMode, status, error, reload} = useCV();

  const topNavRef = useTopNavCenterActive(setArticleIndex, setActiveLink, setPresentationMode);
  const langNavRef = useLangNavCenterActive();

  if (status === "loading" && !articles)
  {
      return <p role="status">Loading...</p>;
  }

  if (error && !articles)
  {
      console.log(error);
      return <p role="alert">Failed to load CV data.</p>;
  }

  function handleNavButtonVisibility(buttonType)
  {
    if((buttonType === "left" && articleIndex === 0) || (buttonType === "right" && (articleIndex + 1) === articles.size))
    {
      return `nav-seq-button to-the-${buttonType}-nav-button invisible-nav-button`;
    }
    else
    {
      return `nav-seq-button to-the-${buttonType}-nav-button`;
    }
  }

  function navigateToPreviousArticle()
  {
    document.querySelector(`a[index="${articleIndex - 1}"]`).click();
  }

  function navigateToNextArticle()
  {
    document.querySelector(`a[index="${articleIndex + 1}"]`).click();
  }

  function handleNavLayoutToggler(event)
  {
    let topNav                    = document.querySelector(`.top-nav`);
    let isNavWithSlidingLayout    = topNav.classList.contains("nav-sliding-layout");
    let ariaCurrent               = event.currentTarget.getAttribute('aria-current');
    if (ariaCurrent !== 'page' && isNavWithSlidingLayout)
    {
      return;
    }

    event.stopPropagation();

    if (ariaCurrent === 'page')
    {
      event.preventDefault();
      toggleNavLayout(topNav, true);
    }
    else
    {
      toggleNavLayout(topNav, false);
    }
  }

  function toggleNavLayout(topNav, reCenterSlider)
  {
    if(topNav.classList.contains("nav-sliding-layout"))
    {
      topNav.classList.replace("nav-sliding-layout", "nav-dropdown-layout");
    }
    else
    {
      topNav.classList.replace("nav-dropdown-layout", "nav-sliding-layout");
      console.log(activeLink);
      activeLink.parentElement.scrollIntoView({ behavior: 'instant', inline: 'center', block: 'nearest' });
      if(reCenterSlider)
      {
        let ariaCurrent = topNav.querySelector('a[aria-current="page"]');
        ariaCurrent.parentElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }

  function updateLanguage(event)
  {
    console.log(`updateLanguage::${event.currentTarget.getAttribute('aria-label')}`);
//    console.log(event.currentTarget);
//    console.log(selectedLanguage);
//    console.log(event.currentTarget.getAttribute("languagecode"));
    if(event.currentTarget.getAttribute('activelocale') !== "true")
    {
      setSelectedLanguage(event.currentTarget.getAttribute("languagecode"));
      reload(selectedLanguage);  
    }
    handleLangLayoutToggler(event);
  }

  function setupLanguageNavigation()
  {
    const languagesCopy = structuredClone(languages);
    console.log(languagesCopy);
    const indexOfSelectedLanguage = languagesCopy.findIndex(lang => lang.code === selectedLanguage);
    const selectedLangObject = languagesCopy.splice(indexOfSelectedLanguage,1)[0];
    console.log(selectedLangObject);
    languagesCopy.push(selectedLangObject);
    console.log(languagesCopy);
    return languagesCopy.map(language => {
      return (
        <li>
          <button className={"lang-button"} activelocale={language.code === selectedLanguage ? "true" : "false"} languagecode={language.code} aria-label={language.description} onClick={event => updateLanguage(event)}>
            <span className={"lang-button-abbr"}>
              {language.abbreviation}
            </span>
          </button>
        </li>
      )
    });
  }

  function handleLangLayoutToggler(event)
  {
    event.stopPropagation();
    let langNav                   = document.querySelector(`.lang-nav`);
    let isLangShowingSelected     = langNav.classList.contains("selected-language-layout");

    if(isLangShowingSelected)
    {
      langNav.classList.replace("selected-language-layout", "language-selection-layout");
    }
    else
    {
      langNav.classList.replace("language-selection-layout", "selected-language-layout");
      langNav.querySelector('[activelocale="true"]').parentElement.scrollIntoView({ behavior: 'instant', inline: 'center', block: 'nearest' });
    }
  }

  return (
    <>
      <a className = "skip-link" href = "#main">Skip to main content</a>
      <header>
        <h1 className = "cv-header">
          <span className = "cv-header-balance-left-span"></span>
          <span className = "mobile-span">CARLOS AYALA</span>
          <span className = "laptop-span">CARLOS DE LA CRUZ AYALA VARGAS</span>
          <nav className = "lang-nav selected-language-layout" ref = {langNavRef} aria-label = "localisation" onClick={event => handleLangLayoutToggler(event)}>
            <ul>
              {
                setupLanguageNavigation()
              }
            </ul>
        </nav>
        </h1>
        <nav className = "top-nav nav-sliding-layout" ref = {topNavRef} aria-label = "navigation" onClick={(event) => handleNavLayoutToggler(event)}>
          <button aria-label = "Navigate to previous article" className={handleNavButtonVisibility("left")} onClick={() => navigateToPreviousArticle()}></button>
          <ul>
            {
              Array.from(articles.entries()).map((artEntry, artIndex) => {
                const artKey  = artEntry[0];
                const article = artEntry[1];
                return (
                  <li key = {artKey}>
                    <NavLink index = {artIndex} to = {article.path} className={({ isActive }) => `nav-link ${isActive ? "active-nav-link" : ""}`} onClick={(event) => handleNavLayoutToggler(event)}>
                      <span className="label-default">
                        <span className="laptop-span">
                          {article.navLinkDescription}
                        </span>
                        <span className="mobile-span">
                          {article.mobileNavLinkDescription}
                        </span>
                      </span>
                      <span className="label-hover">Dropdown</span>
                    </NavLink>
                  </li>
              )})
            }
          </ul>
          <button aria-label = "Navigate to next article" className={handleNavButtonVisibility("right")} onClick={() => navigateToNextArticle()}></button>
        </nav>
      </header>
    </>
  );
}

export default Header;