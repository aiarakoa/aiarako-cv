import './Header.css';
import {NavLink, useLocation} from 'react-router-dom';
import {useEffect, useRef} from 'react';

function useCenterActive() {
  const ref = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const scroller = ref.current;
    if (!scroller) return;

    const active = scroller.querySelector('a[aria-current="page"]');
    if (!active) return;

    active.parentElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [pathname]);

  return ref;
}

function Header() {
  const navRef = useCenterActive();
  return (
    <>
      <a className = "skip-link" href = "#main">Skip to main content</a>
      <header>
        <h1 className = "cv-header">
          <span className = "mobile-my-name">CARLOS AYALA</span>
          <span className = "laptop-my-name">CARLOS DE LA CRUZ AYALA VARGAS</span>
        </h1>
        <nav className = "top-nav" ref = {navRef} aria-label = "navigation">
          <ul>
            <li>
              <NavLink to = "/" className={({ isActive }) => `nav-link ${isActive ? "active-nav-link" : ""}`}>Personal Info</NavLink>
            </li>
            <li>
              <NavLink to = "/xp" className={({ isActive }) => `nav-link ${isActive ? "active-nav-link" : ""}`}>Experience</NavLink>              
            </li>
            <li>
              <NavLink to = "/education" className={({ isActive }) => `nav-link ${isActive ? "active-nav-link" : ""}`}>Education</NavLink>              
            </li>
            <li>
              <NavLink to = "/languages" className={({ isActive }) => `nav-link ${isActive ? "active-nav-link" : ""}`}>Languages</NavLink>              
            </li>
            <li>
              <NavLink to = "/certs" className={({ isActive }) => `nav-link ${isActive ? "active-nav-link" : ""}`}>Certificates</NavLink>              
            </li>
            <li>
              <NavLink to = "/skills" className={({ isActive }) => `nav-link ${isActive ? "active-nav-link" : ""}`}>Tech Skills</NavLink>              
            </li>
            <li>
              <NavLink to = "/portfolio" className={({ isActive }) => `nav-link ${isActive ? "active-nav-link" : ""}`}>Portfolio</NavLink>              
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;