//VALIDAÇÃO DE DADOS
const form = document.getElementById('info-pessoal');
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const telRegex = /^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/;

form.addEventListener('buttom', (event)=>{
    event.preventDefault();
    console.log('que cu')
    // nameValidate();
    // emailValidate();
    // telValidate();
});


function setError(index){
    campos[index].style.border = '2px solid red';
    spans[index].style.display="block";
}

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display="none";
}

function nameValidate(){
    if(campos[0].value.length<5){
       setError(0);
    }
    else{
        removeError(0);
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[1].value)){
        setError(1);
    }
    else{
        removeError(1);
    }
}

function telValidate(){
    if(!telRegex.test(campos[2].value)){
       setError(2);
    }
    else{
       removeError(2);
    }
}