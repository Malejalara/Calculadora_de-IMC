function calcularIMC(){
    let peso=document.getElementById("peso").value
    let altura=document.getElementById("altura").value
    
        let imc=parseFloat(peso/ Math.pow(altura,2))
            if (imc < 18.5){
            document.getElementById('imc').innerHTML='Tiene un peso bajo, su IMC es '+(imc.toFixed(1));
            } 
            else if (imc >=18.5 && imc<=24.9){
            document.getElementById('imc').innerHTML='Tiene un peso normal, su IMC es '+(imc.toFixed(1));
            }
            else if (imc >=25 && imc<=29.9){
            document.getElementById('imc').innerHTML='Tiene sobre peso, su IMC es '+(imc.toFixed(1));
            }
            else if(imc >=30 && imc<=39.9){
            document.getElementById('imc').innerHTML='Tiene  obesidad, su IMC es '+(imc.toFixed(1));
            }
            else if(imc >=40){
            document.getElementById('imc').innerHTML='Tiene obesidad morbida, su IMC '+(imc.toFixed(1));
            }
}
