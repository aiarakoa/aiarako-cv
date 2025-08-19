import './ProXPPage.css';

function ProXPPage() {
  return (
    <>
      <article aria-labelledby = "professional-xp-article">
        <hgroup>
          <h2 className = "cv-article-heading" id = "professional-xp-article">
            WORK EXPERIENCE: <strong>15 YEARS</strong>
          </h2>
          <p className = "cv-article-subheading" id = "professional-xp-article-subheading">
            MOST RELEVANT EXPERIENCE
          </p>
        </hgroup>
        <section aria-labelledby = "vdx-data-engineer-section">
          <details className = "xp-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "vdx-data-engineer-section" className = "xp-details-summary">
                GRADUATE DATA ENGINEER
              </span>
              <p className = "organisation-subtitle">
                <a target = "_blank" rel = "noopener noreferrer" href = "http://vdx.es/">
                  Visión, Dispositivos y eXtensiones <abbr title="Sociedad Limitada, equivalent to US Limited Liability Company or Germany's Gesellschaft mit beschränkter Haftung">S.L.</abbr>
                </a>
              </p>
              <p className = "time-frame-subtitle">
                <time dateTime="2025-07">07/2025</time> – <span>Present</span>
              </p>
            </summary>
            <p>
              <em>Soon</em>
            </p>
          </details>
        </section>
        <section aria-labelledby = "vdx-data-scientist-section">
          <details className = "xp-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "vdx-data-scientist-section" className = "xp-details-summary">
                GRADUATE DATA SCIENTIST
              </span>
              <p className = "organisation-subtitle">
                <a target = "_blank" rel = "noopener noreferrer" href = "http://vdx.es/">
                  Visión, Dispositivos y eXtensiones S.L.
                </a>
              </p>
              <p className = "time-frame-subtitle">
                <time dateTime="2025-07">07/2025</time> – <span>Present</span>
              </p>
            </summary>
            <p>
              <em>Soon</em>
            </p>
          </details>
        </section>
        <section aria-labelledby = "vdx-front-end-developer-section">
          <details className = "xp-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "vdx-front-end-developer-section" className = "xp-details-summary">
                FRONT END DEVELOPER
              </span>
              <p className = "organisation-subtitle">
                <a target = "_blank" rel = "noopener noreferrer" href = "http://vdx.es/">
                  Visión, Dispositivos y eXtensiones S.L.
                </a>
              </p>
              <p className = "time-frame-subtitle">
                <time dateTime="2019-11">11/2019</time> – <span>Present</span>
              </p>
            </summary>
            <p>
              Delivered a custom <abbr title="JavaScript">JS</abbr>/<abbr title="Cascading Style Sheets">CSS</abbr> charting tool as initial assignment, still operative after 5 years in a SCADA dashboard
              spanning 12+ production views.
            </p>
            <p>
              Designed SCADA <abbr title="Human Machine Interface">HMI</abbr> components for 5+ industrial domains by reverse-engineering legacy Java/<abbr title="Google Web Toolkit">GWT</abbr> code and over 100,000
              undocumented <abbr title="Microsoft Excel spreadsheet file format">XLS</abbr> rows.
            </p>
            <p>
              Built state-aware interactive elements using <abbr title="Scalable Vector Graphics">SVG</abbr>, <abbr title="Portable Network Graphics">PNG</abbr>, and CSS, improving system clarity and usability.
            </p>
            <p>
              Ran diagnostics from backend logs to identify behavioural anomalies and support system maintenance.
            </p>
          </details>
        </section>
      </article>
    </>
  );
}

export default ProXPPage;