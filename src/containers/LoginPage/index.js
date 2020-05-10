import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { login } from "../../action/login"
import { routes } from "../Router";
import { push } from "connected-react-router";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { CssBaseline } from "@material-ui/core";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Banner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  width: 50%;
  border-radius: 50%;
  margin-bottom: 15px;
`

const Form = styled.form`
  margin: 2vh 0;
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
            <Banner>
              <Image src={require('../../imagens/logo.png')} />
            </Banner>
 
            <Form onSubmit={this.handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                autoFocus
                component="h1"
                label="E-mail"
                type="email"
                name="email"
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Senha"
                type="password"
                name="password"
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
            </Form>

            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={this.props.goToSignup}>
                  {"Não tem uma conta? Cadastre-se aqui"}
                </Link>
              </Grid>
            </Grid>
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