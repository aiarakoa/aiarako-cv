//import './SkillsPage.css';

function SkillsPage() {
  return (
    <>
      <article aria-labelledby = "skills-article">
        <h2 className = "cv-article-heading" id = "skills-article">
          TECH SKILLS
        </h2>
        <p className = "cv-article-subheading" id = "skills-article-subheading">

        </p>
        <section aria-labelledby = "skills-platforms-section">
          <details className = "skills-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "skills-platforms-section" className = "skills-details-summary">
                Platforms & Tools
              </span>
            </summary>
            <p>
              Git · PostgreSQL · <abbr title="JavaScript Object Notation">JSON</abbr> · AWS (limited) · Azure (limited) · Tableau (basic) · Power BI (basic) · Figma (basic)
            </p>
          </details>
        </section>
        <section aria-labelledby = "skills-languages-section">
          <details className = "skills-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "skills-languages-section" className = "skills-details-summary">
                Programming Languages
              </span>
            </summary>
            <p>
              JavaScript · Python · <abbr title="Structured Query Language">SQL</abbr> · CSS · R · Bash (basic) · Java (basic) · C++ (basic)
            </p>
          </details>
        </section>
        <section aria-labelledby = "skills-frameworks-section">
          <details className = "skills-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "skills-frameworks-section" className = "skills-details-summary">
                Frameworks & Libraries
              </span>
            </summary>
            <p>
              Pandas · NumPy · scikit-learn · TensorFlow · R Shiny · Plotly · GeoPandas · rasterio · Matplotlib · OpenCV (basic) · React (basic) · Selenium
            </p>
          </details>
        </section>
      </article>
    </>
  );
}

export default SkillsPage;