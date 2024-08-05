import iconReact from '../assets/iconReact.jfif'
import iconScss from '../assets/iconScss.jfif'
import iconSpring from '../assets/iconSpring.jfif'
import iconMaria from '../assets/iconMariaDB.jfif'
import '../styles/Section.scss'



export function Section() {
    return (
        <>
        
            <section>

                <h4>Tecnologias</h4>

                <div className="tecnologias">
                    <img src={iconReact} alt="React icone" />
                    <img src={iconMaria} alt="Maria DB icone" />
                    <img src={iconSpring} alt="Spring icone" />
                    <img src={iconScss} alt="Scss icone" />
                </div>

            </section>
        
        </>
    )
}