import { createContext, useContext, useEffect, useRef, useState } from "react";

/**
 * Very small data shape to keep it obvious.
 * @typedef {{ articles: Array<any> }} CVData
 */

const CVContext = createContext(/** @type {{
  data: CVData|null,
  status: "idle"|"loading"|"error",
  error: Error|null,
  reload: () => Promise<void>
}} */(null));

export function CVProvider({ children })
{
  const dataRoot = `${process.env.PUBLIC_URL || ""}/data`;

  const [data, setData]                           = useState(/** @type {CVData|null} */(null));
  const [articles, setArticles]                   = useState(null);
  const [sections, setSections]                   = useState(null);
  const [resizeTick, setResizeTick]               = useState(0);
  const [presentDayTags, setPresentDayTags]       = useState(null);
  const [sectionsPerGroupByPresentationMode, setSectionsPerGroupByPresentationMode]   = useState(null);
  const [sectionsPerGroup, setSectionsPerGroup]   = useState(null);
  const [sectionGroupIndexByArticle, setSectionGroupIndexByArticle] = useState(new Map());
  const [activeLink, setActiveLink]               = useState(null);
  const [presentationModeList, setPresentationModeList]   = useState(null);
  const [presentationMode, setPresentationMode]   = useState(null);
  const [languages, setLanguages]                 = useState(/** @type {Array<{code:string,label:string,dir?:'ltr'|'rtl'}>|null} */(null));
  const [navComponents, setNavComponents]         = useState(null);
  const [selectedLanguage, setSelectedLanguage]   = useState(null);
  const [status, setStatus]                       = useState(/** @type {"idle"|"loading"|"error"} */("loading"));
  const [error, setError]                         = useState(/** @type {Error|null} */(null));
  const [openLangDialog, setOpenLangDialog]       = useState(null);

  const hasLoadedRef = useRef(false);

  async function loadManifestOnce() {
    const url = `${dataRoot}/manifest.json`;
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error(`Fetch ${url} failed: ${response.status} ${response.statusText}`);
    const manifest = await response.json();
  
    setLanguages(manifest.languages || []);
    setPresentDayTags(manifest.presentDayTags || []);
    setSectionsPerGroupByPresentationMode(manifest.sectionsPerGroup);
    setNavComponents(manifest.navComponents);
    setSelectedLanguage(manifest.defaultLanguage);
    setPresentationModeList(manifest.presentationMode);
    setOpenLangDialog(false);
    const firstLoadPresentationMode = window.matchMedia('(min-width: 1200px)').matches ? 'laptop' : 'mobile';
    setPresentationMode(firstLoadPresentationMode);
    setSectionsPerGroup(manifest.sectionsPerGroup.find(secPerGroup => secPerGroup.presentationMode === firstLoadPresentationMode).sectionsPerGroup);
  }

  async function loadCVForLanguage(langCode) {
    setStatus("loading");
    setError(null);
    
    const url = `${dataRoot}/cv.${langCode}.json`;
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error(`Fetch ${url} failed: ${response.status} ${response.statusText}`);
  
    const json = await response.json();
    setData(json);
  
    const articlesMap = new Map();
    const sectionsMap = new Map();
    json.articles.forEach(article => {
      articlesMap.set(article.key, (({ key, ...art }) => art)(article));
      article.sections.forEach(section => sectionsMap.set(section.key, (({ key, ...sect }) => sect)(section)));
    });
    setArticles(articlesMap);
    setSections(sectionsMap);
    setStatus("idle");
  }

  useEffect(() => {
    if (hasLoadedRef.current) return;
    hasLoadedRef.current = true;
  
    (async () => {
      try {
        await loadManifestOnce();
      } catch (e) {
        setError(e instanceof Error ? e : new Error(String(e)));
        setStatus("error");
      }
    })();
  // Intentionally run-once on mount; guarded by hasLoadedRef.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    if (!selectedLanguage) return;
    (async () => {
      try {
        await loadCVForLanguage(selectedLanguage);
      } catch (e) {
        setError(e instanceof Error ? e : new Error(String(e)));
        setStatus("error");
      }
    })();
  // Intentionally only when language changes; loadCVForLanguage identity is irrelevant here.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedLanguage]);

  return (
    <CVContext.Provider value={{ data, articles, sections, presentDayTags, languages,
        selectedLanguage, setSelectedLanguage, sectionsPerGroup, setSectionsPerGroup, sectionGroupIndexByArticle, setSectionGroupIndexByArticle,
        sectionsPerGroupByPresentationMode, setSectionsPerGroupByPresentationMode, activeLink, setActiveLink, presentationModeList, setPresentationModeList,
        presentationMode, setPresentationMode, navComponents, resizeTick, setResizeTick, openLangDialog, setOpenLangDialog, status, error}}>
      {children}
    </CVContext.Provider>
  );
}

export function useCV()
{
  const ctx = useContext(CVContext);
  if (!ctx) throw new Error("useCV must be used within <CVProvider>");
  return ctx;
}