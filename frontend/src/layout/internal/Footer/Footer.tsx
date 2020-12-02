import React, { FC } from 'react'
import { MailOutlined } from '@ant-design/icons'

import { FooterContainer, FooterContainerWrapper, FooterInfo, SendEmailLink } from './styles'

const Footer: FC = (props: any) => (
  <FooterContainerWrapper>
    <FooterContainer>
      <FooterInfo>
        <span>&#169; Exposit  2020</span>
      </FooterInfo>
      <FooterInfo>
        <SendEmailLink href="mailto:viacheslav.suravets@exposit.com">
          <MailOutlined style={ {fontSize: '2.5rem', color: 'darkGray'} }/>
        </SendEmailLink>
      </FooterInfo>
    </FooterContainer>
  </FooterContainerWrapper>
)

export default Footer
