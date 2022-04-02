import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CocktailCard = ({
  strDrinkThumb: image,
  strDrink: name,
  idDrink: id,
  strCategory: category,
  strAlcoholic: alcoholic,
  strGlass: glass,
  i,
}) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const navigate = useNavigate();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        x: 30,
      });
    }
  }, [inView]);

  return (
    <Grid
      component={motion.div}
      animate={animation}
      item
      xs={12}
      md={4}
      sm={6}
      className='p-3'
      ref={ref}
    >
      <Box
        component={motion.div}
        className='bg-white rounded-md p-5 pb-3 shadow-lg cursor-pointer'
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 1.01 }}
        onClick={() => navigate(`/drink/${id}`)}
      >
        <Box
          component={"img"}
          src={image}
          className='h-full w-full rounded-md mb-3'
        />
        <Typography
          variant='h6'
          className='text-center first-letter:text-3xl first-letter:font-medium mb-3'
        >
          {name}
        </Typography>
        <Stack direction='row' spacing={1} className='w-full truncate'>
          <Chip label={alcoholic} />
          <Chip label={category} />
          <Chip label={glass} />
        </Stack>
      </Box>
    </Grid>
  );
};

export default CocktailCard;
