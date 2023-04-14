import styles from "../styles/Card.module.css"
import Image from "next/image"
import Link from "next/link"
export default function Card({imageUrl}){
    return(

        <div className={styles.card}>
            <div className={styles.cardImgwrapper}>
              <Image src= {`/${imageUrl}.jpg`} alt="" fill className={styles.cardImg}/>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardTitle}>
                <h3>
                  3 Days Maasai Mara Group Joining Safari (2023 wildebeest migration)
                </h3>
              </div>
              <div className={styles.cardDescription}>
                <p>
                A trip to Maasai Mara, also known as Masai Mara National Reserve, 
                is an exciting adventure for wildlife enthusiasts and nature lovers. 
                Here&#39;s what a typical trip to Maasai Mara entails:... <Link href="/holidays/ocean"><button className={styles.moreBtn}>More</button></Link>
{/* 
                    Getting There: Maasai Mara is located in southwestern Kenya and can be accessed by air or road. If you're flying, you'll land at Mara Serena Airport or Keekorok Airport, both of which are located within the reserve. If you're driving, the journey takes about five to six hours from Nairobi.

                    Accommodation: There are various types of accommodation available in and around Maasai Mara, ranging from luxury lodges to tented camps. The lodges offer comfortable rooms with en-suite bathrooms, while the tented camps offer a more authentic safari experience, with canvas tents and open-air showers.

                    Game Drives: Game drives are the highlight of any trip to Maasai Mara. You'll go on early morning and late afternoon game drives to see the animals when they're most active. You'll see a wide range of wildlife, including lions, elephants, buffalos, leopards, cheetahs, hyenas, and many more.

                    Maasai Village Visit: A visit to a Maasai village is an opportunity to learn about the traditional way of life of the Maasai people. You'll be welcomed by the villagers, who will show you around their village and demonstrate their cultural practices, including dancing and singing.

                    Hot Air Balloon Safari: A hot air balloon safari is a unique way to experience the beauty of Maasai Mara. You'll float above the savannah, seeing the wildlife from a different perspective and enjoying breathtaking views of the landscape.

                    Bush Walks: For a more intimate and immersive experience, you can go on a bush walk with an experienced guide. You'll walk through the wilderness, learning about the plants, animals, and insects that make up the ecosystem.

                    Cultural Performances: In the evenings, you'll have the opportunity to watch cultural performances by Maasai dancers, who will showcase their traditional songs and dances.

        Overall, a trip to Maasai Mara is an unforgettable experience that offers a unique combination of wildlife, culture, and adventure. */}
                </p>
              </div>

            </div>
          </div>
    )
}