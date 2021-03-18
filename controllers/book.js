const { Book } = require('../models/index');

module.exports = class BookService{
    static async createBook(req, res) {
        try {
         const result =Book.create({
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
            const result = await Book.findOneAndUpdate({ id: req.body.id }, { status: req.body.newstatus })
            res.json(result)
        }
        catch {
            res.json(error)
        }
    }
    
}
