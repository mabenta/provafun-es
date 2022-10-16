export async function SituacaoOrcamento( ganhos , gastos){
     
    let cem = (ganhos/100) * 100 //100%
    let CinquentaeUm = (ganhos/100) * 51  // 51%
    let VinteUm = (ganhos/100) * 21 // 21%
    let OitentaeUm = (ganhos/100) *81 // 81%

    let msg = '';

    if(VinteUm >= gastos){
        msg= "PARABENS ESTÁ SENDO BEM SUCEDIDO OS SEUS GASTOS!"
    }

    else if(gastos <= OitentaeUm &&  gastos >= CinquentaeUm){
        msg = "ATENÇÃO MELHOR CONTER OS GASTOS!!"
    }

    else if( gastos <= CinquentaeUm && gastos >= VinteUm){
        msg = "MUITO BEM, SEUS GATOS NÃO ULTRAPASSAM METADE DOS GANHOS!"
    }

    else if(gastos <= cem && gastos >=OitentaeUm){
        msg = "CUIDADO  OSEU ORÇAMENTO PODE FICAR COMPROMETIDO!"
    }

    else{
        msg = "ORÇAMENTO COMPROMETIDO! HORA DE REVER SEUS GASTOS!"
    }

    return msg;

   

   

   
}