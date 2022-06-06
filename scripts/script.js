function calcular (n1, n2){
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)

    selector = document.getElementById("selector").value

    switch(selector){  
        case '+' :
            calculo = (n1 + n2)
            document.getElementById("resultado").innerHTML = `O resultado da soma de ${n1} + ${n2} é = ${calculo}`
            break

        case '-' :
            calculo = (n1 - n2)
            document.getElementById("resultado").innerHTML = `O resultado da subtração de ${n1} - ${n2} é ${calculo}`
            break
        
        case '*' :
            calculo = (n1 * n2)
            document.getElementById("resultado").innerHTML = `O resultado da multiplicação de ${n1} x ${n2} é ${calculo}`
            break
        
        case '**' :
            calculo = (n1 ** n2)
            document.getElementById("resultado").innerHTML = `O resultado de ${n1} elevado a ${n2} é ${calculo}`
            break

       case '/':
           calculo = (n1 / n2)
           if(Number.isNaN(calculo)){
            document.getElementById("resultado").innerHTML = `Insira um divisivel válido!`
        }else {
           document.getElementById("resultado").innerHTML = `O resultado da divisão de ${n1} / ${n2} é ${calculo}`
        }
            break

        case '√':
            calculo = (Math. sqrt(n2))
            document.getElementById("resultado").innerHTML = `O resultado de ${n1} raiz de ${n2} é ${calculo}`
            if(n1 != 0){
                document.getElementById("resultado").innerHTML = `Para contas de raiz simples o primeiro numero deve ser 0!`
            }else{
                document.getElementById("resultado").innerHTML = `O resultado da raiz de ${n2} é ${calculo}`
            }

        case '%':
            calculo = (n1 % n2)
            document.getElementById("resultado").innerHTML = `O inteiro restante da divisão entre ${n1} e ${n2} é ${calculo}` 

    }
}
