import React, { FC } from 'react'
import { gql } from '@apollo/client'

const User: FC = () => {
  const getUsersQuery = gql`
      {
          user(id: "5fc0034dd611632858cc0f5d"){
              lastName,
              id
          }
      }
  `

    return (
        <h1>User</h1>
    )
}

export default User
