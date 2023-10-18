function contar() {
    var inicio = document.getElementById('inicio')
    var final = document.getElementById('final')
    var pulo = document.getElementById('pulo')
    var res = document.querySelector('div#res')
    if (inicio.value.length == 0 || final.value.length == 0 || pulo.value.length == 0 || pulo.value == 0) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        res.innerHTML = `Contando: `
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(pulo.value)
        if (i < f) {
        for (let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c}`
        }
    } else {
        for (let c = i; c >= f; c -= p) {
            res.innerHTML += ` ${c}`
    }
  }
 }
}