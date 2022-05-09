module.exports = (sequelize, DataTypes) => {
    const alias = 'Category'

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type_id: {
            type: DataTypes.INTEGER
        }
    }

    const config = {
        tableName: 'categories',
        timestamps: false
    }

    const Category = sequelize.define(alias, cols, config)

    Category.associate = models => {
        Category.belongsTo(models.Type, {
            as: 'types',
            foreignKey: 'type_id'
        })
    }

    return Category
}