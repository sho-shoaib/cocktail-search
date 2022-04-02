import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth='lg' className='pt-10 pb-10'>
      <Typography variant='h4' className='text-bold text-yellow-700 mb-5'>
        Error
      </Typography>
      <Typography variant='h6'>
        Oops! an error occured{" "}
        <Button className='text-base' onClick={() => navigate("/")}>
          Back to home
        </Button>
      </Typography>
    </Container>
  );
};

export default Error;
