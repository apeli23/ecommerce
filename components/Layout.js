import React from 'react'
import Head from 'next/head';
import Link from 'next/link'
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import useStyles from '../utils/styles';


function Layout({children}) {
    const classes = useStyles();
    return (
        <div>   
            <Head>
                <title>ecommerce website</title>
            </Head>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                        <Link href="/">
                            <a><Typography className={classes.brand}>Ecomstore</Typography></a>
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
        </div>
    )
}

export default Layout
