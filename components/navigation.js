import Link from "next/link";
import styles from "@/styles/Navigation.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Navigation() {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="GreenPrint"
            fill
            className={styles.logoImg}
          />
        </Link>
      </div>

      {/* </Link> */}

      <div className={styles.navLinks}>
        <div>
          <Link href="https://wa.me/254712729825">
            <FontAwesomeIcon
              icon={faWhatsapp}
              style={{
                color: "white",
                background: "rgb(11, 158, 11)",
                height: "3rem",
                width: "3rem",
                borderRadius: "50%",
              }}
            />
          </Link>
        </div>
        <div className={styles.sm}>
          <Link href="/">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{
                color: "rgb(0, 110, 255)",
                background: "white",
                border: "none",
                outline: "none",
                height: "3rem",
                width: "3rem",
                borderRadius: "50%",
              }}
            />
          </Link>
        </div>
        <div className={styles.sm}>
          <Link href="/">
            <FontAwesomeIcon
              icon={faInstagram}
              style={{
                color: "white",
                background: "rgb(245,50,50)",
                border: "none",
                outline: "none",
                height: "3rem",
                width: "3rem",
                borderRadius: "50%",
              }}
            />
          </Link>
        </div>

        <Link href={"/"} className={styles.link}>
          Home
        </Link>
        {/* <div className={styles.linksDropdown}>
                    <button className={styles.menu_btn}>
                        Popular Tours
                    </button>
                    <div className={styles.links}>
                        <Link href={"/about"} className={styles.droplink}>Local Tours</Link>
                        <Link href={"/about"} className={styles.droplink}>international Tours</Link>
                    </div>
                </div> */}
        <Link href={"/about"} className={styles.link}>
          <li className={`${styles.link} ${styles.hide}`}>About us</li>
        </Link>
        <Link href={"/contacts"} className={`${styles.link} ${styles.sm}`}>
          <li className={styles.link}>Contacts</li>
        </Link>
      </div>
    </nav>
  );
}
