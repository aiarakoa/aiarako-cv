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
          <details open className = "cert-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "certs-aws-cloud-consultant-section" className = "cert-details-summary">
                <abbr title="Amazon Web Services">AWS</abbr> Cloud Technology Consultant
              </span>
              <p className = "organisation-subtitle">
                <a target = "_blank" rel = "noopener noreferrer" href = "https://www.coursera.org/professional-certificates/aws-cloud-technology-consultant/">
                  AWS (through Coursera)
                </a>
              </p>
              <p className = "time-frame-subtitle">
                <time dateTime="2025-07">July 2025</time>
              </p>
            </summary>
          </details>
        </section>
        <section aria-labelledby = "certs-aws-cloud-solutions-architect-pre-exam-section">
          <details open className = "cert-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "certs-aws-cloud-solutions-architect-pre-exam-section" className = "cert-details-summary">
                AWS Cloud Solutions Architect
              </span>
              <p className = "organisation-subtitle">
                <a target = "_blank" rel = "noopener noreferrer" href = "https://www.coursera.org/professional-certificates/aws-cloud-solutions-architect/">
                  AWS (through Coursera)
                </a>
              </p>
              <p className = "time-frame-subtitle">
                <time dateTime="2025-07">July 2025</time>
              </p>
            </summary>
            <p>
              This is not the AWS Certification but an AWS professional certificate aim to train for the exam
            </p>
          </details>
        </section>
        <section aria-labelledby = "certs-ms-cloud-apps-azure-section">
          <details open className = "cert-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "certs-ms-cloud-apps-azure-section" className = "cert-details-summary">
                Build AI Cloud Apps with MS Azure
              </span>
              <p className = "organisation-subtitle">
                <a target = "_blank" rel = "noopener noreferrer" href = "https://www.coursera.org/specializations/building-ai-cloud-apps-microsoft-azure/">
                  Microsoft (through Coursera)
                </a>
              </p>
              <p className = "time-frame-subtitle">
                <time dateTime="2025-07">July 2025</time>
              </p>
            </summary>
          </details>
        </section>
        <section aria-labelledby = "certs-ms-ai-ml-engineering-section">
          <details open className = "cert-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "certs-ms-ai-ml-engineering-section" className = "cert-details-summary">
                AI & ML Engineering
              </span>
              <p className = "organisation-subtitle">
                <a target = "_blank" rel = "noopener noreferrer" href = "https://www.coursera.org/professional-certificates/microsoft-ai-and-ml-engineering/">
                  Microsoft (through Coursera)
                </a>
              </p>
              <p className = "time-frame-subtitle">
                <time dateTime="2025-07">July 2025</time>
              </p>
            </summary>
            <p>
              <strong>Tech skills</strong>: Azure · LLM · GenAI · Transfer Learning
            </p>
          </details>
        </section>
        <section aria-labelledby = "certs-meta-front-end-section">
          <details open className = "cert-details">
            <summary>
              <span role = "heading" aria-level = "3" id = "certs-meta-front-end-section" className = "cert-details-summary">
                Meta Front-End Developer
              </span>
              <p className = "organisation-subtitle">
                <a target = "_blank" rel = "noopener noreferrer" href = "https://www.coursera.org/professional-certificates/meta-front-end-developer/">
                  Meta (through Coursera)
                </a>
              </p>
              <p className = "time-frame-subtitle">
                <time dateTime="2024-06">June 2024</time>
              </p>
            </summary>
            <p>
              <strong>Tech skills</strong>: React · Figma · Git · UX/UI · CSS
            </p>
          </details>
        </section>
      </article>
    </>
  );
}

export default CertsPage;