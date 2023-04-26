import styles from "@/styles/Holiday.module.css";
import Image from "next/image";

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.cardImgwrapper}>
        <Image src="/hellsgate.jpg" alt="" fill className={styles.cardImg} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>
          <h3>1 Day trip to Hellsgate National Park</h3>
        </div>
        <div className={styles.cardDescription}>
          <p>
            Hell&nbsp;s Gate National Park is located in the Rift Valley
            Province of Kenya, about 90 km from Nairobi. It is known for its
            unique geology, which includes towering cliffs, gorges, and hot
            springs. The park is home to a variety of wildlife, including
            buffalo, giraffe, baboons, and a large number of birds.
          </p>

          <p>
            Visitors to Hells&nbsp; Gate National Park can explore the park on
            foot, by bike, or by car. There are a number of hiking trails that
            lead through the park&nbsp;s stunning landscapes, including the
            Gorge Trail, which takes visitors through a narrow, winding canyon.
            The park is also home to two extinct volcanoes, Fischer&nbsp;s Tower
            and Central Tower, which offer great opportunities for rock
            climbing.
          </p>
          <p>
            One of the main attractions of Hel&nbsp;ls Gate National Park is its
            hot springs. The park&nbsp;s geothermal activity heats the water to
            temperatures of up to 80°C, and visitors can bathe in the hot pools
            or enjoy a natural spa treatment using the mineral-rich mud.
          </p>
          <p>
            Overall, a trip to Hell&nbsp;s Gate National Park in Kenya promises
            to be an unforgettable adventure for anyone who loves nature,
            wildlife, and outdoor activities. 
          </p>
        </div>
      </div>
    </div>
  );
}
