/* eslint-disable no-unused-vars no-def no-lone-blocks */
// import logo from './logo.png'
import UnitSelect from '../UnitSelect'
import { useState } from 'react'
import { TextField, Box, Button } from '@material-ui/core'

export default function froth(props) {

  const [mode, setMode] = useState('single')

  // const [selectedAttacker, setSelectedAttacker] = useState(props.units)

  const [selectedAttacker, setSelectedAttacker] = useState('wa')

  const [attackers, setAttackers] = useState([])

  const handleAddUnit = (event) => {
    if (event.target.name === 'Attacker') {
      setAttackers(attackers.push(selectedAttacker));
    }
  };

  const handleSelectedUnit = (event) => {
    const selectedUnit = units[event.target.value]
    setSelectedAttacker(selectedUnit)
  };

  return (
    <div>
      <UnitSelect />
      {/* <Select onChange={changeSelectedUnit}
        name='attackerOption'>
        Rider
        </Select> */}
      <Button
        onClick={handleKey}
        name='attacker'
      />
      <Button
        onClick={handleKey}
        name='Attacker'
      />
    </div>
  )
}
