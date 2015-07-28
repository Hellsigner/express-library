/**
 * Created by hellsigner on 27.07.15.
 */


module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Book', {
            id: DataTypes.INTEGER,
            pupils_id: DataTypes.INTEGER,
            books_id: DataTypes.INTEGER,
            timestamp_given: DataTypes.DATE,
            timestamp_returned: DataTypes.DATE,
            is_returned: DataTypes.BOOLEAN
        },
        {
            tableName: 'books_orders',
            timestamps: false,
            underscored: true
        }
    );
};

