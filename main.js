var Allinput = document.querySelectorAll('form input');

Allinput.forEach(function(input){
    
    // focus function will trigger when we focus in input
    input.addEventListener('focus' , function(){
        input.style.border = '2px solid black';
        this.parentElement.querySelector('.icon').style.color = 'black';

    })

    // blur function will trigger when we defocus input
    input.addEventListener('blur' , function(){
        input.style.border = '2px solid lightgray';
        this.parentElement.querySelector('.icon').style.color = 'lightgray';
    })

    // keyup function will trigger when we key up our keyboard key
    input.addEventListener('keyup' , function(){
        if(input.value == ''){
            //if input value is empty then icon will be hidden
            this.parentElement.querySelector('.icon').style.display = 'none';
        }
        // if we write something in input field then icon will be visible
        else{
            this.parentElement.querySelector('.icon').style.display = 'block'
        }
    })
})

var nameInput = document.querySelector('.name-input');
var crossIcon = document.querySelector('.cross-icon');

crossIcon.addEventListener('click' , function(){
    // if we click cross button input value will be removed
    nameInput.value = '';
    // cross icon will be removed after clicking on it
    crossIcon.style.display = 'none';
    nameInput.focus();
})



var passInput = document.querySelector('.pass-input');
var eyeIcon = document.querySelector('.eye-icon');

eyeIcon.addEventListener('click' , function(){
    // this if else condition work like toggle
    if(passInput.type == 'password'){
        passInput.type = 'text';
        document.querySelector('.eye-icon i').classList = 'fas fa-eye';
    }else{
        passInput.type = 'password';
        document.querySelector('.eye-icon i').classList = 'fas fa-eye-slash';
    }
    passInput.focus();
})