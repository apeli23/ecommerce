import React, {useState, useContext} from 'react'
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


export default function Login() {
 
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
          alert('succss login');
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
                        <Link href='/register'><a>? Register</a></Link>
                    </ListItem>
                </List>
            </form>
        </Layout>
    )
}
