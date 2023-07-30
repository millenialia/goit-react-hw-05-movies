import styled from "styled-components";

export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;


>input{
  width: 300px;
  height: 40px;
  padding-left: 40px;
  border: none;
  border-bottom: 2px solid white;
  font-size: 20px;
  color: white;
  background-color: transparent;
  outline: transparent;

}

>input:focus{
  border: 2px solid white;
}

>button{
   width: 150px;
  height: 40px;
  font-size: 20px;
  color: white;
  background-color: transparent;
border: none;
cursor: pointer;
}
`

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

