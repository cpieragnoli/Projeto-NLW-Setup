// o JS transforma meu elemento html em um objeto ( que tem propriedades e funç~ionalidades)
// document - objeto que existe em todo navegador
// .querySelector('a') - seleciona a tag "a"
// .click() - dá ordem de clicar na tag "a"

// dá para comandar a página através de JS, usando o console

// const form = document.querySelector('form')
// ou podemos fazer o seletor igual ao do CSS (#form-habits) ao invés de ('form'), que é de formato "id" como abaixo

const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button") //procurar o o button no header button

button.addEventListener("click", add) //esta função vai ouvir o evento 'click' e executar a funçao 'add'
// ao clicar no botão vai rodar a função add.
form.addEventListener("change", save) // toda vez que clicar num elemento do form para mudar seu staus,
// vai haver uma mudança e esta mudança vai ser salva,

function add() {
    const today = new Date().toLocaleDateString("pt-br").slice(0, -5) // isto é uma função da biblioteca 
    //que faz pegar a data atual e eliminar os últimos 5 dígitos(que seria o ano/2023)
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists) {
        alert("Dia já incluso 😡")
        return
    }

    nlwSetup.addDay(today)
        alert('Adicionado com sucesso 😀')
}
//explicando o código a cima : qdo clicar no botão o evento (click)vai disparar a função "add", na linha 1 vai atribuir uma data 01/01 para 
// a variável "today". Na linha 2 vai pegar uma variável "nlwSetup.dayExists" e verificar se "today" já existe
// e vai atribuir um valor para "const dayExists" e se o valor já existir vai ser true e se não existir vai ser
//false, se for "false" não entra na função (if) e vai executar o "nlwSetup.addDay(today)" e adicionar o dia 
// e a mensagem de alert "Adicionado com sucesso 😀". Se for true vai executar a função(if) e vai 
// aparecer a mensagem de alert "Dia já incluso 😡" e o return interrompe a execução do código neste momento.

function save() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data)) 
} // JSON.stringify(nlwSetup.data) - transforma o objeto em strng
  // JSON.parse(localStorage.getItem("NLWSetup@habits") - transforma string em objeto

// para pegar as informações do localStorage em texto e transformar em objeto 
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} //se usar em outro navegador 
    //não vai achar nada, ou se for a primeira vez que usa o app então colocamos o (||) que siginifica (OU)
    // e pega o objeto vazio e funciona 
nlwSetup.setData(data)
nlwSetup.load()


// vai guardar os dados no localStorage sempre que houver alteração, mas se o navegador for outro não vai 
  // ter o localStorage e portanto não vai ter as infomarções armazenadas 






