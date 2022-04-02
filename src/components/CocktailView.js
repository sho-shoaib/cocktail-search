import { Box } from "@mui/system";
import React from "react";
import { useGlobalContext } from "../Context";
import { Circles } from "react-loader-spinner";
import { Grid, Typography } from "@mui/material";
import CocktailCard from "./CocktailCard";
import { motion } from "framer-motion";

const CocktailView = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return (
      <Box className='flex justify-center'>
        <Circles
          color='rgb(161, 98, 7)'
          height={80}
          width={80}
          backgroundColor='rgb(161, 98, 7)'
        />
      </Box>
    );
  }

  if (cocktails.length < 1) {
    return (
      <Typography
        variant='h5'
        className='text-center text-3xl font-bold text-yellow-700'
      >
        No cocktails matched your search
      </Typography>
    );
  }

  return (
    <Box>
      <Typography
        variant='h4'
        className='font-bold mb-5 text-yellow-700 text-center'
        component={motion.h4}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.4 } }}
      >
        Cocktails
      </Typography>
      <Grid
        container
        component={motion.div}
        animate={{
          transition: {
            staggerChildren: 0.5,
          },
        }}
      >
        {cocktails.map((item, i) => {
          return <CocktailCard key={i} {...item} i={i} />;
        })}
      </Grid>
    </Box>
  );
};

export default CocktailView;
