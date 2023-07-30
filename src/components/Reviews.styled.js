import styled from "styled-components";


export const List = styled.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
column-gap: 60px;
row-gap: 15px;

> li{
  border: 1px solid white;
  width: 450px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 200px;
  overflow-y: scroll;

  }

`
