import './LevelTwoHeading.css';
import { useArticle } from './ArticleProvider';

function LevelTwoHeading() {
  const { articleKey, activeArticle } = useArticle();

  return (
    <hgroup className="cv-article-heading-group">
      <h2 className="cv-article-heading" id={`${articleKey}-article-heading`}>
        <span className="laptop-span">{activeArticle.title}</span>
        <span className="mobile-span">{activeArticle.mobileTitle}</span>
      </h2>
      <p className="cv-article-subheading" id={`${articleKey}-article-subheading`}>
        {activeArticle.subtitle}
      </p>
    </hgroup>
  );
}

export default LevelTwoHeading;
