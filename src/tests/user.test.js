const request = require('supertest')
const app = require('/Users/dpthynair/NodeCourse1/task-manager/src/app.js')
const User = require('../models/user')
const {userOneId,userOne,userTwo,userTwoId,taskOne,taskTwo,taskThree, setUpDatabase} = require('./fixtures/db')


// beforeEach(async() => {
 
//  //console.log(userOne)
// })

beforeEach(setUpDatabase)

test('Should sign up a new user',async() =>{
  const response = await request(app).post('/users').send({
        name:'Deepthy',
        email: 'dpthynair@gmail.com',
        password: 'Blackbelt$'
    }).expect(201)

    // Assert that database was changed correctly
    //response returns  res.status(201).send({user,token})
   const user = await User.findById(response.body.user._id)
   expect(user).not.toBeNull()

   //Assertions about the object/response

   expect(response.body).toMatchObject({
       user:{
        name:'Deepthy',
        email: 'dpthynair@gmail.com'
       },
       token: user.tokens[0].token
   })

   expect(user.password).not.toBe('Blackbelt$')

})

test('Should login existing user',async() => {
   const response = await request(app).post('/users/login').send({
        email: 'ajaynair.76@gmail.com',
        password: 'Blackbelt$'
    }).expect(200)

const user = await User.findById(userOneId)
expect(response.body).toMatchObject({
    token: user.tokens[1].token
})

// Or the below way
expect(response.body.token).toBe(user.tokens[1].token)
})



test('Should not login nonexistent user', async () => {
    await request(app).post('/users/login').send({
        email: 'ajaynair.76@gmail.com',
        password: ''
    }).expect(400)
})

test('Should get user profile', async() => {
    await request(app)
    .get('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)
    
})

test('Should not get profile for user', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})

test('Should delete account for user', async () => {
  await request(app)
    .delete('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send()
    .expect(200)

    const user = await User.findById(userOneId)
expect(user).toBeNull()

})

test('Should not delete account for unauthenticated user', async () => {
    await request(app)
    .delete('/users/me')
    .send()
    .expect(401)
})

test('Should upload avatar image', async () => {
    await request(app)
    .post('/users/me/avatar')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .attach('avatar','/Users/dpthynair/NodeCourse1/task-manager/src/tests/fixtures/profile-pic.jpg')
    .expect(200)

    const user = await User.findById(userOneId)
    expect(user.avatar).toEqual(expect.any(Buffer))
})


test('Should update valid user fields', async () => {
    await request(app)
    .patch('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({
        name: 'Ajay Nair',
        
    })
    .expect(200)

    const user = await User.findById(userOneId)
    expect(user.name).toEqual('Ajay Nair')
})

test('Should not update invalid user fields', async () => {
    await request(app)
    .patch('/users/me')
    .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
    .send({
        
        location: 'Thane'
    })
    .expect(400)

    
})