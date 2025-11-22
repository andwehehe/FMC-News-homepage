
import styles from './Headline.module.css';
import headlineImg from '/src/assets/images/image-web-3-mobile.jpg';

function Headline() {

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