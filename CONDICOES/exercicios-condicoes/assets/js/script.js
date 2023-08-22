var time = new Date()
var horas = time.getHours()

if(horas >= 6 && horas <= 12){
    console.log('Manhã')
    
}else if(horas >= 13 && horas <= 18){
    console.log('Tarde')
}else if((horas >= 19 && horas <=23) || (horas >= 0 && horas <= 5)){
    console.log('Noite')
}else{
    console.log('Horário inválido')
}