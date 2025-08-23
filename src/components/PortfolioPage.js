//import './PortfolioPage.css';
import { useCV } from "./CVProvider";

function PortfolioPage(props)
{
  const {articles, sections} = useCV();
  const thisArticle = articles.get(props.articleKey);

  return (
    <>
      <article aria-labelledby = "portfolio-article">
        <h2 className = "cv-article-heading" id = {`${props.articleKey}-article-heading`}>
          <span className="laptop-span">
              {thisArticle.title}
          </span>
          <span className="mobile-span">
              {thisArticle.mobileTitle}
          </span>
        </h2>
        <p className = "cv-article-subheading" id = {`${props.articleKey}-article-subheading`}>
            {thisArticle.subtitle}
        </p>
        <p>
          <em>Soon...</em>
        </p>
      </article>
    </>
  );
}

export default PortfolioPage;