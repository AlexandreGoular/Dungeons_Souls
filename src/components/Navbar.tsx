import { Link } from 'react-router-dom'
import '../styles/Navbar.scss'

export function Navbar() {
    return (
        <>
        
        <header>

            <Link id='home' to="/"><h1>Dungeons Souls</h1></Link>


            <a href="#sobre">Sobre</a>
            <a href="#avaliacao">Avaliacao</a>
            <Link to="/admin">Admin</Link>


        </header>
        
        </>
    )
}