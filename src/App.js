import './App.css';
import {Routes, Route} from 'react-router-dom';
import CertsPage from './components/CertsPage';
import EducationPage from './components/EducationPage';
import Header from './components/Header';
import LanguagePage from './components/LanguagePage';
import PersonalInfoPage from './components/PersonalInfoPage';
import PortfolioPage from './components/PortfolioPage';
import ProXPPage from './components/ProXPPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path = "/"           element = {<PersonalInfoPage />} />
        <Route path = "/education"  element = {<EducationPage />} />
        <Route path = "/xp"         element = {<ProXPPage />} />
        <Route path = "/languages"  element = {<LanguagePage />} />
        <Route path = "/certs"      element = {<CertsPage />} />
        <Route path = "/portfolio"  element = {<PortfolioPage />} />
      </Routes>
    </>
  );
}

export default App;
