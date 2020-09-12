const mongoose = require('mongoose')
//const validator = require('validator')


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false,useUnifiedTopology: true
})

// const me = new User({
//     name: "Deepthy",
// 	email: "redrose@gmail.com",
// 	password: "redrose1"
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })




