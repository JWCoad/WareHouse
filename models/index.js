const User = require('./user');
const Item = require('./item');
const Category = require('./category');

Category.hasMany(Item, {
  foreignKey: 'category_id'
})

Item.belongsTo(Category, {
  foreignKey: 'category_id'
});




module.exports = { User, Category, Item };
