const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const { userOneId, userOne, setupDatabase} = require('./fixtures/db')


beforeEach(setupDatabase)

test('Should signup a new user', async () => {
    const response = await request(app).post('/users').send({
        name: 'Pedro',
        email: 'pedrogrcorreia@gmail.com',
        password: 'admin123'
    }).expect(201)

    // Assert db changed correctly
    const user = await User.findById(response.body.newUser._id)
    expect(user).not.toBeNull()

    // Assertions about the reponse
    expect(response.body).toMatchObject({
        newUser: {
            name: 'Pedro',
            email: 'pedrogrcorreia@gmail.com',
        }
    })

    expect(user.password).not.toBe('admin123')
})

test('Should login userOne', async () => {
    const response = await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)

    const user = await User.findById(response.body.user._id)

    expect(user.tokens[1].token).toBe(response.body.token)
})

test('Should not login nonexistent user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: 'password'
    }).expect(400)
})

test('Should get profile for user', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test('Should not get profile for not auth user', async () => {
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

test('Should not delete acc for non auth user', async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)
})

test('Should update avatar', async () => {
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .attach('avatar', 'tests/fixtures/me.png')
        .expect(200)
    
    const user = await User.findById(userOneId)

    expect(user.avatar).toEqual(expect.any(Buffer))
})

test('Should update user field', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name: 'Josefino'
        })
        .expect(200)

    const user = await User.findById(userOneId)

    expect(user.name).toEqual('Josefino')
})

test('Should not update user field', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            location: 'Josefino'
        })
        .expect(400)
})