function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são <strong>${hora} horas.</strong>`
    if (hora >= 5 && hora < 12) {
        img.src = 'manha.png'
        document.body.style.background = '#f8eaba'
    } else if (hora >= 12 && hora < 19) {
        img.src = 'tarde.png'
        document.body.style.background = '#eca436'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#0d3253'
    }
}
