import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const marks = [
  {
    value: 10,
    label: '10HP',
  },
  {
    value: 15,
    label: '15HP',
  },
  {
    value: 20,
    label: '20HP',
  },
  {
    value: 40,
    label: '40HP',
  },
];

function valuetext(value) {
  return `${value}HP`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        defaultValue={10}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        max={40}
        marks={marks}
      />
    </div>
  );
}
