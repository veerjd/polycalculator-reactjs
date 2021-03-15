// import logo from "./logo.png"
import UnitDropdown from "./UnitDropdown"
import HpSlider from "../components/HpSlider"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: '80%',
    margin: '10px 0%'
  }
});

export default function Unit(props) {
  const classes = useStyles()

  return (
    <div>
      <UnitDropdown
        className={classes.root}
        placeholder={props.placeholder}
        units={props.units}
        activeUnit={props.activeUnit}
        setActive={props.setActive}
      />
      <HpSlider
        activeUnit={props.activeUnit}
        setActive={props.setActive}
      />
    </div>
  )
}