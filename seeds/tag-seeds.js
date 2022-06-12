const { Tag } = require('../models');

const tagData = [
    {
        tag_name: 'aqua',
    },
    {
        tag_name: 'lemon chiffon',
    },
    {
        tag_name: 'blue',
    },
    {
        tag_name: 'red',
    },
    {
        tag_name: 'green',
    },
    {
        tag_name: 'white',
    },
    {
        tag_name: 'burgundy',
    },
    {
        tag_name: 'black',
    },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;