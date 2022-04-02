import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <Container maxWidth='lg' className='pt-10 pb-10'>
      <Typography
        variant='h4'
        className='font-bold mb-5 text-yellow-700'
        component={motion.h4}
        initial={{ opacity: 0, x: 20 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.3,
          },
        }}
      >
        About us
      </Typography>
      <Typography
        component={motion.p}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.2,
          },
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quasi
        illum eum quia aspernatur libero distinctio rerum dolorum commodi iusto,
        quas tempora hic perspiciatis sed, reiciendis fuga, molestiae inventore
        eos dolorem. <br /> Lorem ipsum dolor sit amet consectetur adipisicing.{" "}
        <br /> Molestiae sint vero totam quaerat sunt expedita laboriosam
        voluptatibus perferendis, doloribus, in facere, veniam dolorum
        recusandae corrupti aut quia eaque pariatur nisi? <br /> Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. A magni possimus, iusto
        dolorum eos laudantium, fuga quaerat, iste necessitatibus mollitia vel
        error dicta. <br /> Accusantium sequi rerum, tenetur non quaerat
        molestiae.
      </Typography>
    </Container>
  );
};

export default About;
