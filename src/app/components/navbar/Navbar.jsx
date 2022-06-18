import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./navbar.css";
import NavLink from "../../utils/NavLink";
import LOGO from "../../assets/logo-light.png";
import BG from "../../assets/form-bg.png";
import { borderBottom } from "@mui/system";

function Navbar() {
  const [top, setTop] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      setTop(window.scrollY);
    });
  });

  console.log(top);

  return (
    <Box
      className="navbar"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: top < 50 ? "2rem 2.8rem" : "1rem 1rem",
        boxShadow: top > 50 ? "0 0px 2rem #00bbd49c" : "none",
      }}
    >
      <img src={LOGO} alt="LOGO" className="logo" />
      <Grid container spacing={3} sx={{ display: { xs: "none", md: "flex" } }}>
        <Grid item>
          <NavLink href="#header">Home</NavLink>
        </Grid>
        <Grid item>
          <NavLink href="#">About</NavLink>
        </Grid>
        <Grid item>
          <NavLink href="#">Courses</NavLink>
        </Grid>
        <Grid item>
          <NavLink href="#header">Testimonials</NavLink>
        </Grid>
        <Grid item>
          <NavLink href="#header">ContactUs</NavLink>
        </Grid>
      </Grid>
      {/* <img src={BG} className="header-bg" /> */}
    </Box>
  );
}

export default Navbar;
