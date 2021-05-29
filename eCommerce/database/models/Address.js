module.exports = (sequelize, dataTypes) => {

    const Address = sequelize.define('Adress' , { 
        id: {
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        line1: {
            type: dataTypes.STRING
        },
        line2: {
            type: dataTypes.STRING
        },
        city: {
            type: dataTypes.STRING
        },
        state: {
            type: dataTypes.STRING
        },
        country: {
            type: dataTypes.STRING
        },
        phone: {
            type: dataTypes.STRING
        },
        pincode: {
            type: dataTypes.INTEGER
        },
        userId: {
            type: dataTypes.INTEGER, 
            field: "user_id"
        },
    }, {
        tableName: "addresses", 
        timestamps: false
    });

    return Address; 
}; 