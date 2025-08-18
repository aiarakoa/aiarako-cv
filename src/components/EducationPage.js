//import './EducationPage.css';

function EducationPage() {
  return (
    <>
      <article aria-labelledby = "education-article">
        <h2 className = "cv-article-heading" id = "education-article">
          EDUCATION
        </h2>
        <section aria-labelledby = "m-sc-politecnica-madrid-section">
          <hgroup>
            <h3 className = "cv-section-heading" id = "m-sc-politecnica-madrid-section">
              M.Sc. in DATA SCIENCE
            </h3>
            <p className = "organisation-subtitle">
              Universidad Politécnica de Madrid
            </p>
            <p className = "time-frame-subtitle">
              <time dateTime="2024-09">09/2024</time> – <span>Present</span>
            </p>
          </hgroup>
          <p>
            60/72 ECTS completed · GPA: 83 %
          </p>
          <p>
            <strong>Coursework:</strong> Machine Learning · Deep Learning · Cloud Computing · Computer Vision · Data Visualisation · Big Data
             · Python · Open Data · Time Series · Data Mining · Data Governance · Data Processes
          </p>
        </section>
        <section aria-labelledby = "b-sc-politecnica-cartagena-section">
          <hgroup>
            <h3 className = "cv-section-heading" id = "b-sc-politecnica-cartagena-section">
              B.Sc. in TELEMATICS ENGINEERING
            </h3>
            <p className = "organisation-subtitle">
              Universidad Politécnica de Cartagena
            </p>
            <p className = "time-frame-subtitle">
              <time dateTime="2012-09">09/2012</time> – <time dateTime="2019-10">10/2019</time>
            </p>
          </hgroup>
          <p>
            GPA: 73 % · Thesis grade: 100 %
          </p>
          <p>
            <strong>Coursework:</strong> Networking · Databases · Modelling and Simulation · Statistics · Linear Systems · Distributed Information Systems
             · Projects · Communications Networks and Services · Protocol Engineering
          </p>
        </section>
      </article>
    </>
  );
}

export default EducationPage;