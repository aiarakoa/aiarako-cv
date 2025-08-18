//import './CertsPage.css';

function CertsPage() {
  return (
    <>
      <section>
        <h2 id="personal-h1">
          Licences and Certificates
        </h2>
        <address>
          <p>
            <a href="mailto:you@example.com">you@example.com</a>
          </p>
          <p>
            <a href="tel:+34600000000">+34 600 000 000</a>
          </p>
          <p>
            <a href="https://github.com/aiarakoa" rel="me">github.com/aiarakoa</a>
          </p>
        </address>
        <dl>
          <dt>Location</dt>
          <dd>Madrid, ES</dd>
          <dt>Availability</dt>
          <dd>From <time datetime="2025-09-15">15 Sep 2025</time></dd>
          <dt>Driving license</dt>
          <dd>B</dd>
        </dl>
      </section>
    </>
  );
}

export default CertsPage;