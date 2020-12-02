require('module-alias/register')
import express from 'express'
import { json } from 'body-parser'
import cors from 'cors'
import config from 'config'
import { graphqlHTTP } from 'express-graphql'

import { Employee, User } from '@models'
import { schema } from '@graphql'
import connectDB from '@db'

connectDB()

const app = express()

app.use(json())

app.use(cors())

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    context: {
        Employee,
        User
    }
}))


const PORT: number = config.get('app.port')

app.listen(
    PORT || 5000,
    (): void => console.log(`Server runs on port -- ${PORT}`)
)
