//import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { createContext, useContext, useState } from 'react';

import { useCV } from './CVProvider';

const ArticleContext = createContext(null);

export function ArticleProvider({ articleKey, children }) {
  const { articles, sectionGroupIndexByArticle, setSectionGroupIndexByArticle } = useCV();
  const sectionGroupIndex = sectionGroupIndexByArticle.get(articleKey) ?? 0;
  const activeArticle = articles.get(articleKey);
  const sectionsCount = activeArticle.sections.length;
  const mappedSections = new Map();
  const [carouseledSectionKeys, setCarouseledSectionKeys] = useState(() => {
    let res = activeArticle.sections.map((section) => section.key);
    if (res.length > 2) {
      res = [
        ...res.slice(Math.ceil(res.length / 2), res.length),
        ...res.slice(0, Math.ceil(res.length / 2)),
      ];
    }
    return res;
  });
  activeArticle.sections.forEach((section) => {
    mappedSections.set(section.key, section);
  });

  function newSectionGroupIndex(newIndex) {
    setSectionGroupIndexByArticle((previousMap) => {
      const newMap = new Map(previousMap);
      newMap.set(articleKey, newIndex);
      return newMap;
    });
  }

  return (
    <ArticleContext.Provider
      value={{
        articleKey,
        activeArticle,
        sectionGroupIndex,
        newSectionGroupIndex,
        sectionsCount,
        mappedSections,
        carouseledSectionKeys,
        setCarouseledSectionKeys,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
}

export function useArticle() {
  const ctx = useContext(ArticleContext);
  if (!ctx) throw new Error('useArticle must be used within <ArticleProvider>');
  return ctx;
}
