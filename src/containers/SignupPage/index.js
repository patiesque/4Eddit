import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { signup } from "../../action/login"

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

class SignupPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:"",
      email:"",
      password:"",
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value
    })
  } 

handleSubmit = (event) => {
  event.preventDefault();
  const {username, email, password} = this.state
  this.props.signup(username, email, password)
}

  render() {
    return (
      <Root>
        <MainContainer onSubmit={this.handleSubmit}>
          <label>Nome de usuário:</label>
          <Input type="text" name="username" value={this.state.username} onChange={this.handleChange} id="inputUser"></Input>
          <label htmlFor="inputUser">E-mail</label>
          <Input type="email" name="email" value={this.state.email} onChange={this.handleChange} id="inputUser"></Input>  
          <label htmlFor="inputPassword">Senha</label>
          <Input type="password" name="password" value={this.state.password} onChange={this.handleChange} htmlFor="inputPassword"></Input>
          
          <Button type="submit">Cadastrar</Button>
        </MainContainer>
      </Root>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signup: (username, email, password) => dispatch(signup(username, email, password)),

});

export default connect (null, mapDispatchToProps)(SignupPage);