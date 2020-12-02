import { createContext } from 'react'

type ContextProps = {

}

const alertContext = createContext<Partial<ContextProps>>({})

export default alertContext