import styled from "styled-components";
export const ContainerCart = styled.div`
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  background-color: green;
  border-radius: 5px;
  height: 350px;
  ul {
    list-style: none;
    margin: 10px 0 10px 0;
    padding: 0;
    li {
      font-size: 18px;
    }
  }
  img {
    width: 150px;
    height: 200px;
  }
`;
export const Title = styled.div`
  color: black;
  background-color: blue;
  margin: 10px;
  border-radius: 3px;
  color: black;
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Roboto", sans-serif;
    margin: 0;
    font-size: 70px;
    margin-right: 5px;
    color: white;
    font-weight: 100;
  }
`;
export const ContainerCartAdd = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  h1 {
    border-radius: 4px;
    color: white;
    font-weight: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
  }
  h2 {
    color: black;
    font-weight: 100;
  }
`;
export const CartEmpty = styled.span`
  color: black;
  font-family: "Roboto", sans-serif;
`;
export const ButtonEx = styled.button`
  border: 1px solid black;
  border-radius: 4px;
  font-family: "Comfortaa", cursive;
  width: 150px;
  height: 40px;
  :hover {
    background-color: red;
    color: white;
    transition: 0.2s;
  }
`;
