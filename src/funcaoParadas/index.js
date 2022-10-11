import './index.scss'
import { useState } from 'react'

import FuncaoParadas from '../funcoes/paradas'

export default function Paradas(){

    const [capacidade, setCapacidade] = useState(0)
    const [distancia, setDistancia] = useState(0)
    const [consumo, setConsumo] = useState(0)
    const [mensagem, setMensagem] = useState('---')

   async function calcularClick() {
        const calcular = await FuncaoParadas(capacidade, consumo, distancia, mensagem)
        setMensagem(calcular)
    }





    return(
        <div className='Principlal-Paradas'>
            <h1>CALCULAR QUANTAS PARADAS</h1>
            <div className='input'>
                <h4>Informe a Capacidade:</h4>
                <input type='number' value={capacidade} onChange={e => Number (setCapacidade(e.target.value))}></input>
            </div>
            <div className='input'>
                <h4>Informe o Consumo:</h4>
                <input type='number' value={consumo} onChange={e => Number (setConsumo(e.target.value))}></input>
            </div>
            <div className='input'>
                <h4>Informe a Distância:</h4>
                <input type='number' value={distancia} onChange ={e => Number (setDistancia(e.target.value))}></input>
            </div>
            <button onClick ={calcularClick}> Calcular </button>
            <div>
            <span>  VOCE PRECISA FAZER:   {mensagem} PARADAS </span>
            </div>
        </div>
    )
}