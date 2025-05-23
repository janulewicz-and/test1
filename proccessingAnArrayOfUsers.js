export function getTotalSpentByUser(purchases) {
  if (!Array.isArray(purchases)) {
    throw new Error('The input data must be an array.');
  }
  if (purchases.length === 0) {
    throw new Error('Error: null');
  }

  return purchases.reduce((acc, { user, price, quantity }) => {
    const total = price * quantity;
    acc[user] = (acc[user] || 0) + total;
    return acc;
  }, {});
}

export function getMostPopularProduct(purchases) {
  if (!Array.isArray(purchases)) {
    throw new Error('The input data must be an array.');
  }
  if (purchases.length === 0) {
    throw new Error('Error: null');
  }
  return Object.entries(
    purchases.reduce((acc, { product, quantity }) => {
      acc[product] = (acc[product] || 0) + quantity;
      return acc;
    }, {})
  ).sort((a, b) => b[1] - a[1])[0][0];
}

export function getTotalByCategory(purchases) {
  if (!Array.isArray(purchases)) {
    throw new Error('The input data must be an array.');
  }
  if (purchases.length === 0) {
    throw new Error('Error: null');
  }
  return purchases.reduce((acc, { category, price, quantity }) => {
    const total = quantity * price;
    acc[category] = (acc[category] || 0) + total;
    return acc;
  }, {});
}

export function groupByUser(purchases) {
  if (!Array.isArray(purchases)) {
    throw new Error('The input data must be an array.');
  }
  if (purchases.length === 0) {
    throw new Error('Error: null');
  }
  let result = {};
  purchases.forEach((index) => {
    if (!result[index.user]) {
      result[index.user] = [];
    }
    result[index.user].push(index);
  });
  return result;
}

export function groupByCategory(purchases) {
  if (!Array.isArray(purchases)) {
    throw new Error('The input data must be an array.');
  }
  if (purchases.length === 0) {
    throw new Error('Error: null');
  }
  let result = {};
  purchases.forEach((index) => {
    const category = index.category;
    if (!result[category]) {
      result[category] = { totalSpent: 0, products: [] };
    }
    result[category].totalSpent += index.price * index.quantity;
    if (!result[category].products.includes(index.product)) {
      result[category].products.push(index.product);
    }
  });
  return result;
}

export function getExpensivePurchases(purchases, cost) {
  if (!Array.isArray(purchases)) {
    throw new Error('The input data must be an array.');
  }
  if (purchases.length === 0) {
    throw new Error('Error: null');
  }
  if (typeof cost !== 'number') {
    throw new Error('The second value must be a number.');
  }
  return purchases.filter((index) => index.price >= cost);
}

export function getUserSortedPurchases(purchases, name) {
  if (typeof name !== 'string') {
    throw new Error('The second value must be a string.');
  }
  if (!Array.isArray(purchases)) {
    throw new Error('The input data must be an array.');
  }
  if (purchases.length === 0) {
    throw new Error('Error: null');
  }
  return purchases
    .filter((index) => index.user === name)
    .sort((a, b) => b.price - a.price);
}

export function getTopUsers(purchases, number) {
  if (!Array.isArray(purchases)) {
    throw new Error('The input data must be an array.');
  }
  if (typeof number !== 'number' || number <= 0) {
    throw new Error('The second value must be a positive number.');
  }
  let result = [];
  const sortedPurchases = getTotalSpentByUser(purchases);
  for (let i = 0; i <= number - 1; i++) {
    result.push(sortedPurchases[i].user);
  }
  return result;
}
