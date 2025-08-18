//import './ProXPPage.css';

function ProXPPage() {
  return (
    <>
      <article aria-labelledby = "professional-xp-article">
        <hgroup>
          <h2 className = "cv-article-heading" id = "professional-xp-article">
            WORK EXPERIENCE: <strong>15 YEARS</strong>
          </h2>
          <p className = "cv-article-subheading" id = "professional-xp-article">
            MOST RELEVANT EXPERIENCE
          </p>
        </hgroup>
        <section aria-labelledby = "vdx-data-engineer-section">
          <hgroup>
            <h3 className = "cv-section-heading" id = "vdx-data-engineer-section">
              GRADUATE DATA ENGINEER
            </h3>
            <p className = "organisation-subtitle">
              Visión, Dispositivos y eXtensiones S.L.
            </p>
            <p className = "time-frame-subtitle">
              <time dateTime="2025-07">07/2025</time> – <span>Present</span>
            </p>
          </hgroup>
          <p>
            <em>Soon</em>
          </p>
        </section>
        <section aria-labelledby = "vdx-data-scientist-section">
          <hgroup>
            <h3 className = "cv-section-heading" id = "vdx-data-scientist-section">
              GRADUATE DATA SCIENTIST
            </h3>
            <p className = "organisation-subtitle">
              Visión, Dispositivos y eXtensiones S.L.
            </p>
            <p className = "time-frame-subtitle">
              <time dateTime="2025-07">07/2025</time> – <span>Present</span>
            </p>
          </hgroup>
          <p>
            <em>Soon</em>
          </p>
        </section>
        <section aria-labelledby = "vdx-front-end-developer-section">
          <hgroup>
            <h3 className = "cv-section-heading" id = "vdx-front-end-developer-section">
              FRONT END DEVELOPER
            </h3>
            <p className = "organisation-subtitle">
              Visión, Dispositivos y eXtensiones S.L.
            </p>
            <p className = "time-frame-subtitle">
              <time dateTime="2019-11">11/2019</time> – <span>Present</span>
            </p>
          </hgroup>
          <p>
            Delivered a custom JavaScript/CSS charting tool as initial assignment, still operative after 5 years in a SCADA dashboard
            spanning 12+ production views.
          </p>
          <p>
            Designed SCADA HMI components for 5+ industrial domains by reverse-engineering legacy Java/GWT code and over 100,000 undocumented
            XLS rows.
          </p>
          <p>
            Built state-aware interactive elements using SVG, PNG, and CSS, improving system clarity and usability.
          </p>
          <p>
            Ran diagnostics from backend logs to identify behavioural anomalies and support system maintenance.
          </p>
        </section>
      </article>
    </>
  );
}

export default ProXPPage;