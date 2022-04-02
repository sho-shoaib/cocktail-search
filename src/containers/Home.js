import { Container } from "@mui/material";
import React, { useEffect } from "react";
import CocktailView from "../components/CocktailView";
import SearchComponent from "../components/SearchComponent";
import { useGlobalContext } from "../Context";

const Home = () => {
  return (
    <Container maxWidth='lg' className='pt-10 pb-10'>
      <SearchComponent />
      <CocktailView />
    </Container>
  );
};

export default Home;
