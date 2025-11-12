//variável que recebe a largura da tela da classe window
let largura = window.screen.width;
//alerta na janela  o texto
window.alert("A largura da tela é" + largura);

let titulo = document.getElementById("titulo");
console.log(titulo);

//inclui um bloco de conteúdo de HTML
document.getElementById("caixa").innerHTML = "isaque";
//inclui um texto de conteúdo
document.getElementById("caixa").textContent ="Escola"
//abre uma caixa de diálogo com o usuário
let digiteNome = window.prompt("Digite seu nome")
document.getElementById("nome").textContent=(digiteNome);

//adiciona uma classe css
let caixaTexto = document.getElementById("caixa");
caixaTexto.classList.add("verde");

//evento de clique
const btnTrocaCor = document.getElementById("btnTrocaCor");
btnTrocaCor.addEventListener("click", () => {
    
});
const btnTrocaTexto = document.getElementById("btnTrocaTexto");
btnTrocaTexto.addEventListener("click", () =>{
     let texto = window.prompt("Digite a palavra")
        caixaTexto.textContent = texto
});

let sobrenome =document.getElementById("Sobrenome").value;
alert(sobrenome)



