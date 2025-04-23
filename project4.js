function getTotalSpentByUser(obj) {
  let result = {};
  for (const key in obj) {
    const { user, price } = obj[key];
    result[user] = (result[user] || 0) + price;
  }
  return result;
}

function getMostPopularProduct(obj) {
  let result = {};
  for (const key in obj) {
    const product = obj[key].product;
    result[product] = (result[product] || 0) + 1;
  }
  let mostPopularProduct = '';
  let mostPopProductVol = [];
  for (const key in result) {
    if (result[key] > mostPopProductVol) {
      mostPopProductVol = result[key];
      mostPopularProduct = [key];
    }
  }
  return mostPopularProduct.join();
}

function getTotalByCategory(obj) {
  let result = {};
  for (const key in obj) {
    const { category, price } = obj[key];
    result[category] = (result[category] || 0) + price;
  }
  return result;
}

const gays = {
  Alice: [
    {
      user: 'Alice',
      product: 'Milk',
      price: 10,
      quantity: 2,
      category: 'Dairy',
    },
    {
      user: 'Alice',
      product: 'Bread',
      price: 15,
      quantity: 1,
      category: 'Bakery',
    },
    {
      user: 'Alice',
      product: 'Milk',
      price: 10,
      quantity: 1,
      category: 'Dairy',
    },
    {
      user: 'Alice',
      product: 'Cake',
      price: 40,
      quantity: 1,
      category: 'Bakery',
    },
  ],
  Bob: [
    {
      user: 'Bob',
      product: 'Cheese',
      price: 30,
      quantity: 1,
      category: 'Dairy',
    },
    { user: 'Bob', product: 'Milk', price: 10, quantity: 3, category: 'Dairy' },
  ],
};

function groupByCategory(purchases) {
  const newObj = [];

  for (const user in purchases) {
    newObj.push(...purchases[user]);
  }
  let result = {};
  for (const key of newObj) {
    const category = key.category;
    if (!result[category]) {
      result[category] = { totalSpent: 0, products: [] };
    }
    result[category].totalSpent += key.price;
    if (!result[category].products.includes(key.product)) {
      result[category].products.push(key.product);
    }
  }
  return result;
}

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

function getExpensivePurchases(purchases, cost) {
  let result = [];
  for (const key in purchases) {
    if (purchases[key].price >= cost) {
      let user = purchases[key];
      result.push(user);
    }
  }
  return result;
}

function getUserSortedPurchases(purchases, name) {
  let result = [];
  for (const key in purchases) {
    if (purchases[key].user === name) {
      let user = purchases[key];
      result.push(user);
    }
  }
  return result;
}

function getTopUsers(purchases, number) {
  let result = [];
  purchases.sort(function (a, b) {
    a - b;
  });
}
