const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');



const calc = ()=>{

    const currency_two = currencyEl_two.value;

    const currency_one = currencyEl_one.value;


    fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((response)=>response.json())
    .then((data)=>{
      rateEl.innerText = `1 ${currency_one} = ${data.rates[currency_two]} ${currency_two}`
      amountEl_two.value = (data.rates[currency_two] * amountEl_one.value).toFixed(2) 
      
    })

}


currencyEl_one.addEventListener("change", calc)
currencyEl_two.addEventListener("change", calc)

amountEl_one.addEventListener("input", calc)
amountEl_two.addEventListener("input", calc)

swap.addEventListener("click", ()=>{
  const temp = currencyEl_two.value
  currencyEl_two.value = currencyEl_one.value 
  currencyEl_one.value = temp

  calc()
} )

calc()


