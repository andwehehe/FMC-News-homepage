
import styles from './SubTopic.module.css';
import subTopicImg1 from '../../assets/images/image-retro-pcs.jpg';
import subTopicImg2 from '../../assets/images/image-top-laptops.jpg';
import subTopicImg3 from '../../assets/images/image-gaming-growth.jpg';

function SubTopic() {

  const subTopics = [
    {
      title: "Reviving Retro PCs",
      image: subTopicImg1,
      description: "What happens when old PCs are given modern updates?"
    },
    {
      title: "Top 10 Laptops of 2022",
      image: subTopicImg2,
      description: "Our best picks for various needs and budgets."
    },
    {
      title: "The Growth of Gaming",
      image: subTopicImg3,
      description: "How the pandemic has sparked fresh opportunities."
    },
  ]

  return(
    <section className={styles.subTopicsContainer}>

      {
        subTopics.map((topic, index) => {
          const { title, image, description } = topic;

          return(
            <article className={styles.subTopic} key={index}>
              <img src={image} alt={title} />

              <div className={styles.subTopicInfos}>
                <h2>0{index + 1}</h2>
                <h3 className={styles.subTopicTitle}>{title}</h3>
                <p className={styles.subTopicDescription}>{description}</p>
              </div>
            </article>
          );

        })
      }

    </section>
  );
}

export default SubTopic