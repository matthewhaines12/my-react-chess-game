import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const SliderExample = () => {
  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Difficulty"
        defaultValue={30}
        getAriaValueText={valuetext}
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
