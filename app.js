let currencyOne = document.querySelector('#currency-one');
let currencyTwo = document.querySelector('#currency-two');
let input1 = document.querySelector('#amount-one');
let input2 = document.querySelector('#amount-two');

let swap = document.querySelector('#swap');
let rate = document.querySelector('#rate');

let API = 'https://api.exchangerate-api.com/v4/latest/USD';

function calculate() {
  fetch(API)
  .then((res) => res.json())
  .then((data) =>{
    console.log(data.USD);
    
  })  
}