import React from 'react'
import ReactDOM from 'react-dom'
import { Root } from './Root'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider as StyledComponentsProvider } from 'styled-components'

import GlobalStyles from '@styles/GlobalStyles'
import theme from '@utils/theme'

import { TextProvider } from '@context'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
  connectToDevTools: true
})

ReactDOM.render(
  <ApolloProvider client={ client }>
    <TextProvider>
      <Router>
        <StyledComponentsProvider theme={ theme }>
          <GlobalStyles/>
          <Root/>
        </StyledComponentsProvider>
      </Router>
    </TextProvider>
  </ApolloProvider>
  , document.getElementById('root')
)
