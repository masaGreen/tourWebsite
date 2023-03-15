import '@/styles/globals.css'
import Layout from "@/components/layout"
import createEmotionCache from '@/utilities/createEmotionCache'


export default function App({ Component, pageProps }) {
 

  return (
    
      
        <Layout >
        <Component {...pageProps} />
        </Layout>
    
      
      
     
  )
   
}
