const purchases = [
  { user: 'Alice', product: 'Milk', price: 10, quantity: 2, category: 'Dairy' },
  { user: 'Bob', product: 'Cheese', price: 30, quantity: 1, category: 'Dairy' },
  {
    user: 'Alice',
    product: 'Bread',
    price: 15,
    quantity: 1,
    category: 'Bakery',
  },
  { user: 'Alice', product: 'Milk', price: 10, quantity: 1, category: 'Dairy' },
  { user: 'Bob', product: 'Milk', price: 10, quantity: 3, category: 'Dairy' },
  {
    user: 'Alice',
    product: 'Cake',
    price: 40,
    quantity: 1,
    category: 'Bakery',
  },
];

function getTotalSpentByUser(purchasesj) {
  let result = {};
  for (const index in purchases) {
    const { user, price } = purchases[index];
    result[user] = (result[user] || 0) + price;
  }
  return result;
}

function getMostPopularProduct(purchases) {
  let result = [];
  for (const index in purchases) {
    const product = purchases[index].product;
    result[product] = (result[product] || 0) + 1;
  }
  let mostPopularProduct = '';
  let mostPopProductVol = 0;
  for (const index in result) {
    if (result[index] > mostPopProductVol) {
      mostPopProductVol = result[index];
      mostPopularProduct = [index].join();
    }
  }
  return mostPopularProduct;
}

console.log(getMostPopularProduct(purchases));

function getTotalByCategory(purchases) {
  let result = {};
  for (const index in purchases) {
    const { category, price } = purchases[index];
    result[category] = (result[category] || 0) + price;
  }
  return result;
}

function groupByCategory(purchases) {
  const newArr = [];

  for (const user in purchases) {
    newArr.push(...purchases[user]);
  }
  let result = {};
  for (const index of newArr) {
    const category = index.category;
    if (!result[category]) {
      result[category] = { totalSpent: 0, products: [] };
    }
    result[category].totalSpent += index.price;
    if (!result[category].products.includes(index.product)) {
      result[category].products.push(index.product);
    }
  }
  return result;
}

function getExpensivePurchases(purchases, cost) {
  let result = [];
  for (const index in purchases) {
    if (purchases[index].price >= cost) {
      result.push(purchases[index]);
    }
  }
  return result;
}

function getUserSortedPurchases(purchases, name) {
  let result = [];
  for (const index in purchases) {
    if (purchases[index].user === name) {
      let user = purchases[index];
      result.push(user);
    }
  }
  return result;
}

function getTopUsers(purchases, number) {
  let result = [];
  purchases.sort((a, b) => a - b);
  for (let i = 0; i <= number - 1; i++) {
    result.push(purchases[i].user);
  }
  return result;
}
