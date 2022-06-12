const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Shirts',
    },
    {
        category_name: 'Trousers',
    },
    {
        category_name: 'Jacket',
    },
    {
        category_name: 'Ties',
    },
    {
        category_name: 'Shoes',
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;