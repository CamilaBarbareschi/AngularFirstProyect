module.exports = (sequelize, dataTypes) => {

    const OrderDetail = sequelize.define('OrderDetail' , { 
        id: {
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        orderId: {
            type: dataTypes.INTEGER, 
            field: "order_id"
        },
        productId: {
            type: dataTypes.INTEGER, 
            field: "product_id"
        },
        quantity: {
            type: dataTypes.INTEGER, 
        },
    }, {
        tableName: "orders_details", 
        timestamps: false
    });

    return OrderDetail; 
}; 