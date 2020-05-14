const app = require('express')()
const Razorpay = require('razorpay')
const shortid = require('shortid') 
const cors = require('cors')

app.use(cors())

const razorpay =  new Razorpay({
    key_id: 'rzp_test_p6k8wHRaXIIQCx',
    key_secret: 'fZBdNqi8QFLCiN9oC6nsaJvD'
})
  

app.get('/razorpay',(req,res)=>{

    const payment_capture=1
    const amount =1

    const options ={
        amount:(amount*100),
        currency:'INR',
        receipt:shortid.generate(),
        payment_capture
    }

    razorpay.orders.create(options)
    .then(result=>{
        console.log(result)
        // res.send('ok')
        res.json({
            id: result.id,
            currency: result.currency,
            amount:result.amount
        })
    })
    
    
})

app.listen(3000,()=>{
    console.log('listening on port 3000')
})