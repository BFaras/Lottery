import { Route, Routes } from 'react-router-dom';
import { Home, } from '../components/home/home';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../util/themes/theme'
import {LogInView } from '../components/login/log-in';
import { SignUpView } from '../components/sign-up/sign-up';
import { ProductsView } from '../components/products/products';


export function Router(){

    return(
        <ThemeProvider theme={theme}>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
            <Route path="/log-in" element={<LogInView />} />
        </Routes>
        <Routes>
            <Route path="/sign-up" element={<SignUpView />} />
        </Routes>
        <Routes>
            <Route path="/products" element={<ProductsView />} />
        </Routes>
        </ThemeProvider>
    )
}