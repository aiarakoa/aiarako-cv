import './Footer.css';

function Footer()
{
  return (
    <>
      <footer>
        <a target = "_blank" rel = "noopener noreferrer" href="https://opensource.org/license/mit">
          © 2025 Carlos de la Cruz Ayala Vargas (See MIT licence)
        </a>
        <a target = "_blank" rel = "noopener noreferrer" href="http://aws.amazon.com/what-is-cloud-computing">
          <img src={`${process.env.PUBLIC_URL}/images/poweredbyaws.png`} alt="Powered by AWS Cloud Computing" />
        </a>
      </footer>
    </>
  );
}

export default Footer;