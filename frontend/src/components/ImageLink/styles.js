import styled, { keyframes } from 'styled-components'

const linkKeyframe = keyframes`
 
  0%{
    transform: rotate(-5deg) scale(1.1);
  //transform: rotate(-100deg) scale(1.1);
  }
  40%{
    transform: rotate(10deg) scale(1.12)
  }
  
  100% {}
`

export const Link = styled.a`
  width: ${ props => props.width }rem;
  height: ${ props => props.height }rem; 
  text-decoration: none;
  background-size:  cover;
  background-repeat: no-repeat;
  background-image: url(${ props => props.background });
  cursor:pointer;
  transition: all 1s;
  &:hover {
    transform: scale(1.1);
    transition: all 1s;
  }
  
  &:active {
     animation: ${ linkKeyframe } .5s cubic-bezier(0.5, 0, 0.5, 1);
  }
`
