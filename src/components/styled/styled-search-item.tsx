import styled from "styled-components";
export const StyledSearchItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 600;
  gap: 0px;
  color: rgb(91, 171, 171);
  font-size: 15px;
  margin-left: 1%;
  margin-right: 1%;
  font-size: 15px;
  padding: 0 0px 0 10px;
  text-align: right;
  background-color: hsl(180, 52%, 96%);
  border-radius: 5px;
  border: 0px solid black;
  height: 50%;
  .button-search-item {
    background-color: rgb(91, 164, 164);
    padding-left: 0.5vw;
    padding-right: 0.5vw;
    border-radius: 0px 5px 5px 0px;
    margin-left: 1vw;
    flex-grow: 2;
    text-align: left;
    color: white !important;
    border: 0px solid black;
    height: 100%;
    :hover {
      background-color: hsl(180, 14%, 20%);
      text-decoration: none;
    }
  }
  div {
    flex-grow: 4;
  }
`;
