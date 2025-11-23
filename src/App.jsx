 
import { useState } from 'react';
import closeIcon from './assets/images/icon-menu-close.svg';

import Navbar from './components/Navbar/Navbar.jsx';
import Headline from './components/Headline/Headline.jsx';
import WhatsNew from './components/WhatsNew/WhatsNew.jsx';
import SubTopic from './components/SubTopic/SubTopic.jsx';

function App() {

  const currentScreenSize = () => {
    return window.matchMedia("(min-width: 1024px)").matches ? true : false;
  }

  const [ isDesktop, setIsDesktop ] = useState(currentScreenSize);
  const [ isSideMenuOn, setIsSideMenuOn ] = useState(false);
  const showSideMenu = isSideMenuOn ? "flex" : "none";

  const handleClick = () => {
    setIsSideMenuOn(isSideMenuOn => !isSideMenuOn);
  }

  return(
    <>
      <main>
        <div className="menu-overlay" style={ {display: showSideMenu} }>
          <aside className='side-menu'>
            <img src={closeIcon} alt="close menu" className='close-menu' onClick={handleClick}/>

            <ul className="side-menu__list">
              <li>Home</li>
              <li>New</li>
              <li>Popular</li>
              <li>Trending</li>
              <li>Categories</li>
            </ul>
          </aside>
        </div>

        <Navbar isDesktop={isDesktop} setIsSideMenuOn={setIsSideMenuOn} />
        <section className='main-content'>
          <Headline setIsDesktop={setIsDesktop} />
          <WhatsNew />
        </section>
        <SubTopic />
      </main>
    </>
  );
}

export default App