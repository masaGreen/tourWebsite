import styles from "@/styles/Holiday.module.css";
import Image from "next/image";
// "start": "NODE_ENV=production node server.js"
export default function Card() {
  return (
    <div className={styles.card} id="card">
      <div className={styles.cardImgwrapper}>
        <Image src="/aboretum.jpg" alt="Loop trail -Nairobi Arboretum" fill className={styles.cardImg} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>
          <h3>Loop trail -Nairobi Arboretum</h3>
        </div>
        <div className={styles.cardDescription}>
          <p>
            The Nairobi Arboretum Loop Trail is a popular nature walk located in
            the heart of Nairobi, Kenya. The trail is approximately 3.2
            kilometers long and takes visitors through the lush greenery of the
            arboretum, which is home to over 300 different species of trees and
            shrubs.
          </p>

          <p>
            The trail is well-maintained and easy to navigate, making it
            accessible to people of all ages and fitness levels. Along the way,
            visitors will encounter a variety of wildlife, including birds,
            butterflies, and even small mammals like bush babies.
          </p>
          <p>
            Some of the highlights of the trail include a serene pond, a bamboo
            forest, and a scenic lookout point that offers stunning views of the
            surrounding cityscape. There are also several picnic areas and
            benches scattered throughout the arboretum, providing plenty of
            opportunities to take a break and enjoy the natural surroundings.
          </p>
          <p>
            Overall, the Nairobi Arboretum Loop Trail is a wonderful way to
            escape the hustle and bustle of the city and experience the beauty
            of nature in the heart of Kenya&nbsp;s capital.
          </p>
        </div>
      </div>
    </div>
  );
}
