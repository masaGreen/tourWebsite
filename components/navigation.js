import Link from "next/link";
import styles from "@/styles/Navigation.module.css"


export default function Navigation(){
    
    return (
        
        <nav className={styles.wrapper}>
            
           <div className={styles.logo}>
            <h2><Link href={"/"} className={styles.link}>LOGO</Link></h2>
              <div><Link href="https://wa.me/254716794207"><button>whatsapp?</button></Link></div>  
            </div> 
            <div className={styles.navLinks}>
                <Link href={"/"} className={`${styles.link} ${styles.hide}`}>Home</Link>
                <div className={styles.linksDropdown}>
                    <button className={styles.menu_btn}>
                        Popular Tours
                    </button>
                    <div className={styles.links}>
                        <Link href={"/about"} className={styles.droplink}>Local Tours</Link>
                        <Link href={"/about"} className={styles.droplink}>international Tours</Link>
                    </div>
                </div>
                <Link href={"/about"} className={styles.link}><li className={`${styles.link} ${styles.hide}`}>About us</li></Link>
                <Link href={"/contacts"} className={styles.link}><li className={styles.link}>Contacts</li></Link>
            </div>
        </nav>
    
       )
   
}