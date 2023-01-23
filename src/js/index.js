const buttonProductivity = document.getElementById('button-productivity')

const imgButton = document.getElementById('img-button')

buttonProductivity.addEventListener('mouseenter', () => {

    imgButton.classList.remove('img-button')
    imgButton.classList.add('img-button-2')
})

buttonProductivity.addEventListener('mouseout', () => {

    imgButton.classList.remove('img-button-2')
    imgButton.classList.add('img-button')
})

const inputEmail = document.getElementById('email')

const submit = document.getElementById('submit')

submit.addEventListener('click', () => {

    usuario = inputEmail.value.substring(0, inputEmail.value.indexOf("@"));

    dominio = inputEmail.value.substring(inputEmail.value.indexOf("@") + 1, inputEmail.value.length);

    const errorMessage = document.getElementById('error-message')


    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
        
        inputEmail.value = ''
        errorMessage.classList.remove('message-on')
        errorMessage.classList.add('message-off')

    } else {
        
        errorMessage.classList.remove('message-off')
        errorMessage.classList.add('message-on')
    }

})

