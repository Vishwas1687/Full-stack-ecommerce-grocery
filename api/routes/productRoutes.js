const express=require('express')

const router=express.Router()

router.get('/get-all-products',(req,res)=>{
    res.send('All products are fetched')
})

module.exports=router