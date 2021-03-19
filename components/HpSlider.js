import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    paddingTop: theme.spacing(7),
  },
}));

function valuetext(value) {
  return `${value}hp`;
}

export default function HpSlider({ activeUnit, setActive }) {
  const classes = useStyles();

  const [hp, setHp] = useState(activeUnit.currenthp);

  const sliderChange = async (event, value) => {
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
        className={classes.margin}
        aria-labelledby="discrete-slider-always"
        value={hp}
        max={activeUnit.maxhp}
        marks={true}
        valueLabelDisplay="on"
        onChange={sliderChange}
      />
    </div>
  );
}
