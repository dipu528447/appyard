import './App.css';
import Page1 from './pages/page1/Page1';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, rgbToHex, ThemeProvider } from '@mui/material/styles';

import { router } from './Router/Route';
import { RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';

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
        <RouterProvider router={router}>
          <Main></Main>
        </RouterProvider>
      </div>
    </ThemeProvider>   
  );
}
export default App;
