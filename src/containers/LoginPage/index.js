import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { login } from "../../action/login"
import { routes } from "../Router";
import { push } from "connected-react-router";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MainContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 50vh;
  justify-content: center;
  align-items: center;
`

const Input = styled.input``

const Button = styled.button`
  margin: 10px;
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
        <MainContainer onSubmit={this.handleSubmit}>
          <label htmlFor="inputEmail">E-mail</label>
          <Input type="email" name="email" value={this.state.email} onChange={this.handleChange} id="inputEmail"></Input>
          <label htmlFor="inputPassword">Senha</label>
          <Input type="password" name="password" value={this.state.password} onChange={this.handleChange} htmlFor="inputPassword"></Input>
          <Button type="submit" >Entrar</Button>
          <Button onClick={this.props.goToSignup}>Cadastrar</Button>
        </MainContainer>
      </Root>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
  goToSignup: () => dispatch(push(routes.signup)),


});


export default connect(null, mapDispatchToProps)(LoginPage);
