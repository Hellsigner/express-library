/**
 * Created by hellsigner on 27.07.15.
 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('User', {
            id: DataTypes.INTEGER,
            username: DataTypes.STRING,
            password: DataTypes.STRING
        },
        {
            tableName: 'watchers',
            timestamps: false,
            underscored: true
        }
    );
};

