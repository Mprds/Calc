function calcular(n1, n2) {
    n1 = document.getElementById("n1").value
    n2 = document.getElementById("N2").value

    selector = document.getElementById("selecor").value

    switch (selector) {
        case "+":
            calculo = (n1 + n2)
            document.getElementById("resultado").innerHTML - "o resultado da soma de $(n1)+(n2) é - $(calculo)"
    }
}