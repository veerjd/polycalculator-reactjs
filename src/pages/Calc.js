// import logo from "./logo.png"
import Unit from "../components/Unit"
import { useState, useEffect } from "react"
import { TextField, Box, Button } from "@material-ui/core"
// import UnitsProvider from "../Providers/UnitProvider";
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";

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

export default function Calc(props) {
  const classes = useStyles()

  // const [mode, setMode] = useState("single")
  const units = props.units

  const [activeAttacker, setActiveAttacker] = useState()
  const [activeDefender, setActiveDefender] = useState()
  const [attackers, setAttackers] = useState([])
  const [result, setResult] = useState({
    attacker: {},
    defender: {}
  })

  useEffect(() => {
    const baseUnit = units.filter(x => x.code === 'wa')[0]
    setActiveAttacker(baseUnit)
    setActiveDefender(baseUnit)
  }, []);

  const handleFight = (event) => {
    console.log('activeAttacker:', activeAttacker)
    console.log('activeDefender:', activeDefender)
  };

  return (
    <div>
      {/* <UnitsProvider> */}
      {activeAttacker && (
        <Unit
          id="attacker"
          placeholder="Attacker"
          units={units}
          activeUnit={activeAttacker}
          setActive={setActiveAttacker}
        />
      )}
      {activeDefender && (
        <Unit
          id="defender"
          placeholder="Defender"
          units={units}
          activeUnit={activeDefender}
          setActive={setActiveDefender}
        />
      )}
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
      {/* </UnitsProvider> */}
    </div>
  )
}
