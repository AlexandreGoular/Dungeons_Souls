import { useEffect, useState } from "react";
import postFetch from '../axios/config';

export function Administrador() {
    const [user, setUser] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await postFetch.get('/avaliacoes');
                console.log(response.data); 
                setUser(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <h1>Admin</h1>
            <div className="App">
                <ul>
                    {user.length === 0 ? (
                        <li>Nenhuma avaliação encontrada.</li>
                    ) : (
                        user.map((item, index) => (
                            <li key={index}>
                                <strong>{item.emailPessoa}</strong>: {item.avaliacao}
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </>
    );
}
