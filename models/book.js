/**
 * Created by hellsigner on 27.07.15.
 */


module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Book', {
            id: DataTypes.INTEGER,
            title: DataTypes.STRING,
            isbn: DataTypes.STRING,
            quantity_initial: DataTypes.INTEGER,
            quantity_current: DataTypes.INTEGER
        },
        {
            tableName: 'books',
            timestamps: false,
            underscored: true
        }
    );
};

