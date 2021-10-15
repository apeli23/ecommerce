import React from 'react'
import Head from 'next/head';
import Link from 'next/link'
import { AppBar, Toolbar, Typography, Container, createTheme, ThemeProvider, CssBaseLine,} from '@material-ui/core';
import useStyles from '../utils/styles';


function Layout({title, description, children}) {
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
            type: 'light',
            primary: {
                main: '#f0c000',
            },
            secondary: {
                main: '#208080',
            },
        },
    });
    const classes = useStyles();
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
                                <Link href="/cart">
                                    <a>Cart</a>
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
