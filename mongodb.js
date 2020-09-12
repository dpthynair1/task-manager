// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient


// Destructuring

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useUnifiedTopology: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    console.log('Connection successful!')

   const db = client.db(databaseName)

//    db.collection('users').insertOne({
//        name: 'Deepthy',
//        age: 42
//    }, (error,result) => {
//        if(error){
//            return console.log(error)
//        }
//        console.log(result.ops)
//    })

// db.collection('users').insertMany([
//     {
//         name: 'Ajay',
//         age: 44
//     },
//     {
//         name: 'Adi',
//         age: 16
//     }
// ],(error, result) => {
//     if(error){
//         return console.log(error)
//     }

//     console.log(result.ops)
// })

// db.collection('tasks').insertMany([
//     {
//         description: 'complete the unfinished tasks',
//         completed: false
//     },
//     {
//         description: 'Pot plants',
//         completed: false
//     }
// ],(error, result) => {
//     if(error){
//         return console.log(error)
//     }

//     console.log(result.ops)
// })


// // db.collection('users').findOne({_id: new ObjectID("5f4e2c925278660d41ca11ce")}, (error,user) => {
// //     if(error){
// //         return console.log(error)
// //     }
// //     console.log(user)
// // })

// // db.collection('users').find({age: 42}).toArray((error, users) => {
// //     console.log(users)
// // })

// // db.collection('users').find({age: 42}).count((error,count)=>{
// //     console.log(count)
// // })


// // db.collection('tasks').findOne({_id: new ObjectID("5f4e76cd835391109b446c55")},(error,task) =>{
// //     console.log(task)
// // })

// // db.collection('tasks').find({completed:false}).toArray((error,tasks) =>{
// //     console.log(tasks)
// // })

// db.collection('users').updateOne(
//     {
//         _id: new ObjectID("5f4e2c925278660d41ca11ce")},
//     {
//         $set:
//         {
//             name: 'Harvey'
//         }
//     }).then((result)=>{
//         console.log(result)
//     }).catch((error) => {
//         console.log(error)
//     })


    // db.collection('tasks').updateMany(
    //     {completed: false},
    //     {
    //         $set: {
    //             completed:true
    //         }
    //     }
    //     ).then((result) => {
    //         console.log(result.modifiedCount)
    //     }).catch((error) =>{
    //         console.log(error)
    //     })

        db.collection('users').deleteMany(
            {
                age: 42
            
            }).then((result)=>{
                console.log(result)
            }).catch((error) => {
                console.log(error)
            })
        
}) 

