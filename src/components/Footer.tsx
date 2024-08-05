import React, { useState } from 'react';
import postFetch from '../axios/config';
import '../styles/Footer.scss'
import Swal from 'sweetalert2'


export function Footer() {



    const [emailPessoa, setEmailPessoa] = useState('');
    const [avaliacao, setAvaliacao] = useState('');

    const createAvaliacao = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const post = { emailPessoa, avaliacao };

        try {
            const response = await postFetch.post('/home', post);
            console.log('Avaliacao Criada', response.data);
            setTimeout(() => {
                window.location.reload();
            }, 5000)
        } catch (error) {
            console.log(error);
        }
    };

    function alerta() {
        Swal.fire(
            'Formulario Enviado',
            'Obrigado pelo feedback',
            'success'
        )
    }


    return (
        <footer>

            <h1 id='avaliacao'>Avaliacao</h1>


            <form onSubmit={createAvaliacao}>
                <input
                    className='email'
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
                <input onClick={alerta} className='btn' type="submit" value="Enviar Avaliacao" />
            </form>
        </footer>
    );
}
