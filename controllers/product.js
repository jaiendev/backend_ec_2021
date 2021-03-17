const { Product } = require('../models/index')

module.exports = class ProductService{
    static async createProduct(req, res) {
        try {
         const result =Product.create({
                id: req.body.id,
                name: req.body.name,
                price: req.body.price,
                status:req.body.status,
            })
        res.json("Created")
        }
        catch (error) {
            res.json(error)
        }
    }
    static async Inactive(req, res) {
         try {
            const result = await Product.findOneAndUpdate({ id: req.body.id }, { status: req.body.newstatus })
            res.json(result)
        }
        catch {
            res.json(error)
        }
    }
    
}
