import './TopNavList.css';
import CVNavLink from './CVNavLink';
import { useCV } from "./CVProvider";

function TopNavList(props)
{
    const {articles} = useCV();
    return (
        <ul>
        {
          Array.from(articles.entries()).map((artEntry, artIndex) => {
            const artKey  = artEntry[0];
            const article = artEntry[1];
            return (
              <li key = {artKey}>
                <CVNavLink artIndex = {artIndex} article={article} artKey={artKey} />
              </li>
            )
          })
        }
        </ul>
    );
}

export default TopNavList;