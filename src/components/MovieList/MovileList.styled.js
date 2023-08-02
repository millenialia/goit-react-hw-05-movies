import styled from "styled-components";

export const List = styled.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
column-gap: 5px;
row-gap: 15px;
justify-content: center;
> li{
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  >a{
  width: 250px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: none;
  color: white;
  >img{
    width: 250px;
    border-radius: 18px;
  }
  }


}

`

