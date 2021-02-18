import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const marks = [
  {
    value: 10,
    label: '10hp',
  },
  {
    value: 15,
    label: '15hp',
  },
  {
    value: 20,
    label: '20hp',
  },
  {
    value: 40,
    label: '40hp',
  },
];

function valuetext(value) {
  return `${value}hp`;
}

export default function TrackFalseSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Slider
        track={false}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        defaultValue={[10, 10]}
        max={40}
        marks={marks}
        valueLabelDisplay="on"
      />
    </div>
  );
}