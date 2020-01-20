import React, { Component } from "react";
import styled from "styled-components";

const Root = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 50vh;
  justify-content: center;
  align-items: center;
`

const InputUser = styled.input``

const InputPassword = styled.input``

const Button = styled.button`
  margin: 10px;
`

class SignupPage extends Component {
  render() {
    return (
      <Root>
        <MainContainer>

          <label>Nome de usuário:</label>
          <InputUser>
          </InputUser>

          <label>E-mail:</label>
          <InputUser>
          </InputUser>

          <label>Senha:</label>
          <InputPassword>
          </InputPassword>
          
          <Button>Cadastrar</Button>
        </MainContainer>
      </Root>
    );
  }
}

export default SignupPage;