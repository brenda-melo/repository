function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length < 4 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 15) {
                img.src = 'criancahomem.png'
            } else if (idade < 22) {
                img.src = 'jovemhomem.png' 
            } else if (idade < 50) {
                img.src = 'adultohomem.png'
            } else {
                img.src = 'idosohomem.png'
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 15) {
                img.src = 'criancamulher.png'
            } else if (idade < 22) {
                img.src = 'jovemmulher.png' 
            } else if (idade < 50) {
                img.src = 'adultamulher.png'
            } else {
                img.src = 'idosamulher.png'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}