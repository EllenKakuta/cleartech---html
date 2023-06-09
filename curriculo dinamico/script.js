//DECLARAÇÃO DAS VARIÁVEIS:
//->Dados pessoais
const nome= document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById ("fone");
const localidade = document.getElementById("localidade");
const website = document.getElementById("website");
const foto = document.getElementById("foto");
const estadoCivil = document.getElementById("estado-civil");
const idade = document.getElementById("idade");
//OBJETIVO PROFISSIONAL
const objetivo = document.getElementById("objetivo");
//->Experiencia
const cargo = document.getElementById("cargo");
const empresa = document.getElementById("empresa");
const dataInicioExp = document.getElementById("data-inicio");
const dataTerminoExp = document.getElementById("data-termino");
const descricaoCargo = document.getElementById("descricao-cargo");
const empregoAtualCheckBox = document.getElementById("emprego-atual");
//->Formação acadêmica
const instituicao = document.getElementById("instituicao");
const cursoFormacao = document.getElementById("nome-curso")
const dataInicioForm = document.getElementById("data-inicio-formacao");
const dataTerminoForm = document.getElementById("data-termino-formacao");
//->Cursos extracurriculares
const cursoExtra = document.getElementById("curso-nome");
const dataInicioCurso = document.getElementById("data-inicio-curso");
const dataTerminoCurso = document.getElementById("data-termino-curso");
//->Idiomas
const idioma = document.getElementById("idioma-nome")
const idiomaNivel = document.getElementById("idioma-nivel");

//FUNÇÃO PARA QUE A PRIMEIRA LETRA DIGITADA DENTRO DO INPUT SEJA SEMPRE MAIÚSCULA
function capitalizeFirstLetter(input) {
    var valor = input.value;
    input.value = valor.charAt(0).toUpperCase() + valor.slice(1);
  }

//VALIDAÇÃO DE DADOS
const form = document.getElementById('info-pessoal');
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
const telRegex = /^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/;
const urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
const letraRegex = /^[A-Za-z]+$/;
const numeroRegex = /^[0-9]{1,3}$/;


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
function letraValidate(){
    if(!letraRegex.test(campos[5].value)){
        setError(5);
    }
    else{
        removeError(5);
    }
}

function numeroValidate(){
    if(!numeroRegex.test(campos[6].value)){
        setError(6);
    }
    else{
        removeError(6);
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
    const dataInicioExpValue = dataInicioExp.value;
    const dataTerminoExpValue = dataTerminoExp.value;
    const descricaoCargoValue = descricaoCargo.value;
    const empregoAtual = empregoAtualCheckBox.checked;
    //VARIÁVEL INCIAL = DADOS RECEBIDOS PELO INPUT
    const experiencia = {
        cargo: cargoValue,
        empresa: empresaValue,
        dataInicioExp: dataInicioExpValue,
        dataTerminoExp: dataTerminoExpValue,
        descricaoCargo: descricaoCargoValue,
        empregoAtual: empregoAtual
    };
    experienciaProfissional.push(experiencia);
    //LIMPAR FORMULÁRIO
    cargo.value = "";
    empresa.value = "";
    dataInicioExp.value = "";
    dataTerminoExp.value = "";
    descricaoCargo.value = "";
    empregoAtualCheckBox.checked= false;
});


//ARRAY DE ARMAZENAMENTO DOS DADOS DE CURSOS EXTRACURRICULARES
let cursoExtracurricular = [];
const addCursoBotao = document.getElementById("add-curso-botao");
addCursoBotao.addEventListener("click", function(event) {
    event.preventDefault();
    //DADOS INSERIDOS NO INPUT
    const cursoValue = cursoExtra.value;
    const dataInicioCursoValue = dataInicioCurso.value;
    const dataTerminoCursoValue = dataTerminoCurso.value;    
    //VARIÁVEL INCIAL = DADOS RECEBIDOS PELO INPUT
    const cursoE = {
        cursoExtra: cursoValue,
        dataInicioCurso: dataInicioCursoValue,
        dataTerminoCurso: dataTerminoCursoValue,
    };
    cursoExtracurricular.push(cursoE);
    //LIMPAR FORMULÁRIO
    cursoExtra.value = "";
    dataInicioCurso.value = "";
    dataTerminoCurso.value = "";
});

//ARRAY DE ARMAZENAMENTO DOS DADOS DE IDIOMAS
let idiomas = [];
const addIdiomaBotao = document.getElementById("add-idioma");
addIdiomaBotao.addEventListener("click", function(event) {
    event.preventDefault();
    //DADOS INSERIDOS NO INPUT
    const idiomaValue = idioma.value;
    const idiomaNivelValue = idiomaNivel.value;
    //VARIÁVEL INCIAL = DADOS RECEBIDOS PELO INPUT
    const idiomaN = {
        idioma: idiomaValue,
        idiomaNivel: idiomaNivelValue,
       
    };
    idiomas.push(idiomaN);
    //LIMPAR FORMULÁRIO
    idioma.value = "";
    idiomaNivel.value= "";
});


//BOTÃO GERAR CURRICULO
const geraCurriculoBtn = document.getElementById("salvar");
geraCurriculoBtn.addEventListener("click", function(event) {
    event.preventDefault();


//INCLUSÃO DA FOTO
const fotoInput = document.getElementById("foto");
const fotoFile = fotoInput.files[0]
if(!fotoFile){
    alert ("Por favor insira uma foto");
    return;
}
const reader = new FileReader();
reader.addEventListener("load", function(){
    const fotoUrl = reader.result;


//FORMATAÇÃO TELEFONE PRA INCLUSÃO DOS PARÊNTESES QUANDO IMPRESSO NA NOVA PÁGINA
const telefoneFormatado = "("+telefone.value.substring(0,2)+")" + telefone.value.substring(2);

//GERA O HTML DA EXPERIÊNCIA PROFISSIONAL EM LISTAS
function geraExperienciaProfissionalHTML() {
    let experienciaHTML = "";
    experienciaProfissional.forEach(function(experiencia) {
        const { cargo, empresa, dataInicioExp, dataTerminoExp, descricaoCargo,empregoAtual } = experiencia;                  
        experienciaHTML += "<li><strong>Cargo:</strong> " + cargo + "</li>";
        experienciaHTML += "<li><strong>Empresa:</strong> " + empresa + "</li>";
        experienciaHTML += "<li><strong>Data de início</strong>: " + dataInicioExp  + "</li>";
        if (dataTerminoExp === "") {
            experienciaHTML += "<li><strong>Data de término:</strong> É meu emprego atual</li>";
        } else {
            experienciaHTML += "<li><strong>Data de término</strong>: " + dataTerminoExp + "</li>";
        }
        experienciaHTML += "<li><strong>Descrição do Cargo:</strong> " + descricaoCargo + "</li>";
        experienciaHTML += "<br>";
    });
    return experienciaHTML;
}

//GERA O HTML DE CURSOS EXTRACURRICULARES
function geraCursoExtracurricularHTML() {
    let cursoHTML = "";
    cursoExtracurricular.forEach(function(cursoE) {
        const { cursoExtra, dataInicioCurso, dataTerminoCurso} = cursoE;
        cursoHTML += "<li><strong>Curso:</strong> " + cursoExtra + "</li>";
        cursoHTML += "<li><strong>Data de início:</strong> " + dataInicioCurso + "</li>";
        cursoHTML += "<li><strong>Data de término:</strong> " + dataTerminoCurso  + "</li>";     
        cursoHTML += "<br>";
    });
    return cursoHTML;
}

//GERA O HTML DE IDIOMA
function geraIdiomaHTML() {
    let idiomaHTML = "";
    idiomas.forEach(function(idiomaN) {
        const { idioma, idiomaNivel} = idiomaN;
        idiomaHTML += "<li>"+ idioma + "</li>";
        idiomaHTML += "<li><strong>Nível:</strong> " + idiomaNivel + "</li>"  
        idiomaHTML += "<br>";
    });
    return idiomaHTML;
}


// ALERTAS
// ->Informações pessoais
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
if (localidade.value.trim() === "") {
    alert("Por favor, informe sua localidade (Cidade e Estado).");
    return;
}
if(estadoCivil.value.trim()===""){
    alert ("Informe seu estado civil")
    return;
}
if(idade.value.trim()===""){
    alert ("Informe sua idade")
}

//->Formaçao acadêmica
if(instituicao.value.trim()===""){
    alert ("Informe o nome da Instituição de Ensino");
    return;
}
if(cursoFormacao.value.trim()===""){
    alert ("Informe o curso de sua Formação Acadêmica");
    return;
}
if(instituicao.value.trim()!=="" && dataInicioForm.value.trim()==="" && dataTerminoForm.value.trim()===""){
    alert ("Informe data de inínio e data de término da Formação Acadêmica")
    return;
}
//->Idioma
if(idioma.value.trim()!=="" && idiomaNivel.value.trim()===""){
    alert ("Insira o nível de conhecimento do idioma informado");
    return;
}
//->Curso extracurricular
if(cursoExtra.value.trim()!=="" && dataInicioForm.value.trim()===""||dataTerminoForm.value.trim()===""){
    alert ("Informe data de inínio e data de término do curso informado")
    return;
}
//->Experiência profissional
if(cargo.value.trim()!=="" && empresa.value.trim()===""){
    alert ("Insira o nome da empresa que exerceu o cargo informado");
    return;
}
if(cargo.value.trim()!=="" && dataInicioExp.value.trim()===""){
    alert ("Informe data de inínio e data de término no cargo informado");
    return;
}
if(cargo.value.trim()!=="" && descricaoCargo.value.trim()===""){
    alert ("Descreva as atividades desempenhadas na empresa informada");
    return;
}
if(estadoCivil.value.trim()===""){
    alert ("Informe seu estado civil");
    return;
}
if(idade.value.trim()===""){
    alert("Informe sua idade");
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
"<main>"+
"<div class='total'>"+
"<div class='conteudo'>" +
"<img src='"+ fotoUrl +"' alt='Foto' class='foto-curriculo'>" +
"<section class = dadosP>"+
"<p class ='nome'>"+nome.value+"</p>" +
"<p>" + email.value + "<p>" + 
"<p>" + telefoneFormatado + "<p>"+
"<p>" + idade.value +" anos"+ ", "+ estadoCivil.value +"</p>"+
"<p>" + localidade.value + "</p>" +
"<a href=' website.value+' target='_blank' class='externo'><p>" + website.value+ "</p></a>"+
"</section>"+
"</div>"+

"<section class='secao'>"+
"<h1 class='formacao'>Formação Acadêmica</h1>"+
"<ul>"+
"<li><strong>Instituição:</strong> "+ instituicao.value + "</li>"+
"<li><strong>Curso:</strong> " + cursoFormacao.value + "</li>"+
"<li><strong>Data de início:</strong> " + dataInicioForm.value + "</li>"+
"<li><strong>Data de término:</strong> " + dataTerminoForm.value + "</li>"+
"</section>"+
"<section class= 'secao'>";
if(idiomas.length >0){
    novaPagina+= "<h1 class='idioma'>Idioma</h1>" + "<ul>" + geraIdiomaHTML() + "<ul>"
}
"</section>"+
"<section class= 'secao'>";
if(cursoExtracurricular.length >0){
    novaPagina+= "<h1 class='curso-extra'>Cursos Extracurriculares</h1>" + "<ul>" + geraCursoExtracurricularHTML() + "<ul>"
}
"<section class= 'secao'>";
if (experienciaProfissional.length > 0){
  novaPagina += "<h1 class='experienciaP'>Experiência Profissional</h1>" + "<ul>" + geraExperienciaProfissionalHTML() + "</ul>"
}
"</section>"
novaPagina +="<button onclick='gerarPDF()' id= 'pdf-botao' class=geraPdf>Download/Impressão em PDF</button>";


"</div>"+
"</main>"+

"</body>" +
"</html>";

const novaJanela = window.open("", "_blank");
  novaJanela.document.open();
  novaJanela.document.write(novaPagina);
  novaJanela.document.close();
 
});

reader.readAsDataURL(fotoFile);
});