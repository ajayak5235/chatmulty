const Sequelize  = require('sequelize');

const sequelize = new Sequelize(','root','1',{
    dialect:'mysql',
    host:'localhost'
})

module.exports = sequelize;
