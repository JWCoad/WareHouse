
const User = require('./User');
const Item = require('./Item');
const Category = require('./Category');

Category.hasMany(Item, {
  foreignKey: 'category_id'
})

Item.belongsTo(Category, {
  foreignKey: 'category_id'
});

User.hasMany(Item, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Item.belongsTo(User, {
  foreignKey: 'user_id'
});



module.exports = { User, Category, Item };
