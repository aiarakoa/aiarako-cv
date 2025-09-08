import './App.css';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import Header from './components/Header';
import {useEffect} from 'react';
import { useCV } from "./components/CVProvider";

function App()
{
  const { status, error, presentationMode, setResizeTick, setPresentationMode, setSectionsPerGroup, sectionsPerGroupByPresentationMode } = useCV();

  useEffect(() => {
    const onResize = () => {
      setPresentationMode(window.matchMedia('(min-width: 1200px)').matches ? 'laptop' : 'mobile');
      setResizeTick(oldTick => oldTick + 1);
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    return () => {
        window.removeEventListener('resize', onResize);
        window.removeEventListener('orientationchange', onResize);
    };
  }, [setPresentationMode, setResizeTick]);

  useEffect(() => {
    if(presentationMode)
    {
      const all = document.querySelectorAll('main details');
      if (presentationMode === 'laptop')
      {
        all.forEach(detail => detail.setAttribute('open', ''));
      }
      else
      {
        all.forEach(detail => detail.removeAttribute('open'));
      }
      setSectionsPerGroup(sectionsPerGroupByPresentationMode.find(secPerGroup => secPerGroup.presentationMode === presentationMode).sectionsPerGroup);
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
