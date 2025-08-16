import './App.css';
import {Routes, Route} from 'react-router-dom';
import Header from './components/CertsPage';
import Header from './components/EducationPage';
import Header from './components/Header';
import Header from './components/LanguagePage';
import Header from './components/PersonalInfoPage';
import Header from './components/PortfolioPage';
import Header from './components/ProXPPage';

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
