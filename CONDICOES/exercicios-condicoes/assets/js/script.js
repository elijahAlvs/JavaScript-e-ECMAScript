var time = new Date()
var horas = time.getHours()

var textoHorario = document.getElementById("txtHora") 
var imagem = document.getElementById('img')
var mainHTML = document.querySelector('main')

if(horas >= 6 && horas <= 12){
    console.log('Manhã')
    textoHorario.innerHTML = `Agora são ${horas} horas`
    //Estilos
    document.body.style.background = '#F82A2AD6'
    mainHTML.style.background = '#FFA74D'
    imagem.style.background = '#F9C784'

}else if(horas >= 13 && horas <= 18){
    console.log('Tarde')
    textoHorario.innerHTML = `Agora são ${horas} horas`
    //Estilos
    document.body.style.background = '#F82A2AD6'
    mainHTML.style.background = '#FFA74D'
    imagem.style.background = '#F9C784'

}else if((horas >= 19 && horas <=23) || (horas >= 0 && horas <= 5)){
    console.log('Noite')
    textoHorario.innerHTML = `Agora são ${horas} horas`
    //Estilos
    document.body.style.background = '#465775'
    mainHTML.style.background = '#FFA74D'
    imagem.style.background = '#F9C784'
    
}else{
    console.log('Horário inválido')
    textoHorario.innerHTML = `Horário inválido`
}