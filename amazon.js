const user = {
  name: "John",
  active: true,
  cart: [],
  purchases: [],
};
const amazonHistory = [];
const compose = (f, g) => {
  console.log("compose: ", f, g);
  return (...args) => f(g(...args));
};
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
  amazonHistory.push(user);
  const updateCart = user.cart.concat(item);
  return Object.assign({}, user, { cart: updateCart });
}

function applyTaxToItems(user) {
  amazonHistory.push(user);
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
  amazonHistory.push(user);
  return Object.assign({}, user, { purchases: user.cart });
}

function emptyCart(user) {
  amazonHistory.push(user);
  return Object.assign({}, user, { cart: [] });
}

//implement a cart feature:
//1. add items to cart.
//2. add 30% tax to item in cart
//3. buy item : cart --> purchases
//4. empty cart
// console.log(amazonHistory);
