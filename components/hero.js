import Image from "next/image";
import styles from "@/styles/Hero.module.css"

export default function Hero(){
    return <main className={styles.wrapper}>
        <div className={styles.overlay}>
            <div><p style={{fontSize:"3rem", fontWeight:"500", textAlign:"center" , color:"white"}}>It's adventure time!!!</p></div>
        </div>
        <div className={styles.imageWrapper}>
            
            <Image src="/hero.jpg" alt="" fill  className={styles.img}/>
        </div>
    </main>
}