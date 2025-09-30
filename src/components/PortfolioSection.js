import GenSection from './GenSection';

function PortfolioSection() {
  function mapIFrame(activeSection) {
    return activeSection.iFrame ? (
      <iframe
        src={`${activeSection.iFrameURL}.html`}
        title={activeSection.title}
        scrolling={'no'}
        seamless={'seamless'}
      ></iframe>
    ) : null;
  }

  return (
    <>
      <GenSection iFrameMapper={mapIFrame}></GenSection>
    </>
  );
}

export default PortfolioSection;
