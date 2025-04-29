// const { getMostPopularProduct } = require('./project4');
import {
  getMostPopularProduct,
  getTopUsers,
  getTotalSpentByUser,
  getTotalByCategory,
  groupByUser,
  groupByCategory,
  getExpensivePurchases,
  getUserSortedPurchases,
} from './myFunctions';

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

describe('getTotalSpentByUser', () => {
  it('Should correctly calculate total spent per user.', () => {
    expect(getTotalSpentByUser(purchases)).toEqual({ Alice: 85, Bob: 60 });
  });

  it('Should return empty object if input array is empty.', () => {
    expect(() => getTotalSpentByUser([])).toThrow('The input array is empty.');
  });

  it('Should return error message if input is not an array.', () => {
    expect(() => getTotalSpentByUser({})).toThrow(
      'The input data must be an array.'
    );
    expect(() => getTotalSpentByUser(123)).toThrow(
      'The input data must be an array.'
    );
    expect(() => getTotalSpentByUser('string')).toThrow(
      'The input data must be an array.'
    );
  });
});

describe('getTotalByCategory', () => {
  it('Should correctly calculate total spent by cattegory.', () => {
    expect(getTotalByCategory(purchases)).toEqual({ Dairy: 90, Bakery: 55 });
  });

  it('Should return empty object if input array is empty.', () => {
    expect(() => getTotalByCategory([])).toThrow('The input array is empty.');
  });

  it('Should return error message if input is not an array.', () => {
    expect(() => getTotalByCategory({})).toThrow(
      'The input data must be an array.'
    );
    expect(() => getTotalByCategory(123)).toThrow(
      'The input data must be an array.'
    );
    expect(() => getTotalByCategory('string')).toThrow(
      'The input data must be an array.'
    );
  });
});

describe('getMostPopularProduct', () => {
  it('Should display most popular product', () => {
    expect(getMostPopularProduct(purchases)).toEqual('Milk');
  });

  it('Should return empty object if input array is empty.', () => {
    expect(() => getMostPopularProduct([])).toThrow(
      'The input array is empty.'
    );
  });

  it('Should return error message if input is not an array.', () => {
    expect(() => getMostPopularProduct({})).toThrow(
      'The input data must be an array.'
    );
    expect(() => getMostPopularProduct(123)).toThrow(
      'The input data must be an array.'
    );
    expect(() => getMostPopularProduct('string')).toThrow(
      'The input data must be an array.'
    );
  });
});

describe('groupByUser', () => {
  it('Should group user by name', () => {
    expect(groupByUser(purchases)).toEqual({
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
        {
          user: 'Bob',
          product: 'Milk',
          price: 10,
          quantity: 3,
          category: 'Dairy',
        },
      ],
    });
  });

  it('Should return empty object if input array is empty.', () => {
    expect(() => groupByUser([])).toThrow('The input array is empty.');
  });

  it('Should return error message if input is not an array.', () => {
    expect(() => groupByUser({})).toThrow('The input data must be an array.');
    expect(() => groupByUser(123)).toThrow('The input data must be an array.');
    expect(() => groupByUser('string')).toThrow(
      'The input data must be an array.'
    );
  });
});

describe('groupByCategory', () => {
  it('Should display how mach was spended on this category and what was bought  ', () => {
    expect(groupByCategory(purchases)).toEqual({
      Dairy: {
        totalSpent: 90,
        products: ['Milk', 'Cheese'],
      },
      Bakery: {
        totalSpent: 55,
        products: ['Bread', 'Cake'],
      },
    });
  });

  it('Should return empty object if input array is empty.', () => {
    expect(() => groupByCategory([])).toThrow('The input array is empty.');
  });

  it('Should return error message if input is not an array.', () => {
    expect(() => groupByCategory({})).toThrow(
      'The input data must be an array.'
    );
    expect(() => groupByCategory(123)).toThrow(
      'The input data must be an array.'
    );
    expect(() => groupByCategory('string')).toThrow(
      'The input data must be an array.'
    );
  });
});

describe('getExpensivePurchases', () => {
  'should display most number of most expensiv products',
    () => {
      expect(getExpensivePurchases(purchases, 2)).toEqual([
        {
          user: 'Bob',
          product: 'Cheese',
          price: 30,
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
      ]);
    };
});
it('Should return error message if input is not an array.', () => {
  expect(() => getExpensivePurchases({}, 2)).toThrow(
    'The input data must be an array.'
  );
  expect(() => getExpensivePurchases(123, 2)).toThrow(
    'The input data must be an array.'
  );
  expect(() => getExpensivePurchases('string', 1)).toThrow(
    'The input data must be an array.'
  );
});
it('should display error massage if second value is not number', () => {
  expect(() => getExpensivePurchases(purchases, 'abc')).toThrow(
    'The second value must be a number.'
  );
  expect(() => getExpensivePurchases(purchases, {})).toThrow(
    'The second value must be a number.'
  );
  expect(() => getExpensivePurchases(purchases, [])).toThrow(
    'The second value must be a number.'
  );
});
it('Should return empty object if input array is empty.', () => {
  expect(() => getExpensivePurchases([], 1)).toThrow(
    'The input array is empty.'
  );
});

describe('Should display purchases by user name', () => {
  expect(getUserSortedPurchases(purchases, 'Alice')).toEqual([
    {
      user: 'Alice',
      product: 'Cake',
      price: 40,
      quantity: 1,
      category: 'Bakery',
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
      quantity: 2,
      category: 'Dairy',
    },
    {
      user: 'Alice',
      product: 'Milk',
      price: 10,
      quantity: 1,
      category: 'Dairy',
    },
  ]);
});
it('Should display error massage if name is not a string', () => {
  expect(() => getUserSortedPurchases(purchases, 2)).toThrow(
    'The second value must be a string'
  );
  expect(() => getUserSortedPurchases(purchases, [])).toThrow(
    'The second value must be a string'
  );
  expect(() => getUserSortedPurchases(purchases, {})).toThrow(
    'The second value must be a string'
  );
});
it('Should return error message if input is not an array.', () => {
  expect(() => getUserSortedPurchases({}, 'Alice')).toThrow(
    'The input data must be an array.'
  );
  expect(() => getUserSortedPurchases(123, 'Alice')).toThrow(
    'The input data must be an array.'
  );
  expect(() => getUserSortedPurchases('string', 'Alice')).toThrow(
    'The input data must be an array.'
  );
});
it('Should return empty object if input array is empty.', () => {
  expect(() => getUserSortedPurchases([], 'Alice')).toThrow(
    'The input array is empty.'
  );
});

describe('getExpensivePurchases', () => {
  'should display most number of most expensiv products',
    () => {
      expect(getExpensivePurchases(purchases, 1)).toEqual(['Alice']);
    };
});
it('Should return error message if input is not an array.', () => {
  expect(() => getExpensivePurchases({}, 1)).toThrow(
    'The input data must be an array.'
  );
  expect(() => getExpensivePurchases(123, 1)).toThrow(
    'The input data must be an array.'
  );
  expect(() => getExpensivePurchases('string', 1)).toThrow(
    'The input data must be an array.'
  );
});
it('should display error massage if second value is not number', () => {
  expect(() => getExpensivePurchases(purchases, 'abc')).toThrow(
    'The second value must be a number.'
  );
  expect(() => getExpensivePurchases(purchases, {})).toThrow(
    'The second value must be a number.'
  );
  expect(() => getExpensivePurchases(purchases, 'abc')).toThrow(
    'The second value must be a number.'
  );
});
expect(() => getExpensivePurchases(purchases, {})).toThrow(
  'The second value must be a number.'
);
expect(() => getExpensivePurchases(purchases, [])).toThrow(
  'The second value must be a number.'
);
it('Should return empty object if input array is empty.', () => {
  expect(() => getExpensivePurchases([], 1)).toThrow(
    'The input array is empty.'
  );
});
