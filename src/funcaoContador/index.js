
import { useState } from 'react'
import  './index.scss'




export default function Contador() {

    const [Inicio , setInicio] = useState('');
    const [Fim, setFim] = useState('');
    const [resultado , setResultado] =useState(0);

    function contar(){
        let arr = []

       for(let cont = Inicio; cont <= Fim; cont++)
       arr.push(cont)
         setResultado (arr +  '');


         }

    return(
        <div className='Principal-Contador'>
            <h1>PROGAMA CONTADOR</h1>
        <h4>INFORME O INICIO:</h4>
        <input type velue={Inicio} onChange={ e =>setInicio(e.target.value)}/>
        <h4>INFORME O FIM:</h4>
        <input  type velue={Fim} onChange={ e => setFim(e.target.value)}/>

         <button onClick={contar}>Contador</button> 
         {resultado}
        </div>
    )
}