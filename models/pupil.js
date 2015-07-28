/**
 * Created by hellsigner on 27.07.15.
 */

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Type', {
            id: DataTypes.INTEGER,
            full_name: DataTypes.STRING,
            form: DataTypes.STRING
        },
        {
            tableName: 'pupils',
            timestamps: false,
            underscored: true
        }
    );
};

