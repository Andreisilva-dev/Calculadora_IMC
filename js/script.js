
// pegando os inputs:
let formulario = document.querySelector('#formulario')
let CaixaNome = document.querySelector('#nome')
let CaixaIdade = document.querySelector('#idade')
let CaixaPeso = document.querySelector('#peso')
let CaixaAltura = document.querySelector('#altura')
let CaixaImc = document.querySelector('#resultadoImc')

let dados = document.querySelectorAll('.pessoa')
let aviso = document.querySelector('#aviso')

// botao

let btnEnviar = document.querySelector('#btnEnviar')
let btnLimpar = document.querySelector('#btnLimpar')

btnEnviar.addEventListener('click', function(e){
    let nome = CaixaNome.value
    let idade = Number(CaixaIdade.value)
    let peso = parseFloat(CaixaPeso.value)
    let altura = parseFloat(CaixaAltura.value)
    let imc = (peso / (altura * altura)).toFixed(1)

    // verifica se peso e altura são acima de zero caso nao seja mostra um alert 
    if (altura >= 0 && peso >= 0) {
        console.log(nome)
        console.log(idade)
        console.log(peso)
        console.log(altura)
        console.log(imc)

        CaixaImc.value = imc
        let sit = situacaoPeso(imc)
        aviso.innerHTML = sit

        let pessoa = {
            nome    : nome,
            idade   : idade,
            peso    : peso,
            altura  : altura,
            imc     : imc
        }

        dados[1].textContent = nome 
        dados[2].textContent = idade + ' anos'
        dados[3].textContent = peso + ' kg'
        dados[4].textContent = altura + ' m'
        dados[5].textContent = 'Imc: '+ imc + ' ' + sit
    }else {
        alert('coloque valores acima de zero em peso e altura')
    }

    
    e.preventDefault()
})

btnLimpar.addEventListener('click', function(event){
    
    formulario.reset()
    console.log('resetado dados')
    event.preventDefault()

    dados[1].textContent = ''
    dados[2].textContent = ''
    dados[3].textContent = ''
    dados[4].textContent = ''
    dados[5].textContent = ''

    aviso.innerHTML = ''

})

function situacaoPeso(imc){

    let situacao = ''
    if (imc >= 40){
        situacao = 'Obesidade grau III'
    } else if (imc >= 35 && imc <= 39.9){
        situacao = 'Obesidade grau II'
    } else if (imc >= 30 && imc <= 34.9) {
        situacao = 'Obesidade grau I'
    } else if (imc >= 25 && imc <= 29.9) {
        situacao = 'Sobrepeso'
    } else if (imc >= 18.5 && imc <= 24.9) {
        situacao = 'Normal'
    } else if (imc < 18.5){
        situacao = 'Magreza'
    } else {
        situacao = 'erro'
    }

    return situacao
}

