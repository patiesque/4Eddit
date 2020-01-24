import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { login } from "../../action/login"
import { routes } from "../Router";
import { push } from "connected-react-router";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { CssBaseline } from "@material-ui/core";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state
    this.props.login(email, password)
  }

  render() {

    return (
      <Root>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div>
            <Logo>
              <Avatar >
                <LockOutlinedIcon />
              </Avatar>
              <Typography>
                Fazer Login
            </Typography>
            </Logo>
            <form onSubmit={this.handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                autoComplete="email"
                autoFocus
                component="h1"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                autoComplete="current-password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Login
            </Button>
              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" onClick={this.props.goToSignup}>
                    {"Não tem uma conta? Cadastre-se aqui"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </Root >
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
  goToSignup: () => dispatch(push(routes.signup)),
});


export default connect(null, mapDispatchToProps)(LoginPage);
