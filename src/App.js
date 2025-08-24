import './App.css';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import Header from './components/Header';
import {useEffect} from 'react';
import { useCV } from "./components/CVProvider";

function App()
{
  const { status, error, presentationMode, setSectionsPerGroup, sectionsPerGroupByPresentationMode } = useCV();

  useEffect(() => {
    if(presentationMode)
    {
      const all = document.querySelectorAll('main details');
      let secPerGroupByModeIndex = 0;
      if (presentationMode === 'laptop')
      {
        all.forEach(detail => detail.setAttribute('open', ''));
        secPerGroupByModeIndex = sectionsPerGroupByPresentationMode.findIndex(secPerGroup => secPerGroup.presentationMode === presentationMode);
      }
      else
      {
        all.forEach(detail => detail.removeAttribute('open'));
      }
      setSectionsPerGroup(sectionsPerGroupByPresentationMode[secPerGroupByModeIndex].sectionsPerGroup);
      console.log(sectionsPerGroupByPresentationMode[secPerGroupByModeIndex]);  
    }
  }, [presentationMode, setSectionsPerGroup, sectionsPerGroupByPresentationMode]);

  if (status === "loading")
  {
      return <p role="status">Loading...</p>;
  }

  if (error)
  {
      console.log(error);
      return <p role="alert">Failed to load CV data.</p>;
  }
  
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
}

export default App;
