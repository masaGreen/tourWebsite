import styles from "@/styles/Holiday.module.css"
import Image from "next/image"

export default function Card(){

 
    return(

        <div className={styles.card}>
            <div className={styles.cardImgwrapper}>
              <Image src= "/mtkenya.jpg" alt="" fill className={styles.cardImg}/>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>
                <h3>
                  Experience the beautiful Mt Kenya National park and Mountain.
                </h3>
              </div>
              <div className={styles.cardDescription}>
                <p>
                Mount Kenya is the highest mountain in Kenya and the second-highest in Africa, with its highest peak, Batian, standing at 5,199 meters above sea level. The mountain is a popular destination for hikers, climbers, and nature lovers, thanks to its stunning landscapes and rich biodiversity.</p>

                    <p>Visitors to Mount Kenya can explore the mountain&nbsp;s diverse ecosystems, which range from tropical rainforest to alpine moorland. There are a number of hiking trails that lead to the summit, with different levels of difficulty to suit all experience levels.
                        </p>
                    <p>Visitors to Mount Kenya can explore the mountain&nbsp;s diverse ecosystems, which range from tropical rainforest to alpine moorland. There are a number of hiking trails that lead to the summit, with different levels of difficulty to suit all experience levels.
                        </p>
                    <p>One of the most popular routes is the Sirimon Route, which takes visitors through the mountain&nbsp;s northern slopes and offers spectacular views of the surrounding landscapes. Other popular routes include the Chogoria Route and the Naro Moru Route.
                        </p>
                    <p>As visitors climb the mountain, they will have the opportunity to spot a wide variety of wildlife, including elephants, buffalo, and antelopes. The mountain is also home to a number of bird species, including the endangered Abbott&nbsp;s Starling.
.                   </p>  
                    <p>
                    At the top of the mountain, visitors will be rewarded with stunning views of the surrounding landscapes, including the African savannah, the Rift Valley, and even Mount Kilimanjaro on clear days.
                    </p>
                    <p>
                        It is an adventure like no other.
                    </p>
                 
              </div>

            </div>
          </div>
    )
}





