import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1100px;
  background-color: white;
  justify-content: center;
  color: black;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding: 0;
    width: 250px;
    height: 300px;
    margin: 10px;
    border: 1px solid black;
    border-radius: 3px;
    background-color: lightblue;
  }
  li {
    font-size: 18px;
    padding: 2px;
  }
  img {
    width: 150px;
    height: 200px;
  }
  @media (min-width: 320px) and (max-width: 400px) {
    flex-direction: column;
    width: auto;
  }
`;
export const Button = styled.button`
  border: 1px solid black;
  border-radius: 4px;
  font-family: "Comfortaa", cursive;
  width: 150px;
  height: 40px;
  :hover {
    background-color: green;
    color: white;
    transition: 0.2s;
  }
`;
