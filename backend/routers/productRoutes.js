import asyncHandler from 'express-async-handler'
import express from 'express'
const router = express.Router()
import Products from '../models/productModel.js'

//@des    : Get all the Products list
//@Method : GET
//@Access : Public
router.get('/', asyncHandler(async(req, res)=>{
    const products = await Products.find({})
    res.send(products)

}))

//@des    : Get product based on id
//@Method : GET
//@Access : Public
router.get('/:id',  asyncHandler(async(req, res) => {
    const product = await Products.findById(req.params.id)
    if(product){
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product not found!')
    }

}))


export default router

