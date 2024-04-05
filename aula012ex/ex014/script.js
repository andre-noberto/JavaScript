function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()   
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        msg.innerHTML += '<br>Bom Dia!'
        img.src = 'imagens/manha.png'
        document.body.style.background = '#bda09c'
    } else if (hora >= 12 && hora <= 18){
        msg.innerHTML += '<br>Boa Tarde!'
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#e9957d'
    } else {
        msg.innerHTML += '<br>Boa Noite!'
        img.src = 'imagens/noite.png'
        document.body.style.background = '#2b5b94'
    }
}

