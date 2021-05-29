module.exports = (sequelize, dataTypes) => {

    const Order = sequelize.define('Order' , { 
        id: {
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        userId: {
            type: dataTypes.INTEGER, 
            field: "user_id"
        },
    }, {
        tableName: "orders", 
        timestamps: false
    });

    return Order; 
}; 