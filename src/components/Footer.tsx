import React, { useState } from 'react';
import postFetch from '../axios/config';
import '../styles/Footer.scss'

export function Footer() {
    const [emailPessoa, setEmailPessoa] = useState('');
    const [avaliacao, setAvaliacao] = useState('');

    const createAvaliacao = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const post = { emailPessoa, avaliacao };

        try {
            const response = await postFetch.post('/home', post);
            console.log('Avaliacao Criada', response.data);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <footer>
            <form onSubmit={createAvaliacao}>
                <input
                    className='campos'
                    type="text"
                    placeholder="Digite seu email"
                    value={emailPessoa}
                    onChange={(e) => setEmailPessoa(e.target.value)}
                />
                <input
                    className='campos'
                    type="text"
                    placeholder="Digite sua Avaliacao"
                    value={avaliacao}
                    onChange={(e) => setAvaliacao(e.target.value)}
                />
                <input type="submit" value="Enviar Avaliacao" />
            </form>
        </footer>
    );
}
