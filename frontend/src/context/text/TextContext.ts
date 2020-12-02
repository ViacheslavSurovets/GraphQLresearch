import { createContext } from 'react'

type ContextProps = {
  txt: {
    header: {
      mainTitle: String
    },
    'pages': {
      'employees': {
        'addEmployeeButton': 'Add Employee And Refetch'
      }
    }
    menu: {
      li: {
        instances: {
          title: String,
          ul: {
            employee: String,
            user: String
          }
        }
      }
    }
  }
}

const TextContext = createContext<Partial<ContextProps>>({})

export default TextContext
