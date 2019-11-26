import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.scss';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

const Login = () => (
  <form className={styles.container} noValidate autoComplete="off">
    <Paper>
      <TextField
        id="outlined-login"
        label="Login"
        defaultValue="Login"
        className={styles.textField}
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        className={styles.textField}
        type="password"
        autoComplete="current-password"
        margin="normal"
        variant="outlined"
      />

    </Paper>
  </form>
);

Login.propTypes = {
  props: PropTypes.string,
};

export default Login;