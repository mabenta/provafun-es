
export async function AcaiCalcular( acaiPequeno , acaiMedio , acaiGrande, Desconto){
    
    let calculo = (await acaiGrande *17.50 + acaiMedio* 15.00 + acaiPequeno *13.50) *(Desconto /100 -1)
    return calculo;
}



