import React, {useContext} from 'react'
import Head from 'next/head';
import Link from 'next/link'
import { AppBar, 
        Toolbar, 
        Typography, 
        Container,
        createTheme, 
        ThemeProvider, 
        // CssBaseLine, 
        Switch,
        Badge
    } from '@material-ui/core';
import useStyles from '../utils/styles';
import {Store} from '../utils/Store'
import Cookies from 'js-cookie';


function Layout({title, description, children}) {
    const {state, dispatch} = useContext(Store);
    const {darkMode, cart} = state;
    const theme = createTheme({
        typography:{
            h1: {
                fontSize: '1.6rem',
                fontWeight: 400,
                margin:'1rem 0'
            },
            h2: {
                fontSize: '1.4rem',
                fontWeight: 400,
                margin:'1rem 0'
            },

        },
        palette: {
            type: darkMode ? 'dark' : 'light',
            primary: {
                main: '#f0c000',
            },
            secondary: {
                main: '#208080',
            },
        },
    });
    const classes = useStyles();
    const darkModeChangeHandler = () => {
        dispatch({type: darkMode? "DARK_MODE_OFF" : "DARK_MODE_ON"})
        const newDarkMode = !darkMode;
        Cookies.set('darkMode', newDarkMode ? 'ON': 'OFF');
    }
    return (
        <div>   
            <Head>
                <title>{title ? `${title} - Ecomstore`: `ecommerce website`}</title>
                {description && <meta name="description" content={description} />}
            </Head>
            <ThemeProvider theme={theme}>
                {/* <CssBaseLine /> */}
                <AppBar position="static" className={classes.navbar}>
                    <Toolbar>
                            <Link href="/">
                                <a className={classes.brand}><Typography>Ecomstore</Typography></a>
                            </Link>
                            <div className={classes.grow}></div>
                            <div>
                                <Switch checked={darkMode} onChange={darkModeChangeHandler}></Switch>
                                <Link href="/cart">
                                    {cart.cartItems.length > 0 ? (
                                        <Badge
                                            color='secondary'
                                            badgeContent={cart.cartItems.length}
                                        >Cart</Badge>) :('Cart')}
                                </Link>
                                <Link href="/login">
                                    <a>Login</a>
                                </Link>
                            </div>
                    </Toolbar>
                </AppBar>
                <Container className={classes.main}> 
                    {children}
                </Container>    
                <footer className={classes.footer}>
                    <Typography>All rights reserved ecomstore</Typography>
                </footer>
            </ThemeProvider>
        </div>
    )
}

export default Layout
