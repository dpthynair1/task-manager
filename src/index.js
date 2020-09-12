const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./router/user')
const taskRouter = require('./router/task')

const app = express()

const port = process.env.PORT


//middleware
// app.use((req,res,next) => {
// // console.log(req.method, req.path)
// // next()


//     res.status(503).send('Site is currently down. Check back soon')

// })

const multer = require('multer')


const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },fileFilter(req, file,cb){

        if(!file.originalname.match(/\.(doc|docx)$/)){
            return cb(new Error('Please upload a word doc'))
        }
        return cb(undefined,true)
    }
})
app.post('/upload', upload.single('upload'),(req,res) => {
    res.send()
},(error,req,res,next) =>{
    res.status(400).send({error: error.message})
    
    })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)





// //const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')

// const myFunction =  async() =>{
//     // const password= 'Red123@'
//     // const hashPasssword = await bcrypt.hash(password, 8)

//     // console.log(hashPasssword)

//     // const isMatch = await bcrypt.compare(password,hashPasssword)
//     // console.log(isMatch)

//     const token = jwt.sign({_id: 123}, 'thisismysecret')
//     console.log(token)

//     const data = jwt.verify(token, 'thisismysecret')
//     console.log(data)
// }

// myFunction()

// const pet = {
// name: 'Hal'
// }

//  pet.toJSON = function(){

//    // console.log(this)
//     return {}
// }
// console.log(JSON.stringify(pet))

app.listen(port, () => {
    console.log('Server is up on ' + port)
})

// const Task = require('./src/models/task')
// const User = require('./src/models/user')

// const main = async() =>{
// // const task = await Task.findById('5f590fe8b4f73f4725008dd8')
// // await task.populate('owner').execPopulate()
// // console.log(task.owner)
// const user = await User.findById('5f590f34f7e9bb470da0dec7')
// await user.populate('tasks').execPopulate()
// console.log(user.tasks)
// }
// main()