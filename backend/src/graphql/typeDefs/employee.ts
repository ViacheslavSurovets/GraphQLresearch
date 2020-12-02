import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
} from 'graphql'
import { GraphQLDateTime } from 'graphql-iso-date'
import UserType from '@graphql/typeDefs/user'


const EmployeeType = new GraphQLObjectType({
    name: 'Employee',
    fields: () => ({
        id: { type: GraphQLID },
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        department: { type: GraphQLString },
        startDate: { type: GraphQLDateTime },
        createdDate: { type: GraphQLDateTime },
        currentSalary: { type: GraphQLString },
        user: {
            type: UserType,
            resolve({ userId }, args, { User }) {
                return User.findById(userId)
            }
        }
    }),
})

export default EmployeeType
