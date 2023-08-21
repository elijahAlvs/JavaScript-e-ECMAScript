/* 
Estrutura do switch:


switch(variavel){
    case 1:
        break
    case 2:
        break
    default:
        break
}
*/

var time = new Date()
var diaSemana = time.getDay()

switch(diaSemana){
    case 0:
        console.log("Domingo")
        break
    case 1:
        console.log("Segunda")
        break
    case 2:
        console.log("Terça")
        break
    case 3:
        console.log("Quarta")
        break
    case 4:
        console.log("Quinta")
        break
    case 5:
        console.log("Sexta")
        break
    case 6:
        console.log("Sábado")
    break
    default:
        console.log('Dia inválido')
}