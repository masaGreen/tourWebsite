import styles from "@/styles/Holiday.module.css";
import Image from "next/image";

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.cardImgwrapper}>
        <Image src="/oceanview.jpg" alt="" fill className={styles.cardImg} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>
          <h3>Visit Samburu National Park.</h3>
        </div>
        <div className={styles.cardDescription}>
          <p>
          Samburu National Park is located in northern Kenya and is known for its unique wildlife species that are not found in other Kenyan national parks. A visit to Samburu National Park usually involves a game drive, where visitors can spot various animals, including the famous "Samburu Special Five," which includes the Somali ostrich, Grevy's zebra, reticulated giraffe, Beisa oryx, and gerenuk.
          </p>

          <p>
          Visitors can also enjoy cultural experiences by interacting with the Samburu people who live around the park. The Samburu are semi-nomadic pastoralists who have maintained their traditional way of life and culture, making them a fascinating group to learn about.
          </p>
          <p>
          Accommodation options in and around the park range from luxury lodges to more budget-friendly options. Visitors can choose to stay within the park itself or in lodges and camps outside the park.
          </p>
          <p>
          Overall, a visit to Samburu National Park promises to be a unique and memorable experience, offering visitors a chance to see wildlife and culture that are not found in other parts of Kenya.
          </p>
        </div>
      </div>
    </div>
  );
}
