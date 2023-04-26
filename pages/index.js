import Head from 'next/head'

import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from "@/components/hero"
import Link from 'next/link'
import Card from '@/components/Card'
const inter = Inter({ subsets: ['latin'] })

const imageUrls = ["oceanview", "cheetahtree", "hero"]
export default function Home(props) {

 
  return (
    <>
      <Head>
        <title>Tour Website</title>
        <meta name="description" content="Tour with us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={styles.main}>
       <Hero/>
       <section className={styles.aboutus}>
        <div className={styles.overlay}/>
        <div className={styles.content}>
          <p>
          Are you a Kenyan national or an expat living in Kenya? We&#39;ll help you explore Kenya, the wider eastern Africa, and the rest of the world.
          </p>
          
          <p>
          We&#39;re always ready to serve you. We&#39;ll help you book your hotels, book your flight, organize airport transfers, choose the best and most unique destinations for your tours. Anything to make your travel convenient & affordable. This way, you can explore, meet new people & create lasting memories.
          </p>
          <p>
            Reach out to us on <span><Link href="/contacts" style={{color:"orange"}}>our contacts</Link></span> or view our <span><Link href="/tours" style={{color:"orange"}}>packages</Link></span>
          </p>

        </div>
        <h1 style={{fontWeight:"600", fontSize:"2rem", textAlign:"center", textDecoration:"underline", marginBlock:"2rem", color:"orange", cursor:"pointer"}}>Upcoming tours & holidays</h1>
        
         <div className={styles.cards}>
          {!props ? <h1>loading ...</h1>:
          
            props.data.upcoming?.map((item, index)=>{
              return <Card item={item} key={index}/>
            })
}
          
        </div>
        {/* <h1 style={{fontWeight:"600", fontSize:"2rem", textAlign:"center", textDecoration:"underline", marginBlock:"2rem", color:"purple", cursor:"pointer"}}>Popular Destinations</h1> */}
        <div className={styles.cards}>

        {/* {!props ? <h1>loading ...</h1>:
          
          props.data.popular?.map((item, index)=>{
            return <Card item={item} key={index}/>
          })
} */}
          
        </div>
       </section>
      </main>
    </>
  )
}

import fs from 'fs';
import path from "path";

export async function getStaticProps() {
  // Read the file contents
  const data = await fs.promises.readFile(path.resolve('data.json'));
  
  // Parse the JSON data
  const jsonData = JSON.parse(data);
  
  return {
    props: {
      data: jsonData
    }
  };
}

