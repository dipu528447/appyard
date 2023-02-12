import './App.css';
import Page1 from './pages/Page1';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, rgbToHex, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import image from './assets/background.png'
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background:{
      paper:"#2A2A25",
      bgbutton:"#406B80"
    }

  },
});
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <div className="App" >
        <Paper>
            <Page1/>
        </Paper>
      </div>
    </ThemeProvider>   
  );
}
export default App;
