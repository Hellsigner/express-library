/**
 * Created by hellsigner on 27.07.15.
 */


module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Book', {
            book_id: DataTypes.INTEGER,
            type_id: DataTypes.INTEGER
        },
        {
            tableName: 'books_has_types',
            timestamps: false,
            underscored: true
        }
    );
};

