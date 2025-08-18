import './LanguagePage.css';

function LanguagePage() {
  return (
    <>
      <article aria-labelledby = "languages-article">
        <h2 className = "cv-article-heading" id = "languages-article">
          LANGUAGES
        </h2>
        <section aria-labelledby = "languages-english-section">
          <h3 className = "languages-heading" id = "languages-english-section">
            English: <strong>C2</strong>
          </h3>
          <p className = "language-certified">
            Cambridge English C2 (<time dateTime="2025-06">June 2025</time>)
          </p>
        </section>
        <section aria-labelledby = "languages-spanish-section">
          <h3 className = "languages-heading" id = "languages-spanish-section">
            Spanish: <strong>NATIVE</strong>
          </h3>
        </section>
        <section aria-labelledby = "languages-english-section">
          <h3 className = "languages-heading" id = "languages-english-section">
            German: <strong>B2</strong>
          </h3>
          <p className = "language-certified">
            Goethe-Zertifikat B2 (<time dateTime="2013-05">May 2013</time>)
          </p>
        </section>
        <section aria-labelledby = "languages-english-section">
          <h3 className = "languages-heading" id = "languages-english-section">
            French: <strong>B1</strong>
          </h3>
          <p className = "language-non-certified">
            Non certified
          </p>
        </section>
      </article>
    </>
  );
}

export default LanguagePage;