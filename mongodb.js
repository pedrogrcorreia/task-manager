// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const client = new MongoClient(connectionURL, { useNewUrlParser: true });

const db = client.db(databaseName)
    
const update = db.collection('users').updateOne({
    _id: new mongodb.ObjectId("64134356bb1a0caea2558c47")
}, {
    $set: {
        name: 'Mike'
    }
})

update.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})
// const find = async () => {
//     const user = await db.collection('users').findOne({name: 'Jen'});
//     console.log(user)
// }

// find()