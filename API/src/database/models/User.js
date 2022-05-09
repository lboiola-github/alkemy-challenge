module.exports = (sequelize, DataTypes) => {
    const alias = 'User'

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }

    const config = {
        tableName: 'users',
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config)

    
    User.associate = models => {
        User.hasMany(models.Transaction, {
            as: 'transactions',
            foreignKey: 'user_id'
        })
    }

    return User
}