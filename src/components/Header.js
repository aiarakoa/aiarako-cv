//import './Header.css';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <>
      <header>
        <h1>
          Carlos de la Cruz Ayala Vargas - Curriculum Vitae
        </h1>
        <nav        className = "top-nav">
          <Link to = "/" >Personal Info</Link>
          <Link to = "/education" >Education</Link>
          <Link to = "/xp" >Professional Experience</Link>
          <Link to = "/languages" >Languages</Link>
          <Link to = "/certs" >Licences and Certificates</Link>
          <Link to = "/portfolio" >Portfolio</Link>
        </nav>
      </header>
    </>
  );
}

export default Header;