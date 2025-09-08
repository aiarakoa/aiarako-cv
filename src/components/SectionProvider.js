// import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { createContext, useContext } from "react";
import { useCV } from "./CVProvider";
// import { useArticle } from "./ArticleProvider";

const SectionContext = createContext((null));

export function SectionProvider({ sectionKey, children })
{
  const {sections} = useCV();
  const activeSection = sections.get(sectionKey);

  return (
    <SectionContext.Provider value={{sectionKey, activeSection}}>
      {children}
    </SectionContext.Provider>
  );
}

/** Read GenSection data anywhere under <SectionProvider>. */
export function useSection()
{
  const ctx = useContext(SectionContext);
  if (!ctx) throw new Error("useSection must be used within <SectionProvider>");
  return ctx;
}