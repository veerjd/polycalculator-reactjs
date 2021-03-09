// import logo from "./logo.png"
import UnitSelect from "../components/UnitSelect"
import HpSlider from "../components/HpSlider"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    width: '80%',
    margin: '10px 0%'
  }
});

export default function froth(props) {
  const classes = useStyles()

  console.log('Unit', props)
  return (
    <div>
      <UnitSelect
        className={classes.root}
        placeholder={props.placeholder}
        units={props.units}
        activeUnit={props.activeUnit}
        onChange={props.onChange}
      />
      <HpSlider
        activeUnit={props.activeUnit}
        onChange={props.onChange}
      />
    </div>
  )
}