const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Kadr = sequelize.define("kadr", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fatherName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthYear: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    birthMonth: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthDay: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    birthCountry: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthProvince: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthCityDistrict: {
        type: DataTypes.STRING,
        allowNull: false
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    citizenship: {
        type: DataTypes.STRING,
        allowNull: false
    },
    married: {
        type: DataTypes.STRING,
        allowNull: false
    },
    partisanship: {
        type: DataTypes.STRING,
        allowNull: false
    },
    levelKnowledge: {
        type: DataTypes.STRING,
        allowNull: false
    },
    seniority: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    salary: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    telegram: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports=Kadr;