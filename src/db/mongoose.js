const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser:true,
})



// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     }, 
//     completed: {
//         type: Boolean,
//         required: false,
//         default: false
//     }
// })

// // const me = new User({
// //     name: '    Pedro    ',
// //     email: 'PEDROGRCORREIA@GMAIL.COM',
// //     password: 'password13'
// // })

// // me.save().then(() => {
// //     console.log(me)
// // }).catch((error) => {
// //     console.log('Error!', error)
// // })

// const task = new Task({
//     description: 'Fazer a cama',
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })