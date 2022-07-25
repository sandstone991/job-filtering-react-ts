import React from "react";
import { Header } from "./components/header";
import { SearchBox } from "./components/search-box";
import "./App.css";
import { HeaderSearch } from "./components/header-search-box";

const App: React.FC = () => {
  return (
    <div>
      <HeaderSearch></HeaderSearch>
    </div>
  );
};

export default App;
