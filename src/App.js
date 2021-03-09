import PolyCalc from './pages/PolyCalc'
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
      const response = await axios.get("https://polycalculatorbot.com/api/units");
      return response.data;
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
            <PolyCalc
              units={units}
            /> :
            <Loading />}
        </header>
      </div>
    </ThemeProvider>
  );
}