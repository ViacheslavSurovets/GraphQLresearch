import { GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList, GraphQLNonNull } from 'graphql'
import { UserType, EmployeeType } from '@graphql/typeDefs'


const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        employee: {
            type: EmployeeType,
            args: { id: { type: GraphQLID } },
            resolve(parent, { id }, { Employee }) {
                return Employee.findById(id)
            }
        },

        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, { id }, { User }) {
                return User.findById(id)
            }
        },

        employees: {
            type: new GraphQLList(EmployeeType),
            args: { department: { type: GraphQLString } },
            resolve(parent, { department }, { Employee }) {
                return Employee.find({})
            }
        },

        users: {
            type: new GraphQLList(UserType),
            args: { department: { type: GraphQLString } },
            resolve(parent, { department }, { User }) {
                return User.find({})
            }
        }
    }
})

const RootMutation = new GraphQLObjectType({
        name: 'RootMutation',
        fields: {
            addEmployee: {
                type: EmployeeType,
                args: {
                    firstName: { type: GraphQLString },
                    lastName: { type: GraphQLString },
                    email: { type: GraphQLString }
                },
                resolve(parent, { firstName, lastName, email }, { Employee }) {
                    let employee = new Employee({
                        firstName,
                        lastName,
                        email
                    })
                    return employee.save()
                }
            },

            addUser: {
                type: UserType,
                args: {
                    firstName: { type: new GraphQLNonNull(GraphQLString) },
                    lastName: { type: new GraphQLNonNull(GraphQLString) },
                    password: { type: new GraphQLNonNull(GraphQLString) },
                    email: { type: new GraphQLNonNull(GraphQLString) }
                },
                resolve(parent, { firstName, lastName, password, email }, { User }) {
                    const user = new User({
                        firstName,
                        lastName,
                        password,
                        email
                    })
                    return user.save()
                },
            },

            deleteEmployee: {
                type: EmployeeType,
                args: { id: { type: GraphQLID } },
                resolve(parent, { id }, { Employee }) {
                  console.log(id)
                    return Employee.findByIdAndRemove(id)
                }
            },

            deleteUser: {
                type: UserType,
                args: { id: { type: GraphQLID } },
                resolve(parent, { id }, { User }) {
                    return User.findByIdAndRemove(id)
                }
            },

            updateEmployee: {
                type: EmployeeType,
                args: {
                    id: { type: GraphQLID },
                    firstName: { type: GraphQLString },
                    lastName: { type: GraphQLString },
                    email: { type: GraphQLString },
                    userId: { type: GraphQLID }
                },
                resolve(parent, { id, firstName, lastName, email, userId }, { Employee }) {
                    return Employee.findByIdAndUpdate(
                        id,
                        { $set: { firstName, lastName, email, userId } },
                        { new: true },
                    )
                },
            },

            updateUser: {
                type: UserType,
                args: {
                    id: { type: GraphQLID },
                    firstName: { type: GraphQLString },
                    lastName: { type: GraphQLString },
                    password: { type: GraphQLString },
                    email: { type: GraphQLString }
                },
                resolve(parent, { id, firstName, lastName, password, email }, { User }) {
                    return User.findByIdAndUpdate(
                        id,
                        { $set: { firstName, lastName, password, email } },
                        { new: true },
                    )
                }
            }
        }
    }
)


export default new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation
})

