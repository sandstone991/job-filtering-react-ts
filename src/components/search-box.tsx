import React, { useState } from "react";
import { SearchItem } from "./search-item";
import { StyledSearchBox } from "./styled/styled-search-box";
import { jobData, keyWords } from "../data/data";
interface SearchBoxState {
  input: string;
  suggestedKeyword: string | undefined;
  chosenKeywords: string[];
}
export const SearchBox = () => {
  const [state, setState] = useState<SearchBoxState>({
    input: "",
    suggestedKeyword: undefined,
    chosenKeywords: [],
  });
  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    let input = e.target.value;
    setState((prev) => ({ ...prev, input }));
    if (state.input.length >= 2) {
      let temp = keyWords.find((keyword) => {
        for (let i = 0; i < input.length && i < keyword.length; i++) {
          if (input[i].toLowerCase() !== keyword[i].toLowerCase()) return false;
        }
        if (state.chosenKeywords.includes(keyword)) return false;
        return true;
      });
      setState((prevState) => ({ ...prevState, suggestedKeyword: temp }));
      //   console.log(suggestedKeyword);
    }
  };
  const handleReset = (e: React.UIEvent) => {
    setState(() => ({
      input: "",
      suggestedKeyword: undefined,
      chosenKeywords: [],
    }));
  };
  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && typeof state.suggestedKeyword !== "undefined") {
      setState((prev) => ({
        input: "",
        chosenKeywords: [
          ...prev.chosenKeywords,
          prev.suggestedKeyword as string,
        ],
        suggestedKeyword: undefined,
      }));
    }
  };
  return (
    <div>
      <StyledSearchBox suggestedItem={state.suggestedKeyword}>
        {state.chosenKeywords.map((keyword) => (
          <SearchItem searchItem={keyword} key={keyword}></SearchItem>
        ))}
        <div className="input-container">
          <input
            value={state.input}
            onInput={handleInput}
            onKeyUp={handleSubmit}></input>
        </div>
        <button onClick={handleReset} className="search-box-button">
          Clear
        </button>
      </StyledSearchBox>
    </div>
  );
};
