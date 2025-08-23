//import './SkillsPage.css';

function SkillsPage() {
  return (
    <>
      <article aria-labelledby = "awards-article">
        <h2 className = "cv-article-heading" id = "awards-article">
          AWARDS
        </h2>
        <p className = "cv-article-subheading" id = "awards-article-subheading">

        </p>
        <section aria-labelledby = "m-sc-data-science-politecnica-madrid-top-student-section">
          <details open className = "awards-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "m-sc-data-science-politecnica-madrid-section" className = "awards-details-summary">
                2024/25 BEST ACADEMIC RECORDS AWARD - M.Sc. in DATA SCIENCE
              </span>
              <p className = "organisation-subtitle">
                <a target = "_blank" rel = "noopener noreferrer" href = "https://fi.upm.es/">
                  Universidad Politécnica de Madrid
                </a>
              </p>
              <p className = "time-frame-subtitle">
                <time dateTime="2025-07">July 2025</time>
              </p>
            </summary>
            <p>
              From the award's announcement: "<em>Aimed at students (up to a maximum of 4) who have started their studies on the Master’s programme in Data Science in September, 2024. The awards are funded by the Universidad Politécnica de Madrid (Ayudas a Máster oficiales).</em>
            </p>
            <p>
              <em>The award (450 Euros) requires from the student to be a new full-time student in the MSc in Data Science of any nationality and to have passed the mandatory subjects enrolled and obtained the highest qualifications (average of the 10 subjects).</em>"
            </p>
          </details>
        </section>
        <section aria-labelledby = "b-sc-telematics-politecnica-cartagena-best-thesis-section">
          <details open className = "awards-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "b-sc-telematics-politecnica-cartagena-section" className = "awards-details-summary">
                2018/19 BEST B.Sc. THESIS IN TELEMATICS ENGINEERING
              </span>
              <p className = "organisation-subtitle">
                <a target = "_blank" rel = "noopener noreferrer" href = "https://teleco.upct.es/">
                  Universidad Politécnica de Cartagena
                </a>
              </p>
              <p className = "time-frame-subtitle">
                <time dateTime="2019-10">October 2019</time>
              </p>
            </summary>
            <p>
              My undergraduate thesis was selected by the ETSIT college at the Universidad Politécnica de Cartagena (UPCT) as the best final project of the 2018/19 academic year in the field of Telematics Engineering. As a result, it was submitted on behalf of the university to the national competition "Premios COITT Futuro de las Telecomunicaciones", which recognizes the best B.Sc. theses in Telecommunications across Spain.
            </p>
          </details>
        </section>
      </article>
    </>
  );
}

export default SkillsPage;