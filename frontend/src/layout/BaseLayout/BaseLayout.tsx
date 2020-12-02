import React, { FC } from 'react'

import { Header, Footer, MenuBar } from '@layout/internal'
import { Main } from './styles'


const BaseLayout: FC = ({ children }:any) => (
    <>
        <Header/>
        <Main>
          <MenuBar />
          {children}
        </Main>
        <Footer/>
    </>
)

export default BaseLayout
