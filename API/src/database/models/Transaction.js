module.exports = (sequelize, DataTypes) => {
    const alias = 'Transaction'

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        amount: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE
        },
        user_id: {
            type: DataTypes.INTEGER            
        },
        type_id: {
            type: DataTypes.INTEGER
        }
    }

    const config = {
        tableName: 'transactions',
        timestamps: false
    }

    const Transaction = sequelize.define(alias, cols, config)

    Transaction.associate = models => {
        Transaction.belongsTo(models.User, {
            as: 'users',
            foreignKey: 'user_id'
        })

        Transaction.belongsTo(models.Type, {
            as: 'types',
            foreignKey: 'type_id'
        })
    }

    return Transaction
}