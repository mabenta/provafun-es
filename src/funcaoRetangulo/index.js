
import './index.scss'

import { useState } from 'react'
import { criarRetangulo } from '../funcoes/retangulo'

export default function Formato(){

    const [ base, setBase ] = useState(0)
    const [ colunas, setColunas ] = useState(0)
    const [ resultado, setResultado ] = useState([])

    async function formarRetangulo(){
        const r = await criarRetangulo(base, colunas)
        setResultado(r)
    }
    
    return(
        <section>
           
            <h1 className='Titulo-Salario'>Teste2</h1>
            <div className='Fundo'>  
                <div>
                    <label>Informe a quantidades de linhas:</label>
                    <input
                        type="number"
                        value={base}
                        onChange={e => setBase(e.target.value)}/>
                </div>

                <div>
                    <label>Informe a quantidades de colunas:</label>
                    <input 
                        type="number"
                        value={colunas}
                        onChange={e => setColunas(e.target.value)}/>
                </div>

                <div className='resul-button'>
                    <div>
                        <button className='butao-calc-salario' onClick={formarRetangulo}>Formar</button> 
                    </div>

                <div className='Resultado-N'>
                    {resultado}
                </div>

                </div>
            </div>
            
        </section>
    )
}