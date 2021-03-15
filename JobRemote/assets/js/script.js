let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let endereco = document.querySelector('#endereco')
let nomeOK = false
let emailOK = false
let assuntoOK = false
let enderecoOK = false

function validaNome(){

    if (nome.value.length <3){
        let txtNome = document.querySelector('#txtNome')
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    }
    else{
        txtNome.style.display = "none"
        nomeOK = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    
    if(email.value.indexOf('@')== -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    }
    else{
        txtEmail.style.display = "none"
        emailOK = true
    }

}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >100){
        txtAssunto.innerHTML = 'Máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = "block"
    }
    else{
        txtAssunto.style.display = "none"
        assuntoOK = true
    }

}

function validaEndereco(){
    let txtEndereco = document.querySelector('#txtEndereco')

    if(endereco.value.length <3){
        txtEndereco.innerHTML = 'Endereço Inválida'
        txtEndereco.style.color = 'red'
        
    }
    else{
        txtEndereco.style.display = "none"
        enderecoOK = true
    }

}

function enviar(){
    if (nomeOK == true && emailOK == true && assuntoOK == true && enderecoOK == true){
        alert ('Mensagem encaminhada com sucesso!')
    }
    else{
        alert ('Verifique novamente o preeenchimento do formulário!')
    }
}