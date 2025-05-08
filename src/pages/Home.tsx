import { Aside } from "../components/Aside";
import { Footer } from "../components/Footer";
import { Section } from "../components/Section";
import '../styles/Index.scss'

export function Home() {

    return (

        <>
            <div className="main">
                <Aside />
                <Section />
                <Footer />
            </div>
            
        </>
    )
}