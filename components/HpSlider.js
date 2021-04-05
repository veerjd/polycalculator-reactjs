import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  padding: {
    paddingTop: theme.spacing(7),
  },
}));

export default function HpSlider({ activeUnit, setActive, hp, setHp }) {
  const classes = useStyles();

  const sliderChange = async (event, value) => {
    console.log(setHp)
    if (value) setHp(value);
    const updateActiveUnit = { ...activeUnit, currenthp: value };
    if (updateActiveUnit) await setActive(updateActiveUnit);
  };

  const valuetext = (value, index) => {
    value = `${value}hp`;
  };

  return (
    <div className={classes.root}>
      <Slider
        className={classes.padding}
        // aria-labelledby="discrete-slider-always"
        value={hp}
        max={activeUnit.maxhp}
        marks={true}
        valueLabelDisplay="on"
        onChange={sliderChange}
      />
    </div>
  );
}
