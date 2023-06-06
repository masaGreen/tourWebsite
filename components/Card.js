import styles from "../styles/Card.module.css";
import Image from "next/image";
import Link from "next/link";
export default function Card({ item }) {
  return (
    <div className={styles.card} id="card">
      <div className={styles.cardImgwrapper}>
        <Image src={`/${item?.image}`} alt={`${item?.title}`} fill className={styles.cardImg} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>
          <h3>{item?.title}</h3>
        </div>
        <div className={styles.cardDescription}>
          <p>{item?.description}</p>
          <Link href={`/holidays/${item?.id}`}>
            <button className={styles.moreBtn}>More</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
