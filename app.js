const products = [
  {
    id: 1,
    title: 'Lenovo Yoga',
    price: 3000,
  },
  {
    id: 2,
    title: 'Acer Aspire',
    price: 1800,
  },
  {
    id: 3,
    title: 'Dell Vostro',
    price: 3400,
  },
];

let order = [];

function addToBasket(productId) {
  if (order.find((el) => el.id === productId))
    return alert('The product is already in the basket');

  const product = products.find((item) => item.id === productId);
  order = [...order, product];
  renderCart();
  renderTotalPrice();
}

function removeFromBasket(productId) {
  order = order.filter((item) => item.id !== productId);
  renderCart();
  renderTotalPrice();
}

function renderTotalPrice() {
  document.getElementById('total').innerText = totalPrice;
}

function renderCart() {
  const cart = document.getElementById('basket-items');

  cart.innerHTML = '';

  order.forEach((item) => {
    const el = document.createElement('li');
    el.innerText = item.title;
    el.onclick = () => removeFromBasket(item.id);
    cart.append(el);
  });
}
