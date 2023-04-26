import styles from "@/styles/Hero.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";

export default function Hero() {
  return (
    <main className={styles.wrapper}>
      {/* <div className={styles.overlay}></div> */}
      <div className={styles.slider}>
        <Carousel
          infiniteLoop={true}
          autoPlay={true}
          transitionTime={2000}
          interval={5000}
          axis="horizontal"
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          stopOnHover={true}
        >
          <div>
            <img src="/oceanview.jpg" alt="" className={styles.img} />
            <h2 className={styles.legend}>
              A diani beach and marine life experience.
              <Link href="/holidays/0">
                <button className={styles.links}>see more</button>
              </Link>
            </h2>
          </div>

          <div>
            <img src="/hellsgate.jpg" alt="" className={styles.img} />
            <h2 className={styles.legend}>
              1 Day trip to Hellsgate National Park.
              <Link href="/holidays/1">
                <button className={styles.links}>see more</button>
              </Link>
            </h2>
          </div>

          <div>
            <img src="/mtkenya.jpg" alt="" />
            <h2 className={styles.legend}>
              Experience the beautiful Mt Kenya National park and Mountain.
              <Link href="/holidays/2">
                                 
                  <button className={styles.links}>see more</button>
                
              </Link>
            </h2>
          </div>
          <div>
            <img src="/longonot.jpg" alt="" className={styles.img} />
            <h2 className={styles.legend}>
              Hike the majestic Mt longonot.
              <Link href="/holidays/3">
                <button className={styles.links}>see more</button>
              </Link>
            </h2>
          </div>
          <div>
            <img src="/aboretum.jpg" alt="" className={styles.img} />
            <h2 className={styles.legend}>
              Loop trail -Nairobi Arboretum.
              <Link href="/holidays/4">
                <button className={styles.links}>see more</button>
              </Link>
            </h2>
          </div>
        </Carousel>
      </div>

     
    </main>
  );
}
