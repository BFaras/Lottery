import { Route, Routes } from 'react-router-dom';
import { Home, } from '../components/home/home';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../util/themes/theme'


export function Router(){

    return(
        <ThemeProvider theme={theme}>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        </ThemeProvider>
    )
}