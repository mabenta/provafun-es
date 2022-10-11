
import './index.scss'

import { useState } from "react";
import { SorveteriaFunction } from '../funcoes/sorvete';
import { Link } from 'react-router-dom';

export default function Sorveteria(){

    const [gramas, setGramas] = useState(0);
    const [vlTotal, setVlTotal] = useState(0);
    

    async function Sorvete(){
        const resposta = await SorveteriaFunction(gramas)

        if(resposta < 0){
            return
        }

        setVlTotal(resposta)
    }

    return(

        <section>
          <div className='Principal-Sorveteria'>
          <div className='Fundo-Sorveteria'>
            
            <h1>Sorveteria</h1>
                <div className="Titulo">
                    <h4> Digite o valor em gramas:</h4>
                    <input type="number" 
                           value={gramas} 
                           onChange={e => setGramas(e.target.value)}
                           onKeyPress={e => e.key === 'Enter' ? Sorvete() : ''}/>
                    <div className='Botao'>
                        <button onClick={Sorvete}> Concluir Compra</button>
                    </div>
                    <div >
                        R${vlTotal}
                    </div>
                    </div>
            
            </div>
            </div>
        </section>

    )
}