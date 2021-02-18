/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import units from './util/allUnits'

export default function Grouped(props) {
  console.log(props)
  const options = Object.values(units).map((option) => {
    const group = option.group.toUpperCase();
    return {
      group: group,
      groupPriority: option.groupPriority,
      ...option,
    };
  });

  return (
    <Autocomplete
      options={options.sort(compare)}
      groupBy={(option) => option.group}
      getOptionLabel={(option) => option.name}
      style={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Attacker" variant="outlined" />}
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