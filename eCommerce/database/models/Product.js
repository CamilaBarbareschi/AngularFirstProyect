module.exports = (sequelize, dataTypes) => {

    const Product = sequelize.define('Product' , { 
        id: {
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        title: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        },
        images: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.TEXT
        },
        price: {
            type: dataTypes.FLOAT
        },
        quantity: {
            type: dataTypes.INTEGER
        },
        shortDesc: {
            type: dataTypes.STRING, 
            field: "short_desc"
        },
        catId: {
            type: dataTypes.INTEGER, 
            field: "cat_id"
        },
    }, {
        tableName: "products", 
        timestamps: false
    });

    return Product; 
}; 