/* eslint-disable no-use-before-define */
import React, { useState } from "react"
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Divider } from "@material-ui/core";

export default function Select({ id, placeholder, units, activeUnit, setActive }) {

  const unitChange = (event, value) => {
    const updateActiveUnit = units.filter(unit => unit.name === value)[0];
    console.log('DROPDOWN, updateActiveUnit:', updateActiveUnit)
    if (updateActiveUnit)
      setActive(updateActiveUnit);
  };

  return (
    <div>
      <div>{`value: ${activeUnit.code}`}</div>
      <div>{`inputValue: '${activeUnit.name}'`}</div>

      <Autocomplete
        id={id}
        options={units.sort(compare)}
        groupBy={(unit) => unit.unit_type}
        getOptionLabel={(option) => option.name}
        defaultValue={units[0]}
        getOptionSelected={(option, value) => {
          return option.name === value.name
        }}
        onChange={unitChange}
        value={activeUnit}
        onInputChange={unitChange}
        inputValue={activeUnit.name}
        renderInput={(params) => <TextField {...params} label={placeholder} variant="outlined" />}
      />
    </div>
  );
}

function compare(a, b) {
  if (a.unit_type_priority < b.unit_type_priority)
    return -1;
  if (a.unit_type_priority > b.unit_type_priority)
    return 1;

  return 0;
}