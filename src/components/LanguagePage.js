import './LanguagePage.css';

function LanguagePage() {
  return (
    <>
      <article aria-labelledby = "languages-article">
        <h2 className = "cv-article-heading" id = "languages-article">
          LANGUAGES
        </h2>
        <p className = "cv-article-subheading" id = "languages-article-subheading">

        </p>
        <section aria-labelledby = "languages-english-section">
          <details open className = "lang-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "languages-english-section-summary" className = "lang-details-summary">
                English: <strong>C2</strong>
              </span>
              <p className = "organisation-subtitle">
                <a target = "_blank" rel = "noopener noreferrer" href = "https://www.cambridgeenglish.org/exams-and-tests/cefr/">
                  Cambridge English C2
                </a>
              </p>
              <p className = "time-frame-subtitle">
                <time dateTime="2025-06">June 2025</time>
              </p>
            </summary>
            <p className = "language-certified">
            </p>
          </details>
        </section>
        <section aria-labelledby = "languages-spanish-section">
          <details open className = "lang-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "languages-spanish-section-summary" className = "lang-details-summary">
                Spanish: <strong>NATIVE</strong>
              </span>
              <p className = "organisation-subtitle">

              </p>
              <p className = "time-frame-subtitle">

              </p>
            </summary>
          </details>
        </section>
        <section aria-labelledby = "languages-german-section">
          <details open className = "lang-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "languages-german-section-summary" className = "lang-details-summary">
                German: <strong>B2</strong>
              </span>
              <p className = "organisation-subtitle">
                <a target = "_blank" rel = "noopener noreferrer" href = "https://www.goethe.de/ins/es/de/sta/mad/prf/gzb2.cfm">
                  Goethe-Zertifikat B2
                </a>
              </p>
              <p className = "time-frame-subtitle">
                <time dateTime="2013-05">May 2013</time>
              </p>
            </summary>
            <p className = "language-certified">
            </p>
          </details>
        </section>
        <section aria-labelledby = "languages-french-section">
          <details open className = "lang-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "languages-french-section-summary" className = "lang-details-summary">
                French: <strong>B1</strong>
              </span>
              <p className = "organisation-subtitle language-non-certified">
                Non certified
              </p>
              <p className = "time-frame-subtitle">

              </p>
            </summary>
          </details>
        </section>
      </article>
    </>
  );
}

export default LanguagePage;