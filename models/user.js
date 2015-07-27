/**
 * Created by hellsigner on 27.07.15.
 */

var User = sequelize.define('User', {
    id: Sequelize.INTEGER,
    username: Sequelize.STRING,
    password: Sequelize.STRING
    },
    {
        tableName: 'watchers',
        timestamps: false,
        underscored: true
    }
);
