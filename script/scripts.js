function calcular(n1,n2){
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)
    selector = document.getElementById("selector").value

switch(selector){
    case 'soma':
        calculo = n1 + n2
        console.log(calculo)
        document.getElementById("resultado").innerHTML = `O resultado da soma de ${n1} + ${n2} é de ${calculo}`
        break
    case 'subtracao':
        calculo = n1 - n2
        console.log(calculo)
        document.getElementById("resultado").innerHTML = `O resultado da subtraçã de ${n1} - ${n2} é de ${calculo}`
        break
    case 'multiplicacao':
        calculo = n1 * n2
        console.log(calculo)
        document.getElementById("resultado").innerHTML = `O resultado da multiplicação de ${n1} x ${n2} é de ${calculo}`
        break
    case 'divisao':
        calculo = n1 / n2
        console.log(calculo)
        document.getElementById("resultado").innerHTML = `O resultado da divisão de ${n1} / ${n2} é de ${calculo}`
        break
}  
}
