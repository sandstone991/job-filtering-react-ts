import React from "react";
import { StyledSearchItem } from "./styled/styled-search-item";
interface SearchItemProps {
  searchItem: string;
}
export const SearchItem: React.FC<SearchItemProps> = ({ searchItem }) => {
  return (
    <StyledSearchItem>
      <div>{searchItem}</div>
      <button className="button-search-item">X</button>
    </StyledSearchItem>
  );
};
