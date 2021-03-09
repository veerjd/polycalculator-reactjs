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

export default function HpSlider(props) {
export default function HpSlider({setActive, activeUnit}) {
  const classes = useStyles();

  console.log('HpSlider', props)

  return (
    <div className={classes.root}>
      <Slider
        className={classes.margin}
        track={false}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        value={props.activeUnit.currenthp}
        max={props.activeUnit.maxhp}
        marks={true}
        valueLabelDisplay="on"
      />
    </div>
  );
}