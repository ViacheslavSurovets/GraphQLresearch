import React, { FC } from 'react'
import { Spin } from 'antd'

import { SuspenseComponentWrapper } from './styles'

const SuspenseSpinner: FC = (props: any) => (
  <SuspenseComponentWrapper>
    <Spin tip='loading' size={ 'large' }/>
  </SuspenseComponentWrapper>
)

export default SuspenseSpinner