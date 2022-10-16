

import { SituacaoOrcamento } from '../funcoes/orcamento';
import { useState } from 'react'
import './index.scss'


    export default function OrcamentoFamiliar() {
        const [ganhos, setGanhos] = useState(0);
        const [gastos, setGastos] = useState(0);
        const [resultado, setResultado] = useState(0);

        async function FuncaoOrcamento(){
            const resposta = await SituacaoOrcamento (ganhos , gastos)
            setResultado(resposta);

        }

        return(
            <div className='Principal-Orçamento'>
         <h1>ORÇAMENTO FAMILIAR</h1>
       <h4>INFORME SEUS GANHOS:</h4>
       <input type="number"  value={ganhos} onChange={e => setGanhos(e.target.value)}/>
      <h4>INFORME O TOTAL DE GASTOS:</h4>
      <input type="number"  value={gastos} onChange={e => setGastos(e.target.value)}/>
      <div>
                    <div>
                        <button  onClick={FuncaoOrcamento}>Calcular</button> 
                    </div>

                    <div>
                       {resultado}
                    </div>
   
         </div>
         </div>

            )
    }
    
