const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Profiles extends Model {} 

Profiles.init( 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        profile_name: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        profile_image: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'profiles',
      }
);

module.exports = Profiles;