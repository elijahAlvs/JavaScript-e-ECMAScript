var idade = 16

console.log(`Você tem ${idade} anos`)
if(idade < 16){
    console.log("Você não pode votar")
} else if(idade < 18 && idade >= 16){
    console.log("Seu voto é opcional")
}else{
    console.log("Seu voto é obrigatório")
}

/*
Criei uma variável que recebe a data (time),
depois eu só passo o dado específico 
para variáveis diferentes
*/ 

var time = new Date() 
var mes = time.getMonth
console.log(mes)

var dia = time.getDay
console.log(dia)

var hora = time.getHours
console.log(hora)

var min = time.getMinutes
console.log(min)

var sec = time.getSeconds
console.log(sec)
var milliseconds = time.getMilliseconds
console.log(milliseconds)
