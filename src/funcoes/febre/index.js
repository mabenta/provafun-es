
export default function Febre(temperatura){
    let msg = "";

   if (temperatura >= 41)
    msg = 'Hipertermia';

   else if (temperatura >= 39.6 && temperatura < 41)
    msg = 'Febre Alta'

    else if(temperatura >= 37.6 && temperatura < 39.6)
    msg = 'Febre'

   else if (temperatura >= 36 && temperatura < 37.6)
    msg = 'Normal'

   else if (temperatura < 36)
    msg = 'Hipotermia'

    return msg;
}