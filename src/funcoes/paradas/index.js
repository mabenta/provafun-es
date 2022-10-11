
export default async function FuncaoParadas(capac, consumo, dist){
    let calc=  await dist / consumo / capac;



    return Math.ceil(calc);
}