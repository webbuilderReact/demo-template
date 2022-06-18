import { Box, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import "./explore.css";
import PIC from "../../assets/pic.jpg";
import { For, useClickOutside } from "react-haiku";
import { Rating } from "@mui/material";

const data = [
  {
    title: "Photoshop",
    img: PIC,
    description: "Pids ds daha sd ajdaosdasdad dasda.",
  },
  {
    title: "Photoshop",
    img: PIC,
    description: "Pids ds daha sd ajdaosdasdad dasda.",
  },
  {
    title: "Photoshop",
    img: PIC,
    description: "Pids ds daha sd ajdaosdasdad dasda.",
  },
  {
    title: "Photoshop",
    img: PIC,
    description: "Pids ds daha sd ajdaosdasdad dasda.",
  },
  {
    title: "Photoshop",
    img: PIC,
    description: "Pids ds daha sd ajdaosdasdad dasda.",
  },
];

const colors = [
  "FF6F00",
  "FF8374",
  "B45A1B",
  "FFB300",
  "C583FF",
  "00A8FF",
  "6DB4A7",
  "308598",
];

const ExploreCard = ({
  title,
  img,
  description,
  color,
  open,
  onClick,
  handleOutside,
}) => {
  const ref = useRef(null);

  useClickOutside(ref, handleOutside);
  return (
    <div
      onClick={onClick}
      className={
        open ? "explore-course-wrapper card-open" : "explore-course-wrapper"
      }
      style={{
        borderColor: color,
        transform: { md: "rotate(-10deg)", xs: "rotate(-90deg)" },
      }}
    >
      <div className="explore-course-title" style={{ backgroundColor: color }}>
        {title}
      </div>
      <div className="explore-course-card">
        <img src={img} className="explore-card-img" alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem 0rem",
          }}
        >
          <div style={{ flex: 1 }}>
            <Typography variant="h6" className="explore-card-heading">
              {title}
            </Typography>
            <Typography variant="body2" className="explore-card-body">
              {description}
            </Typography>
          </div>
          <div
            className="card-content-bottom"
            style={{ justifySelf: "flex-end" }}
          >
            <Rating name="read-only" value={3.8} readOnly precision={0.1} />
            <Typography
              variant="caption"
              style={{ fontWeight: "bold", fontSize: "1.5rem", opacity: 0.9 }}
            >
              $ 450
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExploreCourse = ({ heading, data }) => {
  const [open, setOpen] = useState(-1);

  return (
    <div>
      <Typography
        variant="h5"
        className=""
        sx={{ opacity: 0.8, fontWeight: "bold" }}
      >
        {heading}
      </Typography>
      <Box
        sx={{ flexDirection: { md: "row", xs: "row" } }}
        className="explore-course-container"
      >
        <For
          each={data}
          render={(item, index) => (
            <ExploreCard
              handleOutside={() => setOpen(-1)}
              key={index}
              title={item.title}
              img={item.img}
              description={item.description}
              color={"#" + colors[index % colors.length]}
              onClick={() => setOpen(index)}
              open={index == open}
            />
          )}
        />
      </Box>
    </div>
  );
};

function Explore() {
  return (
    <section id="explore">
      <Box className="section-header">
        <Typography variant="h4" className="section-title">
          Explore Course
        </Typography>
        <Typography variant="subtitle1" className="subtitle">
          Ut sed eros finibus, placerat orci id, dapibus.
        </Typography>
      </Box>
      <div className="explore-wrapper">
        <ExploreCourse heading={"Photography"} data={data} />
      </div>
    </section>
  );
}

export default Explore;
