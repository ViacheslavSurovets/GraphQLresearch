import { GraphQLEnumType } from 'graphql'
import { ROLES } from '@constants/index'
const { USER, ADMIN} = ROLES


export const RoleEnumType = new GraphQLEnumType({
    name: 'TaskStateEnum',
    values: {
        "admin":{
           value: ADMIN
       },
        "USER": {
           value: USER
        }
    }
})

