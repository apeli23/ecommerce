import React from 'react'
import Head from 'next/head';
import Link from 'next/link'
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import useStyles from '../utils/styles';


function Layout({title, description, children}) {
    const classes = useStyles();
    return (
        <div>   
            <Head>
                <title>{title ? `${title} - Ecomstore`: `ecommerce website`}</title>
                {description && <meta name="description" content={description} />}
            </Head>
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
        </div>
    )
}

export default Layout
