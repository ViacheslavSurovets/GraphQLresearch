import { gql } from "@apollo/client"

const GET_EMPLOYEES_QUERY = gql`
  {
    employees{
      id,
      lastName,
      email,
      department
    }
  }
`

const DELETE_EMPLOYEE = gql`
  mutation DeleteEmployee($id: ID) {
    deleteEmployee(id: $id) {
      id
    }
  }
`

const ADD_EMPLOYEE = gql`
  mutation AddEmployee( $email: String!, $firstName: String!, $lastName: String ){
    addEmployee(email: $email, firstName: $firstName, lastName: $lastName){
      email,
      firstName,
      lastName
    }
  }
`

const UPDATE_EMPLOYEE = gql`
  mutation UpdateEmployee($id: ID, $email: String, $firstName: String, $lastName: String) {
    updateEmployee(id: $id, firstName: $firstName, email: $email, lastName: $lastName ) {
      id,
      firstName,
      lastName,
      email
    }
  }
`;

const GET_EMPLOYEE_QUERY = gql`
  {
    employee(id: "5fc0034dd611632858cc0f5d"){
      lastName,
      id
    }
  }
`

export default { GET_EMPLOYEES_QUERY, ADD_EMPLOYEE, GET_EMPLOYEE_QUERY, DELETE_EMPLOYEE, UPDATE_EMPLOYEE }
