import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate(); // Hook para navegação no React Router

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (usuario !== "dg123" || senha !== "1234") {
            alert("Erro");
        } else {
            navigate("/servidor"); // Redireciona corretamente dentro do React Router
        }
    };

    return (
        <>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="user"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                />
                <input
                    type="password"
                    id="pass"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />

                <button type="submit">Login</button>
            </form>
        </>
    );
}
