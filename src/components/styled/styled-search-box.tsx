import styled from "styled-components";
interface StyledSearchItemProps {
  suggestedItem: string | undefined;
}
export const StyledSearchBox = styled.div<StyledSearchItemProps>`
  width: 70vw;
  height: 7.5vh;
  background-color: white;
  border: 0px solid black;
  border-radius: 7.5px;
  margin: 0 auto;
  margin-top: 8vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 1vw 1vh;
  box-shadow: -1px 14px 38px -11px rgba(0, 0, 0, 0.47);
  -webkit-box-shadow: -1px 14px 38px -11px rgba(0, 0, 0, 0.47);
  -moz-box-shadow: -1px 14px 38px -11px rgba(0, 0, 0, 0.47);
  input {
    border-radius: 7.5px;
    height: 95%;
    width: 90%;
    outline: none;
    border: 0px solid black;
    margin-left: 1%;
  }
  .input-container {
    height: 95%;
    width: 90%;

    &:after {
      content: "";
      display: ${(props) => (props.suggestedItem ? "block" : "none")};
      content: ${(props) =>
        props.suggestedItem ? `'${props.suggestedItem}'` : '""'};
      background-color: #f9f9f9;
      width: fit-content;
      padding-left: 1vw;
      padding-right: 1vw;
      margin-top: 1vh;
      box-shadow: -1px 14px 38px -11px rgba(0, 0, 0, 0.47);
      -webkit-box-shadow: -1px 14px 38px -11px rgba(0, 0, 0, 0.47);
      -moz-box-shadow: -1px 14px 38px -11px rgba(0, 0, 0, 0.47);
    }
  }
  .search-box-button {
    padding: 5px;
    margin-left: 1%;
    margin-right: 1%;
    background-color: inherit;
    border: 0px solid black;
    font-size: 15px;
    color: #63baba;
    font-weight: 600;
    :hover {
      text-decoration: underline;
      color: #5ba4a4;
    }
  }
`;
