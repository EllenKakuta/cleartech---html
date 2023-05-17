//DECLARAÇÃO DAS VARIÁVEIS:
//->Dados pessoais
const nome= document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById ("fone");
const localidade = document.getElementById("localidade");
const website = document.getElementById("website");
const foto = document.getElementById("foto");
//->Experiencia
const cargo = document.getElementById("cargo");
const empresa = document.getElementById("empresa");
const dataInicio = document.getElementById("data-inicio");
const dataTermino = document.getElementById("data-termino");
const descricaoCargo = document.getElementById("descricao-cargo");
const empregoAtualCheckBox = document.getElementById("emprego-atual");
//->Escolaridade
const escolaridade = document.getElementById("escolaridade");
const dataInicioEsc = document.getElementById("data-inicioesc");
const dataTerminoEsc = document.getElementById("data-terminoesc");
//->Cursos
const curso = document.getElementById("cursos");
const dataInicioCurso = document.getElementById("data-inicio-curso");
const dataTerminoCurso = document.getElementById("data-termino-curso");
//->Idiomas
const idioma = document.getElementById("idioma-nome")
const idiomaNivel = document.getElementById("idioma-nivel");

//--------------------------------------------------------------------



//VALIDAÇÃO DE DADOS
const form = document.getElementById('info-pessoal');
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const telRegex = /^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/;
const urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;


form.addEventListener('buttom', (event)=>{
    event.preventDefault();
    nameValidate();
    emailValidate();
    telValidate();
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
    if(campos[0].value.length<10){
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

function urlValidate(){
    if(!urlRegex.test(campos[4].value)){
        setError(4);
    }
    else{
        removeError(4);
    }
}



//ARRAY DE ARMAZENAMENTO DOS DADOS DA EXPERIÊNCIA PROFISSIONAL
let experienciaProfissional = [];

const addExperienciaBotao = document.getElementById("add-experiencia-botao");
addExperienciaBotao.addEventListener("click", function(event) {
    event.preventDefault();
    //DADOS INSERIDOS NO INPUT
    const cargoValue = cargo.value;
    const empresaValue = empresa.value;
    const dataInicioValue = dataInicio.value;
    const dataTerminoValue = dataTermino.value;
    const descricaoCargoValue = descricaoCargo.value;
    const empregoAtual = empregoAtualCheckBox.checked;
    //VARIÁVEL INCIAL = DADOS RECEBIDOS PELO INPUT
    const experiencia = {
        cargo: cargoValue,
        empresa: empresaValue,
        dataInicio: dataInicioValue,
        dataTermino: dataTerminoValue,
        descricaoCargo: descricaoCargoValue,
        empregoAtual: empregoAtual
    };

    experienciaProfissional.push(experiencia);
    //LIMPAR FORMULÁRIO
    cargo.value = "";
    empresa.value = "";
    dataInicio.value = "";
    dataTermino.value = "";
    descricaoCargo.value = "";
    empregoAtualCheckBox.checked= false;
});

//BOTÃO GERAR CURRICULO
const geraCurriculoBtn = document.getElementById("salvar");
geraCurriculoBtn.addEventListener("click", function(event) {
    event.preventDefault();
 
//INCLUSÃO DA FOTO
const fotoInput = document.getElementById("foto");
const fotoFile = fotoInput.files[0]

const reader = new FileReader();
reader.addEventListener("load", function(){
    const fotoUrl = reader.result;

//FORMATAÇÃO TELEFONE PRA INCLUSÃO DOS PARÊNTESES QUANDO IMPRESSO NA NOVA PÁGINA
const telefoneFormatado = "("+telefone.value.substring(0,2)+")" + telefone.value.substring(2);


//GERA O HTML DA EXPERIÊNCIA PROFISSIONAL EM LISTAS
function gerarExperienciaProfissionalHTML() {
    let experienciaHTML = "";

    experienciaProfissional.forEach(function(experiencia) {
        const { cargo, empresa, dataInicio, dataTermino, descricaoCargo,empregoAtual } = experiencia;
                      
        experienciaHTML += "<li>Cargo: " + cargo + "</li>";
        experienciaHTML += "<li>Empresa: " + empresa + "</li>";
        experienciaHTML += "<li>Data de Início: " + dataInicio  + "</li>";
        if (dataTermino === "") {
            experienciaHTML += "<li>Data de Término: É meu emprego atual</li>";
        } else {
            experienciaHTML += "<li>Data de Término: " + dataTermino + "</li>";
        }
        experienciaHTML += "<li>Descrição do Cargo: " + descricaoCargo + "</li>";
        experienciaHTML += "<br>";
    });

    return experienciaHTML;
}


//ALERTAS
if (localidade.value.trim() === "") {
    alert("Por favor, informe sua localidade (Cidade e Estado).");
    return;
}

if(nome.value.trim()===""){
    alert("Por favor insira seu nome competo");
    return;
}

if(email.value.trim()===""){
    alert("Por favor insira seu melhor e-mail para contato");
    return;
}

if(telefone.value.trim()===""){
    alert("Por favor insira seu melhor telefone para contato");
    return;
}

//IMPRESSÃO EM NOVA PÁGINA HTML
var novaPagina = 
"<!DOCTYPE html>" +
"<html lang='pt=br'>" +
"<head>" +
"<meta charset = 'UTF-8'>"+
"<meta http-equiv='X-UA-Compatible' content= 'IE=edge'>"+
"<meta name='viewport' content='width=device-width, initial-scale=1.0'>"+
"<title>Meu Currículo</title>" +
"<link rel='stylesheet' type='text/css' href='style2.css'>"+
"<link rel='shortcut icon' href='imagens/favicon.ico' type='image/x-icon'>"+
"</head>" +
"<body>" +
"<div class='conteudo'>" +
"<h1 claa ='nome'>"+nome.value+"</h1>" +
"<img src='"+ fotoUrl +"' alt='Foto' class='foto-curriculo'>" +
"</div>"+
"<p>" + email.value + "</p>" + telefoneFormatado + "<p>"+
"<p>" + localidade.value + "</p>" +
"<p>" + website.value + "</p>";
if (experienciaProfissional.length > 0){
  novaPagina += "<h2>Experiência Profissional</h2>" + "<ul>" + gerarExperienciaProfissionalHTML() + "</ul>"
}
novaPagina +=
"</body>" +
"</html>";

const novaJanela = window.open("", "_blank");
  novaJanela.document.open();
  novaJanela.document.write(novaPagina);
  novaJanela.document.close();
});

reader.readAsDataURL(fotoFile);
});

