// const { getMostPopularProduct } = require('./project4');
import {
  getMostPopularProduct,
  getTopUsers,
  getTotalSpentByUser,
  getTotalByCategory,
  groupByUser,
  groupByCategory,
} from './project4';

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
    expect(getTotalSpentByUser([])).toEqual({});
  });

  it('Should return error message if input is not an array.', () => {
    expect(getTotalSpentByUser({})).toEqual('The input data must be an array.');
    expect(getTotalSpentByUser(123)).toEqual(
      'The input data must be an array.'
    );
    expect(getTotalSpentByUser('string')).toEqual(
      'The input data must be an array.'
    );
  });
});

describe('getTotalByCategory', () => {
  it('Should correctly calculate total spent by cattegory.', () => {
    expect(getTotalByCategory(purchases)).toEqual({ Dairy: 90, Bakery: 55 });
  });

  it('Should return empty object if input array is empty.', () => {
    expect(getTotalByCategory([])).toEqual({});
  });

  it('Should return error message if input is not an array.', () => {
    expect(getTotalByCategory({})).toEqual('The input data must be an array.');
    expect(getTotalByCategory(123)).toEqual('The input data must be an array.');
    expect(getTotalByCategory('string')).toEqual(
      'The input data must be an array.'
    );
  });
});

describe('getMostPopularProduct', () => {
  it('Should display most popular product', () => {
    expect(getMostPopularProduct(purchases)).toEqual('Milk');
  });

  it('Should return empty object if input array is empty.', () => {
    expect(getMostPopularProduct([])).toEqual({});
  });

  it('Should return error message if input is not an array.', () => {
    expect(getMostPopularProduct({})).toEqual(
      'The input data must be an array.'
    );
    expect(getMostPopularProduct(123)).toEqual(
      'The input data must be an array.'
    );
    expect(getMostPopularProduct('string')).toEqual(
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
    expect(groupByUser([])).toEqual({});
  });

  it('Should return error message if input is not an array.', () => {
    expect(groupByUser({})).toEqual('The input data must be an array.');
    expect(groupByUser(123)).toEqual('The input data must be an array.');
    expect(groupByUser('string')).toEqual('The input data must be an array.');
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
    expect(groupByCategory([])).toEqual({});
  });

  it('Should return error message if input is not an array.', () => {
    expect(groupByCategory({})).toEqual('The input data must be an array.');
    expect(groupByCategory(123)).toEqual('The input data must be an array.');
    expect(groupByCategory('string')).toEqual(
      'The input data must be an array.'
    );
  });
});
