
export default function SalarioLiquido(salario, bonus, desc){

    const calcularSalario =   (salario - desc) + ((bonus/100) * salario);
    return calcularSalario;
   }