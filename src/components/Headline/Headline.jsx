
import { useState, useEffect } from 'react';
import styles from './Headline.module.css';
import headlineImgMobile from '../../assets/images/image-web-3-mobile.jpg';
import headlineImgDesktop from '../../assets/images/image-web-3-desktop.jpg';

function Headline({ setIsDesktop }) {

  const getInitialImg = () => {
    return window.matchMedia("(min-width: 1024px)").matches ? headlineImgDesktop : headlineImgMobile;
  }

  const [ headlineImg, setHeadlineImg ] = useState(getInitialImg);

  const handleResize = () => {
    if(window.matchMedia("(min-width: 1024px)").matches) {
      setHeadlineImg(headlineImgDesktop);
      setIsDesktop(true);
    } else {
      setHeadlineImg(headlineImgMobile);
      setIsDesktop(false);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return() => {
      window.removeEventListener('resize', handleResize);
    };
  })

  return(
    <section className={styles.headline}>
      <img src={headlineImg} alt="headline" className={styles.headlineImg} />
      <article className={styles.headlineInfoContainer}>
        <h1 className={styles.headlineTitle}>The Bright Future of Web 3.0?</h1>

        <div className={styles.headlineInfo}>
          <p>
            We dive into the next evolution of the web that 
            claims to put the power of the platforms back into the 
            hands of the people. But is it really fulfilling its promise?
          </p>

          <button type='submit'>READ MORE</button>
        </div>
      </article>
    </section>
  );
}

export default Headline;