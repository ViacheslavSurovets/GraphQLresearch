import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLList
} from 'graphql'
import { GraphQLDateTime } from 'graphql-iso-date'
// import { RoleEnumType } from '@graphql/enums'
import { EmployeeType } from '@graphql/typeDefs'

const UserType:any = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        role: { type: GraphQLString },
        department: { type: GraphQLString },
        startDate: { type: GraphQLDateTime },
        createdDate: { type: GraphQLDateTime },
        employees: {
            type: new GraphQLList(EmployeeType),
            resolve({id}, args, {Employee}){
                return Employee.find({ userId: id })
            }
        }
    })
})

export default UserType
