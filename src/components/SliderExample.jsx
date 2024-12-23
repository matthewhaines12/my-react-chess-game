import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const SliderExample = ({ difficulty, handleSliderChange }) => {
  return (
    <Box sx={{ width: 500 }}>
      <Slider
        aria-label="Difficulty"
        defaultValue={1000}
        value={difficulty}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        shiftStep={30}
        step={100}
        marks
        min={100}
        max={2000}
      />
    </Box>
  );
};

export default SliderExample;
