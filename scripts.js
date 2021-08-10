

let botton = document.getElementById("button")
let select = document.getElementById("select-moedas")




async function converterMoedas() {

   let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then( function(resposta){
      return resposta.json()
   })

   let dolar = moedas.USDBRL.high
   let euro = moedas.EURBRL.high


   let inputValorEmReais = Number(document.getElementById("input").value)
   let inputMoedas = document.getElementById("input-moedas")
   let TextoReal = document.getElementById("texto-real")

   if (select.value === "US$ Dolar Americano") {
      let valorEmDolares = inputValorEmReais / dolar
      inputMoedas.innerHTML = valorEmDolares.toLocaleString('en-us', { style: 'currency', currency: 'usd' })

   }

   if (select.value === "€ Euro") {
      let valorEmEuro = inputValorEmReais / euro
      inputMoedas.innerHTML = valorEmEuro.toLocaleString("de-DE", { style: 'currency', currency: 'EUR' })

   }


   TextoReal.innerHTML = inputValorEmReais.toLocaleString('pt-br', { style: 'currency', currency: 'brl' })

}


//Essa função é responsavel por trocar a bandeira e o nome das moedas
function trocaDeMoeda() {
   let textoMoedas = document.getElementById("texto-moedas")
   let bandeiraMoedas = document.getElementById("bandeira-moedas")


   if (select.value === "US$ Dolar Americano") {
      textoMoedas.innerHTML = "Dolar Americano"
      bandeiraMoedas.src = "./IMG/estados-unidos (1) 1.png"

   }

   if (select.value === "€ Euro") {
      textoMoedas.innerHTML = "Euro"
      bandeiraMoedas.src = "./IMG/euro.png"
   }

   converterMoedas()

}


botton.addEventListener("click", converterMoedas)
select.addEventListener("change", trocaDeMoeda)

