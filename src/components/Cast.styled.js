import styled from "styled-components";


export const List = styled.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
column-gap: 5px;
row-gap: 15px;

> li{
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 5px;
>img{
  width: 150px;
}
  }

`
