const User = require('./user');
const Item = require('./item');
const Category = require('./category');

Category.hasMany(Item, {
  foreignKey: 'id',
  onDelete: 'CASCADE'
});

Item.belongsTo(Category, {
  foreignKey: 'id'
});


module.exports = { User, Category, Item };
