module.exports = (sequelize, dataTypes) => {

    const User = sequelize.define('User' , { 
        id: {
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        username: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        fname: {
            type: dataTypes.STRING
        },
        lname: {
            type: dataTypes.STRING
        },
        age: {
            type: dataTypes.INTEGER
        },
        role: {
            type: dataTypes.INTEGER
        },
        photoUrl: {
            type: dataTypes.TEXT
        },
        type: {
            type: dataTypes.STRING
        },
    }, {
        tableName: "users", 
        timestamps: false
    });

    return User; 
}; 