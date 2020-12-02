import { Schema, model } from 'mongoose'

const EmployeeSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String
    },
    department: {
        type: String
    },
    startDate: {
        type: Date
    },
    createdDate: {
        type: Date,
        default: Date.now()
    },
    userId: {
        type: String
    }
})

export default model('Employee', EmployeeSchema)
