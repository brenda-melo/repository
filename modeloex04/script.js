function contar() {
    let num = document.getElementById('num')
    let tab = document.getElementById('select')
    if (num.value.length == '0') {
        window.alert('Digite um número e tente novamente!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (let i = 0; i <=10; i++) {
            let item = document.createElement ('option')
            item.text = `${n}x${i} = ${n*i} `
            item.value = `tab${i}`
            tab.appendChild(item)
        }
        
    }
}
