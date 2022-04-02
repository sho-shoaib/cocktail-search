import { Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Context";
import { Circles } from "react-loader-spinner";
import { Box } from "@mui/system";
import { motion } from "framer-motion";

const Cocktail = () => {
  const { id } = useParams();
  const { fetchDrinkById, cocktail, loading } = useGlobalContext();

  const {
    strDrinkThumb: image,
    strAlcoholic: alcoholic,
    strCategory: category,
    strDrink: name,
    strGlass: glass,
    strInstructions: instructions,
  } = cocktail;

  const rhs = [
    {
      n: "Name",
      v: name,
    },
    {
      n: "Category",
      v: category,
    },
    {
      n: "Glass",
      v: glass,
    },
    {
      n: "Type",
      v: alcoholic,
    },
    {
      n: "Instructions",
      v: instructions,
    },
  ];

  useEffect(() => {
    fetchDrinkById(id);
  }, [id]);

  console.log(cocktail);

  if (loading) {
    return (
      <Box className='flex justify-center mt-10'>
        <Circles
          color='rgb(161, 98, 7)'
          height={80}
          width={80}
          backgroundColor='rgb(161, 98, 7)'
        />
      </Box>
    );
  }

  return (
    <Container
      className='pb-10 pt-10'
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: { xs: "center", sm: "space-between" },
        alignItems: { xs: "center", sm: "flex-start" },
      }}
    >
      <Box
        component={motion.img}
        src={image}
        sx={{ width: { xs: "80%", sm: "40%" } }}
        className='rounded-md mb-10'
        initial={{ opacity: 0, x: 20 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.4,
          },
        }}
      />
      <Box
        sx={{ width: { xs: "80%", sm: "50%" } }}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.2,
          },
        }}
      >
        {rhs.map((item, i) => {
          return (
            <Typography variant='h6' className='mb-2'>
              <span className='font-bold text-yellow-900'>{item.n}: </span>
              <span className='ml-1'>{item.v}</span>
            </Typography>
          );
        })}
      </Box>
    </Container>
  );
};

export default Cocktail;
