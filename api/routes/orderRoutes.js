const express=require('express')

const router=express.Router()

router.get('/get-all-orders',(req,res)=>{
    res.send('All orders are fetched')
})

module.exports=router;