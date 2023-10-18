let num = document.getElementById('num')
let nums = []
let tab = document.getElementById('numeros')
let res = document.getElementById('res')
function add(){
     if (num.value.length == 0 || num.value > 100 || num.value < 0) {
        window.alert('Número inválido, tente novamente.')
    } else if (nums.indexOf(num.value) != -1) {
        window.alert('Número já existente, insira outro e tente novamente!')
    } else {
        nums.push(num.value)
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        tab.appendChild(item)
        res.innerHTML = ''
    }
}

function finalizar(){
   
    if (num.value.length == 0) {
        window.alert('Tabela Vazia! Adicione um número e tente novamente.')
    } else {    let tot = nums.length
    let numsconvert = nums.map(Number)
    let cresc = numsconvert.sort((a, b) => a - b)
    let soma = numsconvert.reduce((total, valoratual) => {
    return total + valoratual
})
    let menor_num = Math.min.apply(null, nums)
    let maior_num = Math.max.apply(null, nums)
    let média = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p>No total foram cadastrados ${tot} valores!</p>`
    res.innerHTML += `<p>A ordem crescente dos valores é ${cresc}</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior_num}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor_num}</p>`
    res.innerHTML += `<p>A soma dos valores é: ${soma}</p>`
    res.innerHTML += `<p>A média dos valores é: ${média}</p>`
}
}