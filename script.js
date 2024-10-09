const boxDigit1 = document.getElementById("digit1")
const boxDigit2 = document.getElementById("digit2")
const boxDigit3 = document.getElementById("digit3")
const boxDigit4 = document.getElementById("digit4")
const boxDigit5 = document.getElementById("digit5")

const buttonNumber1 = document.getElementById("number1")
const buttonNumber2 = document.getElementById("number2")
const buttonNumber3 = document.getElementById("number3")
const buttonNumber4 = document.getElementById("number4")
const buttonNumber5 = document.getElementById("number5")
const buttonNumber6 = document.getElementById("number6")
const buttonNumber7 = document.getElementById("number7")
const buttonNumber8 = document.getElementById("number8")
const buttonNumber9 = document.getElementById("number9")
const buttonNumber0 = document.getElementById("number0")

let posicaoAtual = 1
let digitos = []

function atualizaDigitos() {
    boxDigit1.textContent = digitos[0]
    boxDigit2.textContent = digitos[1]
    boxDigit3.textContent = digitos[2]
    boxDigit4.textContent = digitos[3]
    boxDigit5.textContent = digitos[4]
}


//PARA CADA NUMERO, PRECISO SABER QUAL A POSIÇÃ ATUAL DO DIGITO E PREENCHER 
//SE O COMANDO FOR BRANCO, TODOS OS DIGITOS FICAM EM BRANCO 
// SE O COMANDO FOR CORRIGIR, APAGA O DIGITO ATUAL
//SE O COMANDO  FOR CONFIRMAR , FAZ AS SEGUINTES VALIDAÇÕES:
// SE FORAM PREENCHIDOS TODOS OS NÚMEROS, VAI VALIDAR SE O CANDIDATO É VALIDO
// SE O CANDIDATO É VALIDO, VAI MOSTRAR A FOTO, E O NOME DO PARTIDO DO CANDIDATO
// SE O CANDIDADO NÃO É VALIDO, NÃO MOSTRA A FOTO, O NOME DO PARTIDO 
//  PRESSIONANDO UMA SEGUNDA VEZ O CONFIRMA, REGISTRA O VOTO 