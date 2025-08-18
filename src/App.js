import './App.css';
import {Routes, Route} from 'react-router-dom';
import CertsPage from './components/CertsPage';
import EducationPage from './components/EducationPage';
import Header from './components/Header';
import LanguagePage from './components/LanguagePage';
import PersonalInfoPage from './components/PersonalInfoPage';
import PortfolioPage from './components/PortfolioPage';
import ProXPPage from './components/ProXPPage';
import SkillsPage from './components/SkillsPage';

function App() {
  return (
    <>
      <Header />
      <main id = "main" tabIndex = "-1">
        <Routes>
          <Route path = "/"           element = {<PersonalInfoPage />} />
          <Route path = "/education"  element = {<EducationPage />} />
          <Route path = "/xp"         element = {<ProXPPage />} />
          <Route path = "/languages"  element = {<LanguagePage />} />
          <Route path = "/certs"      element = {<CertsPage />} />
          <Route path = "/skills"     element = {<SkillsPage />} />
          <Route path = "/portfolio"  element = {<PortfolioPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
