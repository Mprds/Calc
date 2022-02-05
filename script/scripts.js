function calcular(n1,n2){
   n1 = document.getElementsByid("n1").value
   n2 = document.getElementsByid("n2").value

   seletor = document.getElementById("selector").value

   switch(selector){
       case "+":
           calculo = (n1+n2)
           document.getElementById("resultado").innerHTML ='O resultado da doma de ${n1} + ${n2} é = ${calculo}'

   }
}