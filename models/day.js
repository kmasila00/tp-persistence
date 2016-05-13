var Sequelize = require('sequelize');
var db = require('./_db');

var Day = db.define('day', {
  number: sequelize.INTEGER
});

Day.belongsTo(Hotel);

module.exports = Day
