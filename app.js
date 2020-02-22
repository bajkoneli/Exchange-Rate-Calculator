let currencyOne = document.querySelector('#currency-one');
let currencyTwo = document.querySelector('#currency-two');
let input1 = document.querySelector('#amount-one');
let input2 = document.querySelector('#amount-two');

let swap = document.querySelector('#swap');
let rate = document.querySelector('#rate');




// fetch exchange rates and update the DOM


function calculate() {
  fetch(`https://api.exchangerate-api.com/v4/latest/USD.${currencyOne}`)
    .then(res => res.json())
      console.log(res);
      
// PRILIKOM PREUZIMANJA API_KEY IZBACUJE GRESKU
// PROVERITI PA NASTAVITI
    
  
}  

// Event listeners

currencyOne.addEventListener('change', calculate);
input1.addEventListener('input', calculate);
currencyTwo.addEventListener('change', calculate);
input2.addEventListener('input', calculate);

calculate();