import './App.css';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import Header from './components/Header';
import {useEffect} from 'react';
import { useCV } from "./components/CVProvider";

function App()
{
  const { presentationMode } = useCV();

  useEffect(() => {
    const all = document.querySelectorAll('main details');
    if (presentationMode === 'laptop')
    {
      all.forEach(detail => detail.setAttribute('open', ''));
    }
    else
    {
      all.forEach(detail => detail.removeAttribute('open'));
    }
  }, [presentationMode]);

  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
}

export default App;
