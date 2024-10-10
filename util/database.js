import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://admin:test1234@boilerplate.v3hxs.mongodb.net/'
const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }

const client = await MongoClient.connect('mongodb+srv://admin:test1234@boilerplate.v3hxs.mongodb.net/', { useNewUrlParser: true })

export {connect}