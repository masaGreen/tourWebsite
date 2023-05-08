import Link from "next/link";
import styles from "@/styles/Navigation.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  
} from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faContactBook } from "@fortawesome/free-regular-svg-icons";

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
                height: "2rem",
                width: "2rem",
                borderRadius: "50%",
              }}
            />
          </Link>
        </div>
        <div >
          <Link href="https://www.facebook.com/Greenprinttours/">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{
                color: "rgb(0, 110, 255)",
                background: "white",
                border: "none",
                outline: "none",
                height: "2rem",
                width: "2rem",
                borderRadius: "50%",
              }}
            />
          </Link>
        </div>
        <div className={styles.hide}>
          <Link href="/">
            <FontAwesomeIcon
              icon={faInstagram}
              style={{
                color: "white",
                background: "rgb(245,50,50)",
                border: "none",
                outline: "none",
                height: "2rem",
                width: "2rem",
                borderRadius: "50%",
              }}
            />
          </Link>
        </div>
      

        
        <Link href={"/"} className={`${styles.link} ${styles.home}`}>
        <FontAwesomeIcon
              icon={faHome}
              style={{
                color: "rgb(100, 110, 70)",
               
                border: "none",
                outline: "none",
                height: "2rem",
                width: "2rem",
              
              }}
            />
             </Link>
          <Link href={"/"} className={`${styles.link} ${styles.d}`}>
          <h4>Home</h4>
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
        <Link href={"/about"} className={`${styles.link} ${styles.hide}`}>
          <li className={`${styles.link} `}><h4>About us</h4></li>
        </Link>
        <Link href={"/contacts"} className={`${styles.link} ${styles.home} `}>
          
          <FontAwesomeIcon
              icon={faContactBook}
              style={{
                color: "rgb(100, 110, 70)",
               
                border: "none",
                outline: "none",
                height: "2rem",
                width: "2rem",
              
              }}
            />
            </Link>
            <Link href={"/"} className={`${styles.link} ${styles.d}`}>
             <h4 >Contacts</h4>
             </Link>
            
            
        
      </div>
    </nav>
  );
}
