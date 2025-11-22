
import styles from './Navbar.module.css';
import logo from '/src/assets/images/logo.svg';
import menuIcon from '/src/assets/images/icon-menu.svg';

function Navbar() {
  
  return(
    <header className={styles.heading} >
      <img src={logo} alt="logo" className={styles.logo} />

      <nav className={styles.nav}>
        
        {/* <ul className={styles.navList}>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>  */}

        <img src={menuIcon} alt="manu" />

      </nav>

    </header>
  );
}

export default Navbar