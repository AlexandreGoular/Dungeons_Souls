import frieren from '../assets/frieren.jpg'
import '../styles/Asside.scss' 

export function Aside() {
    return (
        <>

            <div className="container">
                <aside>

                    <img src={frieren} alt='frieren' />

                </aside>

                <article>

                    <h1>Dungeons Souls</h1>
                    <p>Dungeons Souls é um jogo desafiador onde você deve upar seu boneco para conseguir matar Boses e assim desbloquear novos itens e passar de fase</p>

                </article>
            </div>
        
         
        
        </>
    )
}