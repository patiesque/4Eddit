import React, { Component } from "react";
import styled from "styled-components";


const NewPostArea = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    position: absolute
`

const WriteNewPost = styled.textarea``

const Button = styled.button``

class CreateNewPost extends Component {
    render() {
        return (
            <NewPostArea> 
                <label>Nome de usuário:</label>
                <WriteNewPost>
                </WriteNewPost>
                <Button>Postar</Button>
            </NewPostArea>
        );
    }
}

export default CreateNewPost;