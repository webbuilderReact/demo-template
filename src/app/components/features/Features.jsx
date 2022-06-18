import { Box, Typography } from "@mui/material";
import React from "react";
import "./features.css";
import F1 from "../../assets/feature1.png";
import F2 from "../../assets/feature2.png";
import F3 from "../../assets/feature3.png";
import F4 from "../../assets/feature4.png";

function Features() {
  return (
    <Box component={"section"} id="features">
      <Box className="features__heading">
        <Typography variant="h3" className="header-title">
          Main Feature
        </Typography>
        <Typography variant="subtitle1" className="subtitle">
          Ut sed eros finibus, placerat orci id, dapibus mauris.
        </Typography>
      </Box>
      <Box className="features__content">
        <span>
          <div className="features__img">
            <img src={F1} alt="" />
          </div>
          <div className="features__item__content">
            <Typography variant="h4" className="item__heading">
              Main Feature
            </Typography>
            <Typography variant="subtitle1" className="item__subtitle">
              Ut sed eros finibus, placerat orci id, dapibus mauris.
            </Typography>
          </div>
        </span>
        <span>
          <div className="features__img">
            <img src={F2} alt="" />
          </div>
          <div className="features__item__content">
            <Typography variant="h4" className="item__heading">
              Main Feature
            </Typography>
            <Typography variant="subtitle1" className="item__subtitle">
              Ut sed eros finibus, placerat orci id, dapibus mauris.
            </Typography>
          </div>
        </span>
        <span>
          <div className="features__img">
            <img src={F3} alt="" />
          </div>
          <div className="features__item__content">
            <Typography variant="h4" className="item__heading">
              Main Feature
            </Typography>
            <Typography variant="subtitle1" className="item__subtitle">
              Ut sed eros finibus, placerat orci id, dapibus mauris.
            </Typography>
          </div>
        </span>
        <span>
          <div className="features__img">
            <img src={F4} alt="" />
          </div>
          <div className="features__item__content">
            <Typography variant="h4" className="item__heading">
              Main Feature
            </Typography>
            <Typography variant="subtitle1" className="item__subtitle">
              Ut sed eros finibus, placerat orci id, dapibus mauris.
            </Typography>
          </div>
        </span>
      </Box>
    </Box>
  );
}

export default Features;
