//import './EducationPage.css';
import Article from './Article';

function EducationPage() {
  return (
    <>
      <Article articleKey = "education"/>
    </>
  );
}

export default EducationPage;

/*
function EducationPage() {
  return (
    <>
      <article aria-labelledby = "education-article">
        <h2 className = "cv-article-heading" id = "education-article">
          EDUCATION
        </h2>
        <p className = "cv-article-subheading" id = "education-article-subheading">

        </p>
        <section aria-labelledby = "m-sc-data-science-politecnica-madrid-section">
          <details open className = "edu-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "m-sc-data-science-politecnica-madrid-section" className = "edu-details-summary">
                <abbr title="Master of Science">M.Sc.</abbr> in DATA SCIENCE
              </span>
              <p className = "organisation-subtitle">
                <a target = "_blank" rel = "noopener noreferrer" href = "https://fi.upm.es/">
                  Universidad Politécnica de Madrid
                </a>
              </p>
              <p className = "time-frame-subtitle">
                <time dateTime="2024-09">09/2024</time> – <span>Present</span>
              </p>
            </summary>
            <p>
              60/72 <abbr title="European Credit Transfer and accumulation System">ECTS</abbr> completed · <abbr title="Grade Point Average">GPA</abbr>: 83 %
            </p>
            <p>
              <strong>Coursework:</strong> Machine Learning · Deep Learning · Cloud Computing · Computer Vision · Data Visualisation · Big Data
              · Python · Open Data · Time Series · Data Mining · Data Governance · Data Processes
            </p>
          </details>
        </section>
        <section aria-labelledby = "b-sc-telematics-politecnica-cartagena-section">
          <details open className = "edu-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "b-sc-telematics-politecnica-cartagena-section" className = "edu-details-summary">
                <abbr title="Bachelor of Science">B.Sc.</abbr> in TELEMATICS ENGINEERING
              </span>
              <p className = "organisation-subtitle">
                <a target = "_blank" rel = "noopener noreferrer" href = "https://teleco.upct.es/">
                  Universidad Politécnica de Cartagena
                </a>
              </p>
              <p className = "time-frame-subtitle">
                <time dateTime="2012-09">09/2012</time> – <time dateTime="2019-10">10/2019</time>
              </p>
            </summary>
            <p>
              GPA: 73 % · Thesis grade: 100 %
            </p>
            <p>
              <strong>Coursework:</strong> Networking · Databases · Modelling and Simulation · Statistics · Linear Systems · Distributed Information Systems
              · Projects · Communications Networks and Services · Protocol Engineering
            </p>
          </details>
        </section>
      </article>
    </>
  );
}

export default EducationPage;

*/