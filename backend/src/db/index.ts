import mongoose from 'mongoose'
import config from 'config';

const connectDB = async () => {
    const conn = await mongoose.connect(config.get('db.mongo_uri'), {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        // useFindAndModify: false
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
}

export default connectDB
