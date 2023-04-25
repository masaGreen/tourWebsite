
import styles from "@/styles/Hero.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Link from "next/link";

export default function Hero(){
    const imageUrls = ["/oceanview.jpg", "/cheetahtree.jpg", "hero.jpg"]
 
    return <main className={styles.wrapper}>
        <div className={styles.overlay}>
            
        </div>
        <div className={styles.slider}>
   
        <Carousel infiniteLoop={true} autoPlay={true}  transitionTime={2000} interval={5000} axis="horizontal" showArrows={false} showThumbs={false} showStatus={false} stopOnHover={true}>
                  
                  
                  <div >
                      <img src="/oceanview.jpg" alt=""  className={styles.img}/>
                      
  
                  </div>
                  <div >

                      <img src="/hellsgate.jpg" alt="" className={styles.img} />
                      
  
                  </div>
                  <div >
                      <img src="/mtkenya.jpg"  alt=""   className={styles.img}/>
                      
  
                  </div>
                  <div >
                    
                 
                      <img src="/longonot.jpg"  alt=""   className={styles.img}/>
                      
  
                  </div>
                  <div >
                    
        
                        
                 
                      <img src="/aboretum.jpg"  alt=""   className={styles.img}/>
                      
  
                  </div>
        </Carousel>
        </div>


        {/* <div className={styles.imageWrapper}>
           
            
            <Image src={`/${imageUrls[0]}.jpg`} alt="" fill  className={styles.img}/>
        </div> */}
    
        {/* </div> */}
    </main>
}