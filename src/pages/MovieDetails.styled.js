import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Heading = styled.h1`
  font-weight: 300;
  text-transform: uppercase;
`
export const MovieContainer = styled.div`
margin-top: 20px;
display: flex;
gap: 30px;


>img{
  width: 300px;
}

>div{
  width: 600px;
  >p{
    font-size: 14px;
  }
}
`
export const HeadingSecondary = styled.h2`
font-weight: 300;
`
export const Genres = styled.ul`
list-style: none;
display: flex;
gap: 10px;
padding: 0;
align-items: flex-start;
>li{
  font-size: 14px;
}
`
export const List = styled.ul`
 list-style: none;
display: flex;
font-size: 20px;
gap: 10px;


>li{
  >a{
    text-decoration: none;
    color: #537FE7;
  }
}
`

export const Back = styled(NavLink)`
color: white;
text-decorations: none;
`
