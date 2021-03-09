// import logo from "./logo.png"
import Unit from "../components/Unit"
import { useState, useEffect } from "react"
import { TextField, Box, Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '80%',
    margin: '10px 0%'
  },
  // select: {
  //   width: '30%'
  // },
  button: {
    margin: '10px'
  }
});

export default function froth(props) {
  const classes = useStyles()

  // const [mode, setMode] = useState("single")
  const units = props.units

  const [activeAttacker, setActiveAttacker] = useState({})
  const [activeDefender, setActiveDefender] = useState({})
  const [attackers, setAttackers] = useState([])

  useEffect(() => {
    const baseUnit = units.filter(x => x.code === 'wa')[0]
    setActiveAttacker({
      ...baseUnit,
      currenthp: baseUnit.maxhp,
      vetNow: false,
      forceRetaliation: undefined,
      explodingNow: false
    })
    setActiveDefender({
      ...baseUnit,
      currenthp: baseUnit.maxhp,
      vetNow: false,
      forceRetaliation: undefined,
      explodingNow: false
    })
  }, []);

  const handleFight = (event) => {
    const selectedUnit = units[event.target.value]
    setActiveAttacker(selectedUnit)
  };

  return (
    <div>
      <Unit
        id="attacker"
        placeholder='Attacker'
        units={units}
        activeUnit={activeAttacker}
        onChange={setActiveAttacker}
      />
      <Unit
        id="defender"
        placeholder='Defender'
        units={units}
        activeUnit={activeDefender}
        onChange={setActiveDefender}
      />
      <Button
        className={classes.button}
        id='calc'
        onClick={handleFight}
        name="Calc"
        variant="contained"
        color="primary"
      >Calc!</Button>
      <Button
        className={classes.button}
        id='multi'
        onClick={() => { alert('Not implemented yet!') }}
        name="Multi"
        variant="contained"
        color="secondary"
      >Multi</Button>
    </div>
  )
}
