/* eslint-disable no-use-before-define */
import React, { useState } from "react"
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function Grouped(props) {
  console.log('UnitSelect', props)
  const options = props.units.map((option) => {
    return {
      group: option.unit_type.toUpperCase(),
      groupPriority: option.unit_type_priority,
      ...option,
    };
  });

  return (
    <Autocomplete
      placeholder={props.placeholder}
      options={options.sort(compare)}
      groupBy={(option) => option.unit_type}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      value={props.activeUnit.name}
      renderInput={(params) => <TextField {...params} label={props.placeholder} variant="outlined" />}
    />
  );
}

function compare(a, b) {
  if (a.groupPriority < b.groupPriority)
    return -1;
  if (a.groupPriority > b.groupPriority)
    return 1;
  // a doit être égal à b
  return 0;
}