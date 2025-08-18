import './Header.css';
import {NavLink} from 'react-router-dom';

function Header() {
  return (
    <>
      <a className = "skip-link" href = "#main">Skip to main content</a>
      <header>
        <h1 className = "cv-header">
          CARLOS DE LA CRUZ AYALA VARGAS
        </h1>
        <nav className = "top-nav" aria-label = "navigation">
          <ul>
            <li>
              <NavLink to = "/" className={({ isActive }) => `nav-link ${isActive ? "active-nav-link" : ""}`}>Personal Info</NavLink>
            </li>
            <li>
              <NavLink to = "/xp" className={({ isActive }) => `nav-link ${isActive ? "active-nav-link" : ""}`}>Work Experience</NavLink>              
            </li>
            <li>
              <NavLink to = "/education" className={({ isActive }) => `nav-link ${isActive ? "active-nav-link" : ""}`}>Education</NavLink>              
            </li>
            <li>
              <NavLink to = "/languages" className={({ isActive }) => `nav-link ${isActive ? "active-nav-link" : ""}`}>Languages</NavLink>              
            </li>
            <li>
              <NavLink to = "/certs" className={({ isActive }) => `nav-link ${isActive ? "active-nav-link" : ""}`}>Licences and Certificates</NavLink>              
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