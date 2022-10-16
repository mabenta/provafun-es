
import './index.scss'

import  { IngressoCinema } from '../../src/funcoes/cinema'
import { useState } from 'react'

export default function CalcularCinema(){

   const [QtdInteiras, setQtdInteiras] = useState(0);
   const [QtdMeias, setMeias] = useState(0);
   const [DiaSemana, setDiaSemana] = useState('');
   const [Nacional, setNacional] = useState(false);
   const [resposta, setResposta] = useState(0);

   async function CalcularTotal(){
   const retorno = await IngressoCinema(QtdInteiras , QtdMeias, DiaSemana,Nacional)
   setResposta(retorno);

   }
   return(
      <div className='Principal-Cinema'>
    <h1>CALCULAR INGRESSO CINEMA:</h1>
    <h4>INFORME A QUANTIDADE DE INTEIRAS:</h4>
    <input type="number" value={QtdInteiras} onChange={e => setQtdInteiras(Number(e.target.value))} />
    <h4>INFORME O QUANTIDADE DE MEIAS:</h4>
    <input type="number" value={QtdMeias} onChange={e => setMeias(Number(e.target.value))} />
   <h4>INFORME O DIA DA SEMANA:</h4>
    <input type="text" value={DiaSemana} onChange={e => setDiaSemana(e.target.value)}/>
   <h4>O FILME É NACIONAL</h4>
   <input type= "checkbox" checked={Nacional} onChange={e => setNacional(e.target.checked)}/>
   
   <button onClick={CalcularTotal}>Calcular</button>
   <h4>{resposta} </h4>
    </div>
   )
}