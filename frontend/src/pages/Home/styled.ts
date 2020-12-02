import styled, { css } from 'styled-components'

import { ExpositLogo as logo } from '@assets'

const logoStyles = css`
display: flex;
background-image: url(${ logo });
background-repeat: no-repeat;
background-size: 100% 100% ;
cursor: pointer;
`

export const Logo = styled.div`
    ${ logoStyles };
    height: 50vw;
    width: 95%;
    align-self: flex-end;
    margin-left: 2.5%;
`

