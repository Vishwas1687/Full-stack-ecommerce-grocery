const express=require('express')

const formidable=require('formidable')
const {requiresSignIn,isAdmin}=require('../middlewares/authmiddleware')

const {createProductController,
    updateProductController,
    getSingleProductController, 
    getAllProductsController,deleteProductController,
     getPhotoController}=require('../controllers/productController')

const router=express.Router()

router.post('/create-product',requiresSignIn,isAdmin,createProductController)

router.put('/update-product/:slug',requiresSignIn,isAdmin,updateProductController)

router.delete('/delete-product/:slug',requiresSignIn,isAdmin,deleteProductController)

router.get('/get-product/:slug',getSingleProductController)

// router.get('/get-photo/:slug',getPhotoController)

router.get('/get-all-products',getAllProductsController)
module.exports=router