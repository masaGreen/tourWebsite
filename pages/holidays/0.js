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
          <h3>A diani beach and marine life experience.</h3>
        </div>
        <div className={styles.cardDescription}>
          <p>
            Diani Beach is a stunning stretch of white sand beach located on the
            south coast of Kenya, about 30 km south of Mombasa. The beach is
            known for its crystal-clear waters, excellent snorkeling and diving
            opportunities, and laid-back atmosphere.
          </p>

          <p>
            Visitors to Diani Beach can spend their days lounging on the beach,
            swimming in the warm waters of the Indian Ocean, or taking part in a
            variety of water sports, including snorkeling, diving, windsurfing,
            and kiteboarding. The beach is also home to a number of beach bars
            and restaurants, where visitors can enjoy a cold drink or a meal
            while taking in the stunning views.
          </p>
          <p>
            For those looking to explore beyond the beach, Diani is home to a
            number of wildlife reserves, including the Shimba Hills National
            Reserve, which is home to elephants, giraffes, and a variety of
            other animals. Visitors can take a guided tour of the reserve or
            hike through the hills to take in the stunning views.
          </p>
          <p>
            Overall, a trip to Diani Beach in Kenya promises to be a relaxing
            and rejuvenating experience for anyone looking to escape the hustle
            and bustle of everyday life and soak up some sun on one of the most
            beautiful beaches in the world. 
          </p>
        </div>
      </div>
    </div>
  );
}
