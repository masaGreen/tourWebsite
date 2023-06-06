import styles from "@/styles/Footer.module.css";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
export default function Footer() {
  return (
    <main className={styles.main}>
      <section className={styles.wrapper}>
        <div className={styles.footerdiv}>
         
          <div
            style={{
              
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <FontAwesomeIcon icon={faPhone}  style={{
              color: "white",
              fontSize:"1rem",
              height: "3rem",
              width: "3rem",
              borderRadius: "50%"
              }}/>
            <h4>+254712729825</h4>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <FontAwesomeIcon icon={faEnvelope} style={{fontSize:"1.2rem", height: "2rem",
              width: "2rem"}}/>
            <div style={{display:"flex", alignItems:"center", gap:"0.5rem"}}>
              <p className={styles.iconCapture}>greenprinttours@gmail.com</p>
              
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Link href="https://wa.me/254716794207">
              <FontAwesomeIcon
                icon={faWhatsapp}
                style={{
                  color: "white",
                  background: "rgb(11, 158, 11)",
                  height: "3rem",
                  width: "3rem",
                  borderRadius: "50%",
                }}
              /> </Link>

              Click to chat.
           
          </div>
        </div>
      </section>
      <div className={styles.copy}>
        <p className={styles.copyp}>copyright &copy; {new Date().getFullYear()}</p>
      </div>
    </main>
  );
}
