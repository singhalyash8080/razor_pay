const app = require('express')()
const Razorpay = require('razorpay')
const shortid = require('shortid') 
const cors = require('cors')

app.use(cors())

const razorpay =  new Razorpay({
    key_id: '', //add your razorpay account details
    key_secret: ''
})


app.get('/razorpay',(req,res)=>{

    const payment_capture=1
    const amount =1 //change this amount

    const options ={
        amount:(amount*100),
        currency:'INR',
        receipt:shortid.generate(),
        payment_capture
    }

    razorpay.orders.create(options)
    .then(result=>{
        console.log(result)
        res.json({
            id: result.id,
            currency: result.currency,
            amount:result.amount
        })

    })
})


app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.listen(3000,()=>{
    console.log('listening on port 3000')
})