//import './PersonalInfoPage.css';

function PersonalInfoPage() {
  return (
    <>
      <article aria-labelledby="personal-info-article">
        <h3 id="personal-info-article">
          Personal Information
        </h3>
        <section aria-labelledby="personal-details-section">
          <h3 id="personal-details-section">
            Personal Details
          </h3>
          <dl>
            <dt>
              Date of birth
            </dt>
            <dd>
              <time datetime="1980-04-02">
                02/04/1980
              </time>
            </dd>
            <dt>
              Nationality
            </dt>
            <dd>
              Spanish
            </dd>
            <dt>
              Gender
            </dt>
            <dd>
              Male
            </dd>
          </dl>
        </section>
        <section aria-labelledby="contact-info-section">
          <h3 id="contact-info-section">
            Contact Info
          </h3>
          <address>
            <dl>
              <dt>
                Phone number
              </dt>
              <dd>
                <a href="tel:+34689991118">
                  +34689991118
                </a>
              </dd>
              <dt>
                Email address
              </dt>
              <dd>
                <a href="mailto:carlos.de.la.cruz.ayala.vargas@gmail.com">
                  carlos.de.la.cruz.ayala.vargas@gmail.com
                </a>
              </dd>
              <dt>
                LinkedIn
              </dt>
              <dd>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/carlos-ayala-vargas/">
                  Link to Profile
                </a>
              </dd>
            </dl>
          </address>
        </section>
        <section aria-labelledby="executive-summary-section">
          <h3 id="executive-summary-section">
            Executive Summary
          </h3>
          <p>
            Data Scientist in training with 5+ years of experience as a Front End Developer for SCADA systems. Skilled in Python, SQL, and JavaScript,
            with academic grounding in machine learning, time series, and open data. Currently completing a master’s in Data Science and pursuing
            industry-recognized certificates in BI and AI.
          </p>
        </section>
      </article>
    </>
  );
}

export default PersonalInfoPage;


