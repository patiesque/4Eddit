import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { signup } from "../../action/login";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { routes } from "../Router";
import { push } from "connected-react-router";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Fab from '@material-ui/core/Fab';

const Root = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Banner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`

const Image = styled.img`
  width: 50%;
  border-radius: 50%;
  margin-bottom: 15px;
`

const Form = styled.form`
  margin: 2vh 0;
`

const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 2vh 0;
`

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
    const { username, email, password } = this.state
    this.props.signup(username, email, password)
  }

  render() {
    return (
      <Root>
        <Container component="main" maxWidth="xs" >
            <Banner>
              <Image src={require('../../imagens/logo.png')} />
            </Banner>

            <Form onSubmit={this.handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="Nome de Usuário"
                component="h1"
                type="text"
                name="username"
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label="E-mail"
                component="h1"
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
                Cadastrar
            </Button>
            </Form>

            <Footer>
              <Fab color="primary" aria-label="add">
                <ArrowBackIcon onClick={this.props.goToLogin} />
              </Fab>
            </Footer>
        </Container>
      </Root>
    );
  }
}
 
const mapDispatchToProps = dispatch => ({
  signup: (username, email, password) => dispatch(signup(username, email, password)),
  goToLogin: () => dispatch(push(routes.root)),
});

export default connect(null, mapDispatchToProps)(SignupPage);