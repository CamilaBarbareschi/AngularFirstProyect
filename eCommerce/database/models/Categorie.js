module.exports = (sequelize, dataTypes) => {

    const Categorie = sequelize.define('Categorie' , { 
        id: {
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        title: {
            type: dataTypes.STRING
        },
    }, {
        tableName: "categories", 
        timestamps: false
    });

    return Categorie; 
}; 