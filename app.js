const dollarsText = document.querySelector('.dollars'),
   input = document.querySelector('#priceRange');

input.addEventListener('input', (e) => updatePrice(e.target.value));

const updatePrice = (priceInCents) => {

   const dollars = Math.floor(priceInCents / 100).toString();
   const cents = (priceInCents % 100).toString().padStart(2, '0');

   const price = `${dollars}.${cents}`;

   dollarsText.innerText = price;
};