 import styles from './WhatsNew.module.css'

 function WhatsNew() {

  return(
    <section className={styles.whatsNew}>
      <h2>NEW</h2>
      <article className={styles.newContent1}>
        <h3>Hydrogen vs. Electric Cars</h3>
        <p>Will hydrogen-fueled cars ever catch up to  EV's?</p>
      </article>

      <hr />

      <article className={styles.newContent2}>
        <h3>The downside of AI Artistry</h3>
        <p>What are the possible adverese effects of on-demand AI image generation?</p>
      </article>

      <hr />

      <article className={styles.newContent3}>
        <h3>Is VC Funding Drying Up?</h3>
        <p>
          Private funding by VC firms is down 50% YOY.
          We take a look at what that means.
        </p>
      </article>
    </section>
  );
 }

 export default WhatsNew