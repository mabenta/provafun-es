
import './index.scss'

import { useState } from "react";
import { SignoFunction } from '../funcoes/signo';
import { Link } from 'react-router-dom';

export default function Signo(){

    const [dia, setDia ] = useState (0);
    const [mes, setMes]  = useState ('');
    const [resul, setResul] = useState (false);

    async function SignoLibra(){
        const resposta = await SignoFunction(dia, mes)
        setResul(resposta) 
    }

    return(

        <section className='Signo'>
            <div className='Fundo-Signo'>
            <h1 className='Titulo-Signo'> Fução Signo </h1>
            <div className='Fundo'>
                <div>
                    
                    <div>
                        <h4>Digite o mês:</h4>
                        <input 
                            type="text" 
                            value={mes} 
                            onChange={e => setMes(e.target.value)}/>
                    </div>

                    <div>  
                        <h4>Digite o dia:</h4>
                        <input 
                            type="number" 
                            value={dia} 
                            onChange={e => setDia(e.target.value)}
                            onKeyPress={e => e.key === 'Enter' ? SignoLibra() : ''}/>
                    </div>

                    <div className='resul-button'>
                        <div>
                            <button onClick={SignoLibra}> Checar </button> 
                        </div>
                        <div>
                            {resul === true ? 'Signo é Libras? Sim' : 'Signo é Libras? Não'}
                        </div>
                    </div>

                </div>

            </div>
            </div>
        </section>

    )
}