import React, {useState} from 'react'
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

export default function Login() {
    const classes = useStyles();

    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const submitHandler = async(e) => {
        //prevent page from refreshing when user clicks login button
        e.preventDefault();
        try {
            //send ajax request to make sure user and password works
        const {data} = await axios.post('/api/users/login', {email, password});
        alert('sucessful login')
        }catch (error) {
            alert(error.response.data ? error.response.data.message : error.message);
        }
    }
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
