import CLI2 from './pages/CLI2'
// import polycalc from './pages/polycalc'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import './App.css';

function App() {
  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="App">
        <header className="App-header">
          <CLI2
            placeholder='wbo, wsh, wbs, de b'
          />
          {/* <polycalc /> */}
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;