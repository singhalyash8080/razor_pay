const app = require('express')()
const Razorpay = require('razorpay')
const shortid = require('shortid') 
const cors = require('cors')

app.use(cors())

const razorpay =  new Razorpay({
    key_id: '',
    key_secret: ''
})

const ob={
    message:"yash"

}

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