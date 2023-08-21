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
var mes = time.getMonth()
console.log(mes)

var dia = time.getDay()
console.log(dia)

var hora = time.getHours()
console.log(hora)

var min = time.getMinutes()
console.log(min)

var sec = time.getSeconds()
console.log(sec)
var milliseconds = time.getMilliseconds()
console.log(milliseconds)


/*
getMonth() me retorna o mês em número.

Janeiro === 0
Fevereiro = 1
Março ===== 2
Abril ===== 3
Maio ====== 4
Junho ===== 5
Julho ===== 6
Agosto ==== 7
Setembro == 8
Outubro === 9
Novembro = 10
Dezembro = 11

--------------------------------
getDay() me retorna o dia da semana em número.

Domingo ======= 0
Segunda-feira = 1
Terça-feira === 2
Quarta-feira == 3
Quinta-feira == 4
Sexta-feira === 5
Sábado ======== 6
*/