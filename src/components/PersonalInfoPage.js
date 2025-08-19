//import './PersonalInfoPage.css';

function PersonalInfoPage() {
  return (
    <>
      <article aria-labelledby = "personal-info-article">
        <h2 className = "cv-article-heading" id = "personal-info-article">
          PERSONAL INFORMATION
        </h2>
        <p className = "cv-article-subheading" id = "personal-info-article-subheading">

        </p>
        <section aria-labelledby = "executive-summary-section">
          <details className = "my-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "executive-summary-section-summary" className = "my-details-summary">
                EXECUTIVE SUMMARY
              </span>
            </summary>
            <p>
              Data Scientist in training with 5+ years of experience as a Front End Developer for <abbr title="Supervisory Control and Data Acquisition">SCADA</abbr> systems. Skilled in Python, SQL, and JavaScript,
              with academic grounding in machine learning, time series, and open data. Currently completing a master’s in Data Science and pursuing
              industry-recognised certificates in <abbr title="Artificial Intelligence">AI</abbr>, Cloud Computing and <abbr title="Business Intelligence">BI</abbr>.
            </p>
          </details>
        </section>
        <section aria-labelledby = "personal-details-section">
          <details className = "my-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "personal-details-section-summary" className = "my-details-summary">
                PERSONAL DETAILS
              </span>
            </summary>
            <dl>
              <dt>
                <strong>First Name</strong>
              </dt>
              <dd>
                Carlos de la Cruz
              </dd>
              <dt>
                <strong>Last Name</strong>
              </dt>
              <dd>
                Ayala Vargas
              </dd>
              <dt>
                <strong>Nationality</strong>
              </dt>
              <dd>
                Spanish
              </dd>
              <dt>
                <strong>Work authorization</strong>
              </dt>
              <dd>
                <abbr title="European Union">EU</abbr>/<abbr title="European Economic Area">EEA</abbr> citizen (Spain);
                eligible to work across EU/EEA. Switzerland: up to 90 working days per calendar year with prior online notification.
              </dd>
              </dl>
          </details>
        </section>
        <section aria-labelledby = "contact-info-section">
          <details className = "my-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "contact-info-section-summary" className = "my-details-summary">
                CONTACT INFO
              </span>
            </summary>
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
          </details>
        </section>
      </article>
    </>
  );
}

export default PersonalInfoPage;


