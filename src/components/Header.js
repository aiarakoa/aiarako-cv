import './Header.css';
import LevelOneHeading from './LevelOneHeading';
import TopNav from './TopNav';
import { TopNavProvider } from "./TopNavProvider"

function Header()
{
  return (
    <>
      <a className = "skip-link" href = "#main">Skip to main content</a>
      <header>
        <LevelOneHeading />
        <TopNavProvider>
          <TopNav />
        </TopNavProvider>
      </header>
    </>
  );
}

export default Header;