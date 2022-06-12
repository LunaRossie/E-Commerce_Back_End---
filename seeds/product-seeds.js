const { Product } = require('../models');

const productData = [
    {
        product_name: 'Plain T-Shirt',
        price: 16.99,
        stock: 14,
        category_id: 1,
    },
    {
        product_name: 'Loafer Shoes',
        price: 85.0,
        stock: 25,
        category_id: 5,
    },
    {
        product_name: 'Plain Trousers',
        price: 69.99,
        stock: 12,
        category_id: 4,
    },
    {
        product_name: 'Leather Jacket',
        price: 129.99,
        stock: 50,
        category_id: 3,
    },
    {
        product_name: 'Formal Tie',
        price: 19.99,
        stock: 22,
        category_id: 2,
    },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;