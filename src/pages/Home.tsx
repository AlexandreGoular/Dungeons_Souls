import { Aside } from "../components/Aside";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Section } from "../components/Section";

export function Home() {

    return (

        <>
            <Navbar />
            <div className="main">
                <Aside />
                <Section />
                <Footer />
            </div>
            
        </>
    )
}