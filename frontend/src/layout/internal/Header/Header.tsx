import React, { useContext, FC, useState } from 'react'
import { useHistory } from 'react-router-dom'

import { TextContext } from '@context'
import { GraphLogo } from '@icons'
import {
  HeaderContainer,
  LogoWrapper,
  ContentWrapper,
  LogoText
} from '@layoutComponents/Header/styles'


const Header: FC = ( props: any ) => {
  const { txt } = useContext( TextContext )
  const history = useHistory()
  // const logoRef = useRef < HTMLDivElement > (null)
  const [ animation, setAnimation ] = useState( {
    focus: false
  } )

//TODO
  // const handleClick = () => {
  //   history.push('/home')
  //   console.log(logoRef.current)
  //   // @ts-ignore
  //   logoRef.current.focus()
  //   const interval = setInterval(() => {
  //      return   logoRef.current!.focus()
  //   }, 5000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }
  //

  const handleClick = async () => {
    setAnimation( { ...animation, focus: true } )
    history.push( '/home' )
    await setTimeout( () => {
      setAnimation( { ...animation, focus: false } )
    }, 1000 )
  }
  
  return (
    <HeaderContainer>
      <ContentWrapper>
        <LogoText onClick={ handleClick }>{ txt!.header.mainTitle }</LogoText>
        {/*@ts-ignore*/}
        <LogoWrapper animation={ animation.focus }>
          <GraphLogo/>
        </LogoWrapper>
      </ContentWrapper>
    </HeaderContainer>
  )
}

export default Header
