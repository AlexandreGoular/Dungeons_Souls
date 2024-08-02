import { Aside } from "../components/Aside";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function Home() {

    return (

        <>
            <Navbar />
            <div className="container">
                <Aside />
                <Footer />
            </div>
            
        </>
    )
}