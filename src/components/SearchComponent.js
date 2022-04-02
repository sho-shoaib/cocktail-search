import { Box } from "@mui/material";
import React from "react";
import { useGlobalContext } from "../Context";
import SearchIcon from "@mui/icons-material/Search";
import { Search, SearchIconWrapper, StyledInputBase } from "./SearchBar";
import { motion } from "framer-motion";

const SearchComponent = () => {
  const { setSearchTerm } = useGlobalContext();

  const searchCocktail = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Box
      className='mb-10 flex justify-center'
      component={motion.div}
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder='Search for cocktail…'
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => searchCocktail(e)}
        />
      </Search>
    </Box>
  );
};

export default SearchComponent;
