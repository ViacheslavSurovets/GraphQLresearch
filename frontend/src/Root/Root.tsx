import React, { Suspense } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { SuspenseSpinner } from '@components'
import { BaseLayout } from '@layout'
import { ContentWrapper } from './styles'


const lazy = (path: string) =>
  React.lazy(() => import(`@pages/${ path }`))


const Root = () => {
  return (
    <BaseLayout>
      <ContentWrapper>
        <Suspense fallback={ <SuspenseSpinner/> }>
          <Switch>
            <Route exact path='/'>
              <Redirect to='home'/>
            </Route>
            <Route exact path='/home' component={ lazy('Home') }/>
            <Route exact path='/employees' component={ lazy('Employee') }/>
            <Route exact path='/users' component={ lazy('User') }/>
          </Switch>
        </Suspense>
      </ContentWrapper>
    </BaseLayout>
  )
}

export default Root
