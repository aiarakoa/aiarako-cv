//import './PersonalInfoPage.css';

function PersonalInfoPage() {
  return (
    <>
      <article aria-labelledby = "personal-info-article">
        <h2 className = "cv-article-heading" id = "personal-info-article">
          PERSONAL INFORMATION
        </h2>
        <section aria-labelledby = "personal-details-section">
          <h3 className = "cv-section-heading" id = "personal-details-section">
            PERSONAL DETAILS
          </h3>
          <dl>
            <dt>
              <strong>Nationality</strong>
            </dt>
            <dd>
              Spanish
            </dd>
          </dl>
        </section>
        <section aria-labelledby = "contact-info-section">
          <h3 className = "cv-section-heading" id = "contact-info-section">
            CONTACT INFO
          </h3>
          <address>
            <dl>
              <dt>
                <strong>Phone number</strong>
              </dt>
              <dd>
                <a href = "tel:+34689991118">
                  +34689991118
                </a>
              </dd>
              <dt>
                <strong>Email address</strong>
              </dt>
              <dd>
                <a href = "mailto:carlos.de.la.cruz.ayala.vargas@gmail.com">
                  carlos.de.la.cruz.ayala.vargas@gmail.com
                </a>
              </dd>
              <dt>
                <strong>LinkedIn</strong>
              </dt>
              <dd>
                <a target = "_blank" rel = "noopener noreferrer" href = "https://www.linkedin.com/in/carlos-ayala-vargas/">
                  Carlos Ayala Vargas
                </a>
              </dd>
            </dl>
          </address>
        </section>
        <section aria-labelledby = "executive-summary-section">
          <h3 className = "cv-section-heading" id = "executive-summary-section">
            EXECUTIVE SUMMARY
          </h3>
          <p>
            Data Scientist in training with 5+ years of experience as a Front End Developer for SCADA systems. Skilled in Python, SQL, and JavaScript,
            with academic grounding in machine learning, time series, and open data. Currently completing a master’s in Data Science and pursuing
            industry-recognised certificates in BI and AI.
          </p>
        </section>
      </article>
    </>
  );
}

export default PersonalInfoPage;


