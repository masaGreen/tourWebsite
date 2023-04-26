import styles from "../styles/Contacts.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram,  faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
export default function contacts(){
    return(
    <div className={styles.card}>
        
          <div className={styles.cardDescription}>
            <h3 style={{fontSize:"1rem", fontFamily:"cursive",padding:"0.5rem"}}>You can reach us through email <strong style={{color:"blue"}}>greenprinttours@gmail.com</strong> or through our social media pages.</h3>
            <div className={styles.medialinks}>
            <div><Link href="https://wa.me/254716794207"><FontAwesomeIcon icon={faWhatsapp} style={{color: "white",background:"rgb(11, 158, 11)", height:"3rem", width:"3rem", borderRadius:"50%"}} /></Link></div>  
                <div><Link href="/"><FontAwesomeIcon icon={faFacebook} style={{color:"rgb(0, 110, 255)", background:"white",border:"none", outline:"none",height:"3rem", width:"3rem", borderRadius:"50%"}} /></Link></div>  
                <div><Link href="/"><FontAwesomeIcon icon={faInstagram} style={{color:"white", background:"rgb(245,50,50)",border:"none", outline:"none",height:"3rem", width:"3rem", borderRadius:"50%"}} /></Link></div>  
                  
            </div>
           
          </div>
       
      </div>
    )
}