import { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`

*{
    box-sizing: border-box;
}

body{
    padding: 0;
    margin: 0;
}

ul,li,ol{
    list-style: none;
    padding: 0;
}

a{
    text-decoration: none;
    color: inherit;
}

button{
    border: none;
    background-color: transparent;
    padding: 0;
}

img{
display: block;
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.anchor{
    cursor: pointer;
    transition: transform 0.3s ease;
}

.anchor:hover{
    transform: scale(1.1);
}

.anchor:active{
    transform: scale(0.95);
}
`;
export default Globalstyles;
