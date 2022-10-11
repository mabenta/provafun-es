import './index.scss'
import { useState } from 'react';

import { AcaiCalcular } from '../funcoes/acai';
export default function VendaAcai() {
  
    const [acaiPequeno, SeteacaiPequeno] = useState(0);
    const [acaiMedio, SeteacaiMedio] = useState(0);
    const [acaiGrande, SeteacaiGrande] = useState(0);
    const [Desconto, SetDesconto] = useState(1);
    const [Resultado, SetResultado] = useState('---');
    
    
     async function Calcular(){
        const seguimento= await AcaiCalcular(acaiPequeno, acaiMedio , acaiGrande ,Desconto)
        SetResultado(seguimento)
     }
    
    
        return(
            <div className='Principal'>
            <div className='Fundo'>
                <div className='Titulo'>
            <h1>Calcular Venda de Açai</h1>
                </div>
                <div className='Titulos'/>
                <h4>quantidade de pequeno</h4>
                    <input type velue={acaiPequeno} onChange={e => SeteacaiPequeno(e.target.value)}/>  
                    <h4>quantidade de medio</h4>
                    <input type value={acaiMedio} onChange={e => SeteacaiMedio(e.target.value)}/>
                    <h4>quantidade de grande</h4>
                            <input type velue={acaiGrande} onChange={e => SeteacaiGrande(e.target.value)}/>
    
                    <h4>Cupon de Desconto</h4>
                    <input type velue ={Desconto} onChange={e => SetDesconto(e.target.value)}/>
    
                    <button onClick={Calcular}>Calcular</button>
                    <div>
                         {Resultado}
                    </div>
             
                </div>
    
            </div>
        )
    }
    
    