import styled, { keyframes, css, StyledFunction } from 'styled-components'

export const HeaderContainer = styled.header`
  position: relative;
  box-shadow: 0 .5px 5px rgba(0,0,0,.5);
`

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 90%;
  height: 7rem;
`
const logoAnimation = keyframes`
0% {
    transform: rotate(0deg);
}
  100% {
    transform: rotate(360deg);
}
`

const animation = css`
    animation: ${ logoAnimation } 1s cubic-bezier(0.5, 0, 0.5, 1);
`


const setAnimation = (props: { animation: any }) => {
  if(props.animation) {
    return animation 
  }
  return
}

export const LogoWrapper = styled.div`
  margin-left: 2rem;
  ${setAnimation};
`

export const LogoText = styled.h1`
  cursor: pointer;  
`
