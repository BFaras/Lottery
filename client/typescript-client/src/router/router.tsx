import { Route, Routes } from 'react-router-dom';
import { Home, } from '../components/home/home';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../util/themes/theme'
import { About } from '../components/about/about';
import {LogInView } from '../components/login/log-in';


export function Router(){

    return(
        <ThemeProvider theme={theme}>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
            <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
            <Route path="/log-in" element={<LogInView />} />
        </Routes>
        </ThemeProvider>
    )
}