let db = require('../database/models')
const Op = db.Sequelize.Op;

const controller = {
    products:  (req, res, next)=> {
        let page = (req.query.page !== undefined && req.query.page !== 0) ? req.query.page : 1;
        const limit = (req.query.limit !== undefined && req.query.limit !== 0) ? req.query.limit : 10;   // set limit of items per page
        let startValue;
        let endValue;
        if (page > 0) {
            startValue = (page * limit) - limit;     // 0, 10, 20, 30
            endValue = page * limit;                  // 10, 20, 30, 40
        } else {
            startValue = 0;
            endValue = 10;
        }
        let filtro = {
            where:{ id : .1},
            limit: endValue,
            offset: 10
         }   
        db.Product.findAll(filtro).then(prods => {
                if (prods.length > 0) {
                    res.status(200).json({
                        count: prods.length,
                        products: prods
                    });
                } else {
                    res.json({message: "No products found"});
                }
            })
            .catch(err => console.log(err));
    }
}

module.exports = controller