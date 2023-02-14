import './App.css';
import Page1 from './pages/page1/Page1';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, rgbToHex, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Page3 from './pages/page3/Page3';
import Page2 from './pages/page2/Page2';
import Page4 from './pages/page4/Page4';
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
        <Paper style={{height:"100%", display:"flex", flexDirection:"column"}} >
            <Page1/> 
            <Page2/>
            <Page3/>
            <Page4/>
        </Paper>
      </div>
    </ThemeProvider>   
  );
}
export default App;
