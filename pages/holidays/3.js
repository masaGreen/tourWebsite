import styles from "@/styles/Holiday.module.css";
import Image from "next/image";

export default function Card() {
  return (
    <div className={styles.card} id="card">
      <div className={styles.cardImgwrapper}>
        <Image src="/longonot.jpg" alt="" fill className={styles.cardImg} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>
          <h3>Hike the majestic Mt longonot.</h3>
        </div>
        <div className={styles.cardDescription}>
          <p>
            Mt. Longonot is a dormant volcano located in the Great Rift Valley
            of Kenya, about 90 km northwest of Nairobi. Hiking Mt. Longonot is a
            popular activity for outdoor enthusiasts and adventure seekers
            visiting Kenya.
          </p>

          <p>
            The hike to the summit of Mt. Longonot is approximately 4.1
            kilometers and takes around 2-3 hours, depending on the fitness
            level of the hiker. The trail is well-marked and starts off with a
            gradual ascent through grasslands and acacia woodlands. As you
            continue hiking, the trail becomes steeper and rockier, with several
            switchbacks and steep inclines.
          </p>
          <p>
            Once you reach the summit, you&nbsp;ll be rewarded with breathtaking
            panoramic views of the Great Rift Valley and nearby Lake Naivasha.
            On a clear day, you can even see Mt. Kilimanjaro, Africa&nbsp;s
            highest peak, in the distance.
          </p>
          <p>
            Hiking Mt. Longonot can be challenging due to the altitude, steep
            inclines, and rocky terrain. Its&nbsp; important to wear
            comfortable, sturdy hiking shoes and bring plenty of water and
            snacks. Additionally, it&nbsp;s recommended to hire a guide who can
            provide insights into the local flora and fauna and ensure your
            safety on the trail.
          </p>
          <p>
            Hiking Mt. Longonot is an exhilarating and rewarding experience that
            offers stunning views of one of Kenya&nbsp;s most iconic landscapes.
           
          </p>
        </div>
      </div>
    </div>
  );
}
