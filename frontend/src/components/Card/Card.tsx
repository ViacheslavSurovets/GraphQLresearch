import React, { useState } from 'react'
import { Button, Input, Card as AntCard } from 'antd'
import { DeleteOutlined, SettingOutlined, RollbackOutlined, CheckOutlined } from '@ant-design/icons'

import { CardWrapper } from '@pages/Employee/styled'
import { useMutation } from '@apollo/client'
import { employeeRequests as e_r } from '@requests'

const { Meta } = AntCard


const Card = ({ item, refetch }: any) => {
  const [deleteEmployee] = useMutation(e_r.DELETE_EMPLOYEE)
  const [updateEmployee] = useMutation(e_r.UPDATE_EMPLOYEE)

  const [update, setUpdate] = useState({
    id: '',
    email: '',
    firstName: '',
    lastName: ''
  })
  const [updateButton, setUpdateButton] = useState(false)

  const handleDelete = async (id: any) => {
    await deleteEmployee({
      variables: { id }
    })
    await refetch()
  }

  const preUpdate = async ({ id, firstName, lastName, email }: any) => {
    await setUpdateButton(!updateButton)
    await setUpdate({
      id, firstName, lastName, email
    })
  }

  const handleUpdate = async () => {
    const { id, firstName, lastName, email } = update
    console.log(id, 'id')
    console.log(firstName, 'firstName')
    console.log(lastName, 'lastName')
    console.log(email, 'email')

    await updateEmployee({
      variables: { id, firstName, lastName, email }
    })

    setUpdateButton(!updateButton)
    await refetch()
  }

  const moveBack = () => {
    setUpdateButton(!updateButton)
  }

  const handleChange = (event: any) => {
    const { name, value } = event.target
    setUpdate({ ...update, [name]: value })
  }

  const { id, lastName, firstName, email, department } = item
  return (
    <CardWrapper>
      <AntCard title='Some title' extra={
        <>
          { updateButton ?
            <>
              <Button
                type="primary"
                style={ { background: "green", borderColor: "green", marginLeft: ".5rem" } }
                icon={ <CheckOutlined/> }
                onClick={ () => handleUpdate() }
              />
              <Button
                type="primary"
                style={ { background: "blue", borderColor: "blue", marginLeft: ".5rem" } }
                icon={ <RollbackOutlined/> }
                onClick={ () => moveBack() }
              />
            </>
            :
            <Button
              type="ghost"
              style={ { background: "gray", borderColor: "gray" } }
              icon={ <SettingOutlined/> }
              onClick={ () => preUpdate({ id, firstName, lastName, email }) }
            />
          }
          <Button
            type="primary"
            style={ { background: "red", borderColor: "tomato", marginLeft: ".5rem" } }
            icon={ <DeleteOutlined/> }
            onClick={ () => handleDelete(id) }
          />
        </>
      } style={ { width: 300 } }>
        <p>{ id }</p>
        { !updateButton ?
          <p>{ lastName }</p>
          :
          <Input placeholder="Last Name" onChange={ handleChange } name='lastName' value={ update.lastName }/> }
        { !updateButton
          ?
          <p>{ email }</p>
          :
          <Input placeholder="email" onChange={ handleChange } name='email' value={ update.email }/> }
        { !updateButton ?
          <p>{ department }</p>
          :
          <Input placeholder="firstName" onChange={ handleChange } name='firstName' value={ update.firstName }/> }
        <Meta title="Employee" description={ email }/>
      </AntCard>
    </CardWrapper>
  )
}

export default Card