import './Header.css';
import LevelOneHeading from './LevelOneHeading';
import NewTopNav from './NewTopNav';
import { TopNavProvider } from './TopNavProvider';

function Header() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <header>
        <LevelOneHeading />
        <TopNavProvider>
          <NewTopNav />
        </TopNavProvider>
      </header>
    </>
  );
}

export default Header;
