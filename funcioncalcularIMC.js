function calcularIMC(){
    let peso=document.getElementById("peso").value
    let altura=document.getElementById("altura").value
    
         imc=peso/ Math.pow(altura,2)
            if (imc < 18.5)
            alert('Tiene un peso bajo, su IMC es '+Math.round(imc))
            else if (imc >=18.5 )
            alert('Tiene un peso normal, su IMC es '+Math.round(imc))
            else if (imc >=25)
            alert('Tiene sobre peso, su IMC es '+Math.round(imc))
            else if(imc >=30)
            alert('Tiene  obesidad, su IMC es '+Math.round(imc))
            else if(imc >=40)
            alert('Tiene obesidad morbida, su IMC '+Math.round(imc))
}