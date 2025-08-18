//import './CertsPage.css';

function CertsPage() {
  return (
    <>
      <article aria-labelledby = "certs-article">
        <h2 className = "cv-article-heading" id = "certs-article">
          LICENCES, CERTIFICATES & CERTIFICATIONS
        </h2>
        <section aria-labelledby = "certs-aws-cloud-consultant-section">
          <h3 className = "skills-heading" id = "certs-aws-cloud-consultant-section">
            Cloud Technology Consultant
          </h3>
          <dl>
            <dt>
              <strong>Issuer</strong>
            </dt>
            <dd>
              AWS
            </dd>
            <dt>
              <strong>Issue date</strong>
            </dt>
            <dd>
              <time dateTime="2025-07">July 2025</time>
            </dd>
          </dl>
        </section>
        <section aria-labelledby = "certs-aws-cloud-solutions-architect-pre-exam-section">
          <h3 className = "skills-heading" id = "certs-aws-cloud-solutions-architect-pre-exam-section">
            Cloud Solutions Architect (Pre-exam)
          </h3>
          <dl>
            <dt>
              <strong>Issuer</strong>
            </dt>
            <dd>
              AWS
            </dd>
            <dt>
              <strong>Issue date</strong>
            </dt>
            <dd>
              <time dateTime="2025-07">July 2025</time>
            </dd>
          </dl>
        </section>
        <section aria-labelledby = "certs-ms-cloud-apps-azure-section">
          <h3 className = "skills-heading" id = "certs-ms-cloud-apps-azure-section">
            Building AI Cloud Apps with Microsoft Azure
          </h3>
          <dl>
            <dt>
              <strong>Issuer</strong>
            </dt>
            <dd>
              Microsoft
            </dd>
            <dt>
              <strong>Issue date</strong>
            </dt>
            <dd>
              <time dateTime="2025-07">July 2025</time>
            </dd>
          </dl>
        </section>
        <section aria-labelledby = "certs-ms-ai-ml-engineering-section">
          <h3 className = "skills-heading" id = "certs-ms-ai-ml-engineering-section">
            AI & ML Engineering
          </h3>
          <dl>
            <dt>
              <strong>Issuer</strong>
            </dt>
            <dd>
              Microsoft
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
        </section>
        <section aria-labelledby = "certs-meta-front-end-section">
          <h3 className = "skills-heading" id = "certs-meta-front-end-section">
            Front End Developer
          </h3>
          <dl>
            <dt>
              <strong>Issuer</strong>
            </dt>
            <dd>
              Meta
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
        </section>
      </article>
    </>
  );
}

export default CertsPage;