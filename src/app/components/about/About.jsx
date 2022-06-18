import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import "./about.css";
import BG from "../../assets/about.png";

const data =
  "Aliquam gravida quam dui, venenatis suscipit erat dapibus eu. Donec non libero ultricies Cras convallis lacus orci. Tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero. Quisque ut metus sit amet augue rutrum feugiat.";

function About() {
  const desktop = useMediaQuery("(min-width: 600px)");
  return (
    <Box
      component={"section"}
      id="about"
      sx={{
        flexDirection: {
          md: "row",
          xs: "column-reverse",
        },
        alignItems: { xs: "center", md: "flex-start" },
      }}
    >
      <Box
        component={"div"}
        sx={{
          marginTop: { xs: "2rem", md: 0 },
        }}
      >
        <img
          src={BG}
          alt="AboutUs"
          style={{ width: desktop ? "auto" : "100vw" }}
        />
      </Box>
      <Box
        component={"div"}
        sx={{
          display: { md: "block", xs: "flex" },
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" className="header-title about-title">
          About Us
        </Typography>
        <Typography
          variant="body2"
          className="about-desc"
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          {data}
        </Typography>
      </Box>
    </Box>
  );
}

export default About;
