import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios'; 

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Kevin Nguyen
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function  Describe () {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {' SUBSCRIBE TO RECEIVE REMINDER'}
      </Typography>
    );
  }
  


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Subscribe () {
  const  [nameUser, setName] = React.useState ('')
  const  [emailUser, setEmail] = React.useState ('')



  // request and response from user subscribe 
  const handleSubmit =  (e) => {
    e.preventDefault(); 
    var body = {
        name: nameUser,
        email: emailUser, 
    };
    axios.post('http://localhost:5000/subscribe', body)
            .then(function (response) {
              if (response.status == 2000 ) {
                console.log(response.data);
              }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

  // email handle onchange
  const handleEmail = (e) => {
    setEmail (e.currentTarget.value); 
  }

  // name handle on change
  const handleName = (e) => {
    setName(e.currentTarget.value); 
  }
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Subscribe
        </Typography>
        <form className={classes.form} noValidate>
        <Describe/>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="name"
            label="Name"
            type="text"
            id="name"
            onChange= {handleName}
            // autoComplete="current-password"
          /> 
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            type="text"
            id="email"
            onChange= {handleEmail}
            // autoComplete="current-password"
          /> 
         
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {handleSubmit}
          >
            Subscribe
          </Button>
          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}

        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}