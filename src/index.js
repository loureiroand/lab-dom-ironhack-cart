// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  const priceValue = price.innerText;
  const quantityValue = quantity.value;

  const subtotalValue = priceValue * quantityValue;
  console.log(subtotalValue);

  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = subtotalValue;
  return subtotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName('product');
  const productsArray = [...products]; // converting to an array

  const subtotalValuesArray = productsArray.map(product =>
    updateSubtotal(product)
  );

  const totalValue = subtotalValuesArray.reduce((acc, curr) => acc + curr, 0);
  document.querySelector('#total-value span').innerText = totalValue;

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const parent = target.parentNode.parentNode;
  parent.parentNode.removeChild(parent);

  calculateAll();
}

// ITERATION 5

// const createBtn = document.getElementsById('.create');
// createBtn.addEventListener('click', createProduct);
function createProduct() {
  const productName = document.querySelector(
    '.create-product',
    input[(type = 'text')]
  );
  const productPrice = document.querySelector(
    '.create-product',
    input[(type = 'number')]
  );
  const bodyTable = document.querySelector('tbody');
  const newRow = document.createElement('tr');
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  });
});
