//import './CertsPage.css';

function CertsPage() {
  return (
    <>
      <article aria-labelledby = "certs-article">
        <h2 className = "cv-article-heading" id = "certs-article">
          LICENCES, CERTIFICATES & CERTIFICATIONS
        </h2>
        <p className = "cv-article-subheading" id = "certs-article-subheading">

        </p>
        <section aria-labelledby = "certs-aws-cloud-consultant-section">
          <details className = "cert-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "certs-aws-cloud-consultant-section" className = "cert-details-summary">
                <abbr title="Amazon Web Services">AWS</abbr> Cloud Technology Consultant
              </span>
            </summary>
            <dl>
              <dt>
                <strong>Issuer</strong>
              </dt>
              <dd>
                <a target = "_blank" rel = "noopener noreferrer" href = "https://www.coursera.org/professional-certificates/aws-cloud-technology-consultant/">AWS (through Coursera)</a>
              </dd>
              <dt>
                <strong>Issue date</strong>
              </dt>
              <dd>
                <time dateTime="2025-07">July 2025</time>
              </dd>
            </dl>
          </details>
        </section>
        <section aria-labelledby = "certs-aws-cloud-solutions-architect-pre-exam-section">
          <details className = "cert-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "certs-aws-cloud-solutions-architect-pre-exam-section" className = "cert-details-summary">
                AWS Cloud Solutions Architect (Pre-exam)
              </span>
            </summary>
            <dl>
              <dt>
                <strong>Issuer</strong>
              </dt>
              <dd>
                <a target = "_blank" rel = "noopener noreferrer" href = "https://www.coursera.org/professional-certificates/aws-cloud-solutions-architect/">AWS (through Coursera)</a>
              </dd>
              <dt>
                <strong>Issue date</strong>
              </dt>
              <dd>
                <time dateTime="2025-07">July 2025</time>
              </dd>
            </dl>
          </details>
        </section>
        <section aria-labelledby = "certs-ms-cloud-apps-azure-section">
          <details className = "cert-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "certs-ms-cloud-apps-azure-section" className = "cert-details-summary">
                Building AI Cloud Apps with Microsoft Azure
              </span>
            </summary>
            <dl>
              <dt>
                <strong>Issuer</strong>
              </dt>
              <dd>
                <a target = "_blank" rel = "noopener noreferrer" href = "https://www.coursera.org/specializations/building-ai-cloud-apps-microsoft-azure/">Microsoft (through Coursera)</a>
              </dd>
              <dt>
                <strong>Issue date</strong>
              </dt>
              <dd>
                <time dateTime="2025-07">July 2025</time>
              </dd>
            </dl>
          </details>
        </section>
        <section aria-labelledby = "certs-ms-ai-ml-engineering-section">
          <details className = "cert-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "certs-ms-ai-ml-engineering-section" className = "cert-details-summary">
                AI & ML Engineering
              </span>
            </summary>
            <dl>
              <dt>
                <strong>Issuer</strong>
              </dt>
              <dd>
                <a target = "_blank" rel = "noopener noreferrer" href = "https://www.coursera.org/professional-certificates/microsoft-ai-and-ml-engineering/">Microsoft (through Coursera)</a>
              </dd>
              <dt>
                <strong>Issue date</strong>
              </dt>
              <dd>
                <time dateTime="2025-07">July 2025</time>
              </dd>
              <dt>
                <strong>Tech skills</strong>
              </dt>
              <dd>
                Azure · LLM · GenAI · Transfer Learning
              </dd>
            </dl>
          </details>
        </section>
        <section aria-labelledby = "certs-meta-front-end-section">
          <details className = "cert-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "certs-meta-front-end-section" className = "cert-details-summary">
                Meta Front-End Developer
              </span>
            </summary>
            <dl>
              <dt>
                <strong>Issuer</strong>
              </dt>
              <dd>
                <a target = "_blank" rel = "noopener noreferrer" href = "https://www.coursera.org/professional-certificates/meta-front-end-developer/">Meta (through Coursera)</a>
              </dd>
              <dt>
                <strong>Issue date</strong>
              </dt>
              <dd>
                <time dateTime="2024-06">June 2024</time>
              </dd>
              <dt>
                <strong>Tech skills</strong>
              </dt>
              <dd>
                React · Figma · Git · UX/UI · CSS
              </dd>
            </dl>
          </details>
        </section>
      </article>
    </>
  );
}

export default CertsPage;