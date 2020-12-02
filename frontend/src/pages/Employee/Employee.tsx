import React, { FC, useState, Fragment, useContext } from 'react'
import { useMutation, useQuery } from '@apollo/client'
import {  Spin, Button } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import { Card } from '@components'
import { employeeRequests as e_r } from '@graphql/requests'
import { Content } from './styled'
import { TextContext } from '@context'

const antIcon = <LoadingOutlined style={ { fontSize: 24 } } spin/>


const Employee: FC = (props: any) => {
  const { loading, error, data, refetch } = useQuery(e_r.GET_EMPLOYEES_QUERY)
  const [addEmployee] = useMutation(e_r.ADD_EMPLOYEE)
  const { txt } = useContext( TextContext )
  const [newEmployee, setNewEmployee] = useState({
    email: 'sssssss',
    firstName: 'sssssssss',
    lastName: 'ssssssssssssssssss'
  })

  console.log(data)
  
  if (loading) return <Spin indicator={ antIcon }/>
  if (error) return <p>Error :(</p>


  const employeeAdd = async () => {
    const { email, firstName, lastName } = newEmployee
    await addEmployee({
      variables: { email, firstName, lastName }
    })
    await refetch()
  }
  
  // const updateEmployee = (item:any) => {
  //   const { email, firstName, lastName, showInputs } = item
  //   item.showInputs = true
  //   setEmployee({
  //     email,
  //     firstName,
  //     lastName,
  //     updateSettings: !employee.updateSettings
  //   })
  //   console.log(item)
  // }
  
  return (
    <article>
      <h1>Employee</h1>
      <Content>
        { data && data.employees.map((item: any, idx: any) =>
          <Fragment key={idx}>
          <Card
            item={item}
            refetch={refetch}
          />
          </Fragment>
        )
        }
      </Content>

      <Button type="primary" onClick={ () => employeeAdd() }>{txt?.pages.employees.addEmployeeButton}</Button>
    </article>
  )
}

export default Employee
