import React, { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const urlDrink = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);
  const [cocktail, setCocktail] = useState({});

  const fetchDrinks = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${url}${searchTerm}`);
      const { data } = res;
      if (data.drinks) {
        setCocktails(res.data.drinks);
      } else {
        setCocktails([]);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const fetchDrinkById = async (id) => {
    setLoading(true);
    try {
      const res = await axios.get(`${urlDrink}${id}`);
      if (res) {
        setCocktail(res.data.drinks[0]);
      } else {
        setCocktail({});
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        loading,
        searchTerm,
        setSearchTerm,
        cocktails,
        fetchDrinkById,
        cocktail,
        setCocktail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
