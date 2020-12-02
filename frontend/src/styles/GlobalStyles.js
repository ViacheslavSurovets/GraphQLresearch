import { createGlobalStyle } from 'styled-components'
import 'antd/dist/antd.css';

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
    font-family: 'Open Sans', sans-serif;
}

body {
    font-size: 1.6rem;
    position: relative;
}

body, html {
    height: 100%;
    max-height: 100%;
}


#root {
    height: 100%;
}

::-webkit-scrollbar { width: 10px; height: 10px;}
::-webkit-scrollbar-track-piece { background-color: #ffffff;}
::-webkit-scrollbar-thumb { height: 50px; background-color: ${ ( { theme } ) => theme.gray }; border-radius: 2px;}
`
