const user = {
  name: "John",
  active: true,
  cart: [],
  purchases: [],
};
purchaseItem({ name: "laptop", price: 300 });

function purchaseItem(user, item) {
  return object.assign({}, user, { purchases: item });
}

function itemToCart() {}

function applyTaxToItems() {}

function buyItem() {}

function emptyCart() {}

//implement a cart feature:
//1. add items to cart.
//2. add 3% tax to item in cart
//3. buy item : cart --> purchases
//4. empty cart
