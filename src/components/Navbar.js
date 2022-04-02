import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import WineBarIcon from "@mui/icons-material/WineBar";
import Container from "@mui/material/Container";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarMenu from "./NavbarMenu";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

const navOpt = ["Home", "About"];

export default function Navbar(props) {
  const navigate = useNavigate();

  const handleNav = (page) => {
    if (page === "Home") {
      navigate("/");
    } else if (page === "About") {
      navigate("/about");
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar className='bg-gray-100'>
            <Container maxWidth='lg' className='flex justify-between'>
              <Box
                className='h-10 w-11 bg-yellow-400 rounded relative mr-5 xs:h-11 xs:w-12 text-black cursor-pointer'
                onClick={() => handleNav("Home")}
              >
                <WineBarIcon className='absolute right-0 bottom-0.5' />
              </Box>
              <Box className='flex items-end text-black gap-10'>
                {navOpt.map((item, i) => {
                  return (
                    <Typography
                      key={i}
                      className='hidden border-y-2 border-transparent hover:border-yellow-400 linear duration-100 cursor-pointer xs:inline-block'
                      onClick={() => handleNav(item)}
                      variant='h6'
                    >
                      {item}
                    </Typography>
                  );
                })}
              </Box>
              <NavbarMenu />
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
