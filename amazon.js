const user = {
  name: "John",
  active: true,
  cart: [],
  purchases: [],
};

const compose =
  (f, g) =>
  (...args) =>
    f(g(...args));
purchaseItem(
  emptyCart,
  buyItem,
  applyTaxToItems,
  addItemToCart
)(user, { name: "laptop", price: 200 });

function purchaseItem(...fns) {
  return fns.reduce(compose);
}

function addItemToCart(user, item) {
  const updateCart = user.cart.concat(item);
  return Object.assign({}, user, { cart: updateCart });
}

function applyTaxToItems(user) {
  const { cart } = user;
  const taxRate = 1.3;
  const updateCart = cart.map((item) => {
    return {
      name: item.name,
      price: item.price * taxRate,
    };
  });
  return Object.assign({}, user, { cart: updateCart });
}

function buyItem(user) {
  return user;
}

function emptyCart(user) {
  return user;
}

//implement a cart feature:
//1. add items to cart.
//2. add 3% tax to item in cart
//3. buy item : cart --> purchases
//4. empty cart
