 import styles from './WhatsNew.module.css'

 function WhatsNew() {

  const whatsNewSectionInfos = [
    {
      title: "Hydrogen vs. Electric Cars",
      description: "Will hydrogen-fueled cars ever catch up to  EV's?"
    },
    {
      title: "The Downsides of AI Artistry",
      description: "What are the possible adverese effects of on-demand AI image generation?"
    },
    {
      title: "Is VC Funding Drying Up?",
      description: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
    }
  ]

  return(
    <section className={styles.whatsNew}>
      <h2 className={styles.newItems}>NEW</h2>
      {
        whatsNewSectionInfos.map((item, index) => {

          const { title, description } = item;

          return(
            <article key={index}>
              <h3 className={styles.newTopicTitle}>{title}</h3>
              <p className={styles.newTopicDescription}>{description}</p>
              {index < whatsNewSectionInfos.length - 1 && <hr />}
            </article>
          );

        })
      }
    </section>
  );
 }

 export default WhatsNew