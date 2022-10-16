
export async function IngressoCinema(QtdInteiras, QtdMeias,DiaSemana, Nacional){
     let  calcular = 0;
     
     if( Nacional == true ){
        calcular=(QtdInteiras + QtdMeias) *5;
    }
        else if(DiaSemana == 'QUARTA-FEIRA'){
            calcular= (QtdInteiras + QtdMeias) * 14.25;
        }

        else{
            calcular = (QtdInteiras * 28.50) + (QtdMeias * 14.25);
        }

        return calcular;
     
}
