function verificarIdade(){
    var inputDate = parseInt(document.querySelector('input#iDate').value)
    var time = new Date()
    var ano = time.getFullYear()
    if(ano - inputDate >= 60){
        console.log('Idoso')
    }else if((ano - inputDate <= 59) && (ano - inputDate >= 18)){
        console.log('Adulto')
    }else if((ano - inputDate >= 12) && (ano - inputDate <= 17)){
        console.log('Jovem')
    }else if((ano - inputDate >= 1) && (ano - inputDate <= 11)){
        console.log('Criança')
    }else if(inputDate - ano > 0){
        alert('Digite um ano válido')
    }
}