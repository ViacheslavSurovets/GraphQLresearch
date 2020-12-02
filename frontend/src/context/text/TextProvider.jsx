import React from 'react'

import { TEXT_DATA } from '@locales'
import TextContext from './TextContext'

const TextProvider = ( { children } ) => {
  return (
    <TextContext.Provider value={ { txt: TEXT_DATA.data } }>
      { children }
    </TextContext.Provider>
  )
}

export default TextProvider