/**
 * Created by hellsigner on 27.07.15.
 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Type', {
            id: DataTypes.INTEGER,
            title: DataTypes.STRING
        },
        {
            tableName: 'books_types',
            timestamps: false,
            underscored: true
        }
    );
};

