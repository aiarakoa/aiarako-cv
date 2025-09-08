import './MainPage.css';

import {Routes, Route, Navigate} from 'react-router-dom';
import NSectionArticle from './NSectionArticle';
import PortfolioArticle from './PortfolioArticle';
import { useCV } from "./CVProvider";
import { ArticleProvider } from './ArticleProvider';

function MainPage() {
  const {articles, status, error} = useCV();

  if (status === "loading" && !articles)
  {
      return <p role="status">Loading...</p>;
  }

  if (error && !articles)
  {
      console.log(error);
      return <p role="alert">Failed to load CV data.</p>;
  }
  
  function articleSelector(layout, articleKey)
  {
    switch(layout)
    {
      case 'portfolio':
        return (
          <ArticleProvider key={articleKey} articleKey = {articleKey}>
            <PortfolioArticle />
          </ArticleProvider>
        );
      case 'n-section':
        return (
          <ArticleProvider key={articleKey} articleKey = {articleKey}>
            <NSectionArticle />
          </ArticleProvider>
        );
      default:
        throw new Error("Unknown article layout, review API and correct back-end data or update API");
    }
  }

  return (
    <>
      <main id = "main" tabIndex = "-1">
        <Routes>
          {
            Array.from(articles.entries()).map(artEntry => {
              const artKey  = artEntry[0];
              const article = artEntry[1];
              return (
                <Route key = {artKey} path = {article.path}  element = {articleSelector(article.layout, artKey)} />
            )})
          }
          <Route path = "*"           element = {<Navigate to="/"/>} />
        </Routes>
      </main>
    </>
  );
}

export default MainPage;
