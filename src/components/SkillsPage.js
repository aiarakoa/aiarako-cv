//import './SkillsPage.css';

function SkillsPage() {
  return (
    <>
      <article aria-labelledby = "skills-article">
        <h2 className = "cv-article-heading" id = "skills-article">
          TECH SKILLS
        </h2>
        <section aria-labelledby = "skills-platforms-section">
          <h3 className = "skills-heading" id = "skills-platforms-section">
            Platforms & Tools
          </h3>
          <p>
            Git · PostgreSQL · JSON · AWS (limited) · Azure (limited) · Tableau (basic) · Power BI (basic) · Figma (basic)
          </p>
        </section>
        <section aria-labelledby = "skills-languages-section">
          <h3 className = "skills-heading" id = "skills-languages-section">
            Programming Languages
          </h3>
          <p>
            JavaScript · Python · SQL · CSS · R · Bash (basic) · Java (basic) · C++ (basic)
          </p>
        </section>
        <section aria-labelledby = "skills-frameworks-section">
          <h3 className = "skills-heading" id = "skills-frameworks-section">
            Frameworks & Libraries
          </h3>
          <p>
            Pandas · NumPy · scikit-learn · TensorFlow · R Shiny · Plotly · GeoPandas · rasterio · Matplotlib · OpenCV (basic) · React (basic) · Selenium
          </p>
        </section>
      </article>
    </>
  );
}

export default SkillsPage;