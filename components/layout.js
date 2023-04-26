
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";


export default function Layout({children}){
    return(
        <main >
        
            <Navigation/>
            
            <div>{children}</div>
            <Footer/>
        </main>
    );
}