
import './index.scss'
import { useState } from 'react'

import SalarioLiquido from '../funcoes/salario'


export default function Salario(){

    const [salario, setSalario] = useState(0)
    const [bonus, setBonus] = useState(0)
    const [desc, setDesc] = useState(0)
    const [mensagem, setMensagem] = useState('---')

    function calcularClick() {
        const valorfinal = SalarioLiquido(salario, bonus, desc, mensagem)
        setMensagem(valorfinal)
    }

    return(
        <div>
            <h1>Calcular Salario</h1>
            <div className='input'>
                <h4>Informe o Salário:</h4>
                <input type='number' value={salario} onChange={e => Number (setSalario(e.target.value))}></input>
            </div>
            <div className='input'>
                <h4>Informe o Bônus:</h4>
                <input type='number' value={bonus} onChange={e => Number (setBonus(e.target.value))}></input>
            </div>
            <div className='input'>
                <h4>Agora , Informe o Desconto:</h4>
                <input type='number' value={desc} onChange ={e => Number (setDesc(e.target.value))}></input>
            </div>
            <button onClick ={calcularClick}> Calcular </button>
            <div>
            <h4> O Seu Salario é de R$ {mensagem} </h4>
            </div>
        </div>
    )
}