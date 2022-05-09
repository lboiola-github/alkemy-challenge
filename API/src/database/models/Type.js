module.exports = (sequelize, DataTypes) => {
    const alias = 'Type'

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    const config = {
        tableName: 'types',
        timestamps: false
    }

    const Type = sequelize.define(alias, cols, config)

    Type.associate = models => {
        Type.hasMany(models.Transaction, {
            as: 'transactions',
            foreignKey: 'type_id'
        })

        Type.hasMany(models.Category, {
            as: 'categories',
            foreignKey: 'type_id'
        })
    }

    return Type
}