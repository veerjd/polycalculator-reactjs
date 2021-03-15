import Calc from './pages/Calc'
import Loading from './pages/Loading'
import { useState, useEffect } from "react"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import axios from "axios";
import './App.css';

export default function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  const [units, setUnits] = useState([])

  const getUnits = async () => {
    try {
      let { data } = await axios.get("https://polycalculatorbot.com/api/units");

      data = data.map(unit => {
        return {
          ...unit,
          currenthp: unit.maxhp,
          vetNow: false,
          forceRetaliation: undefined,
          explodingNow: false,
          bonus: 1
        }
      });

      console.log(data)

      return data;
    } catch (err) { console.error(err) }
    return []
  };

  useEffect(async () => {
    setUnits(await getUnits());
  }, [])

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <header className="App-header">
          {units.length ?
            <Calc
              units={units}
            /> :
            <Loading />}
        </header>
      </div>
    </ThemeProvider>
  );
}