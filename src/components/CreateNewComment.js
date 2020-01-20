import React, { Component } from "react";
import styled from "styled-components";
import CommentCard from "./CommentCard";


const NewCommentArea = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    border: solid black 1px;
`

const WriteNewComment = styled.textarea`
    
`

const Button = styled.button``

class CreateNewComment extends Component {
    render() {
        return (
            <NewCommentArea> 
                <WriteNewComment placeholder="Escreva seu comentário">
                </WriteNewComment>
                <Button>Comentar</Button>
            </NewCommentArea>
            
        );
    }
}

export default CreateNewComment;