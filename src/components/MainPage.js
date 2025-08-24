import './MainPage.css';

import {Routes, Route, Navigate} from 'react-router-dom';
import Article from './Article';
import PortfolioPage from './PortfolioPage';
import { useCV } from "./CVProvider";
import { useState } from "react";

function MainPage() {
  const {articles, status, error} = useCV();
  const [sectionGroupIndexByArticle, setSectionGroupIndexByArticle] = useState(new Map());

  if (status === "loading" && !articles)
  {
      return <p role="status">Loading...</p>;
  }

  if (error && !articles)
  {
      console.log(error);
      return <p role="alert">Failed to load CV data.</p>;
  }

  function articleSelector(article, articleKey)
  {
    switch(article.layout)
    {
      case 'portfolio-pagination':
        return <PortfolioPage articleKey={articleKey} />;
      case 'section-pagination':
        return <Article sectionGroupIndex={sectionGroupIndexByArticle.get(articleKey) ?? 0} newSectionGroupIndex={newIndex => setSectionGroupIndexByArticle(previousMap => {
          const newMap = new Map(previousMap);
          newMap.set(articleKey, newIndex);
          return newMap;
        })} articleKey = {articleKey} />;
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
                <Route key = {artKey} path = {article.path}  element = {articleSelector(article, artKey)} />
            )})
          }
          <Route path = "*"           element = {<Navigate to="/"/>} />
        </Routes>
      </main>
    </>
  );
}

export default MainPage;
