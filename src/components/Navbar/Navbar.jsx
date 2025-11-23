
import styles from './Navbar.module.css';
import logo from '../../assets/images/logo.svg';
import menuIcon from '../../assets/images/icon-menu.svg';

function Navbar({ isDesktop, setIsSideMenuOn }) {

  const handleClick = () => {
    setIsSideMenuOn(isSideMenuOn => !isSideMenuOn);
  }

  const menuDisplay = isDesktop ? 
        <ul className={styles.navList}>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul> : <img 
                  src={menuIcon} 
                  alt="menu" 
                  className={styles.menu} 
                  onClick={handleClick}
                  />
  
  return(
    <header className={styles.heading} >
      <img src={logo} alt="logo" className={styles.logo} />
      <nav className={styles.nav}>{menuDisplay}</nav>
    </header>
  );
}

export default Navbar