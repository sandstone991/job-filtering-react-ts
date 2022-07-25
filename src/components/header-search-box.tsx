import { Header } from "./header";
import { SearchBox } from "./search-box";
import { StyledHeaderSearch } from "./styled/styled-header-search-box";
export const HeaderSearch = () => {
  return (
    <StyledHeaderSearch>
      <Header></Header>
      <SearchBox></SearchBox>
    </StyledHeaderSearch>
  );
};
