import React, {useState, useContext, useEffect} from 'react'
import { List,
    ListItem,
    Typography,
    TextField,
    Button
 } from '@material-ui/core'
import Layout from '../components/Layout'
import useStyles from '../utils/styles'
import Link from 'next/link';
import axios from 'axios';
import {Store} from '../utils/Store';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';


export default function Login() {
    const router = useRouter();
    const{redirect} = router.query;
    const {state, dispatch} = useContext(Store);
    const {userInfo} = state;
    
    //avoid accessing login form if user exists.
    useEffect(() => {
        if (userInfo) {
          router.push('/');
        }
    }, []);
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const classes = useStyles();


    const submitHandler = async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.post('/api/users/login', {
            email,
            password,
          });
          
          //save data in react context
          dispatch({ type:'USER_LOGIN', payload: data });
          Cookies.set('userInfo', data);
          router.push(redirect || '/')
        } catch (err) {
          alert(err.response.data ? err.response.data.message : err.message);
        }
    };

    return (
        <Layout title="Login">
            <form className={classes.form} onSubmit={submitHandler}>
                <Typography component="h1" variant="h1">
                    Login
                </Typography>
                <List>
                    <ListItem>
                        <TextField 
                            variant="outlined"
                            fullWidth
                            id="email"
                            label="Email"
                            inputProps={{ type: 'email' }}
                            onChange={(e) => setEmail(e.target.value)}
                        ></TextField>
                    </ListItem>
                    <ListItem>
                        <TextField 
                            variant="outlined"
                            fullWidth
                            id="password"
                            label="Password"
                            inputProps={{ type: 'password' }}
                            onChange={(e) => setPassword(e.target.value)}
                        ></TextField>
                    </ListItem>
                    <ListItem>
                        <Button variant="contained" type="submit" fullWidth color="primary">
                            Login
                        </Button>
                    </ListItem>
                    <ListItem>
                        Dont have an account
                        <Link  href="/register" passHref>
                            <a href={`/register?redirect=${redirect || '/'}`} passHref>
                                ? Register
                            </a>
                        </Link>
                    </ListItem>
                </List>
            </form>
        </Layout>
    )
}
