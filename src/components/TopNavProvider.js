import { createContext, useContext, useEffect, useState } from "react";

import { useLocation } from 'react-router-dom';

import { useCV } from "./CVProvider";

const TopNavContext = createContext((null));

export function TopNavProvider({ children })
{
  const { articles } = useCV();
  const { pathname } = useLocation();
  const [articleIndex, setArticleIndex]           = useState(0);
  const [isFirstArticle, setIsFirstArticle]       = useState(true);
  const [isLastArticle, setIsLastArticle]         = useState(false);
  const [previousPath, setPreviousPath]           = useState("/falsepath");
  const [nextPath, setNextPath]                   = useState("/falsepath");
  const [openDialog, setOpenDialog]               = useState(false);

  useEffect(() => {
    const articleEntries = Array.from(articles.entries());
    const index = articleEntries.findIndex(([,article]) => article.path === pathname);
    const count = articleEntries.length;
    const isFirst = index === 0;
    const isLast = index === count - 1;
    const prevPath = isFirst ? "/falsepath" : articleEntries[index - 1][1].path;
    const theNextPath = isLast ? "/falsepath" : articleEntries[index + 1][1].path;
    setArticleIndex(index);
    setIsFirstArticle(isFirst);
    setIsLastArticle(isLast);
    setPreviousPath(prevPath);
    setNextPath(theNextPath);
    setOpenDialog(false);
    
  // Intentionally run-once on mount; guarded by hasLoadedRef.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, setArticleIndex, setIsFirstArticle, setIsLastArticle, setPreviousPath, setNextPath, setOpenDialog]);

  return (
    <TopNavContext.Provider value={{articleIndex, isFirstArticle, isLastArticle, previousPath, nextPath, openDialog, setOpenDialog}}>
      {children}
    </TopNavContext.Provider>
  );
}

/** Read LinkNav data anywhere under <LinkNavProvider>. */
export function useTopNav()
{
  const ctx = useContext(TopNavContext);
  if (!ctx) throw new Error("useLinkNav must be used within <LinkNavProvider>");
  return ctx;
}