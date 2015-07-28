/**
 * Created by hellsigner on 27.07.15.
 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Author', {
            id: DataTypes.INTEGER,
            books_id: DataTypes.INTEGER,
            display_name: DataTypes.STRING,
        },
        {
            tableName: 'books_authors',
            timestamps: false,
            underscored: true
        }
    );
};

