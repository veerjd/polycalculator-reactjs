import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

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

export default function HpSlider({setActive, activeUnit}) {
  const classes = useStyles();

  const sliderChange = (event, value) => {
    const updateActiveUnit = {...activeUnit, currenthp: value};
    setActive(updateActiveUnit);

  };

  return (
    <div className={classes.root}>
      <Slider
        className={classes.margin}
        track={false}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        value={activeUnit.currenthp}
        max={activeUnit.maxhp}
        marks={true}
        valueLabelDisplay="on"
        onChange={sliderChange}
      />
    </div>
  );
}