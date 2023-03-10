import './App.css';
import Page1 from './pages/page1/Page1';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, rgbToHex, ThemeProvider } from '@mui/material/styles';

import { router } from './Router/Route';
import { RouterProvider } from 'react-router-dom';
import Main from './Components/Main/Main';
import { useEffect } from 'react';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background:{
      paper:"#7BB8E6",
      bgbutton:"#000000"
    }

  },
});

function App() {
  // useEffect(() => {
  //   window.scrollTo({top: 0, left: 0})
  // }, [])

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
