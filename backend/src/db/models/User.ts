import { Schema, model } from 'mongoose'
// import { ROLES } from '@constants'

// const { ADMIN, USER } = ROLES

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    department: {
        type: String
    },
    role: {
        type: String,
        // enum: [ USER, ADMIN ],
        // default: USER
    },
    startDate: {
        type: Date
    },
    createdDate: {
        type: Date,
        default: Date.now()
    }
})

export default model('User', UserSchema)
