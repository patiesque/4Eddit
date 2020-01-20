import React, { Component } from "react";
import styled from "styled-components";

const Comment = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: solid black 1px;
`

const UserName = styled.span`
    text-align: center;
    border: solid grey 1px;
`

const CommentContent = styled.div`
    padding: 10px;
    border: solid grey 1px;
`

const BottomBar = styled.span`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: solid grey 1px;
`

const Votes = styled.div`

`

const Comments = styled.span``

class CommentCard extends Component {
    render() {
        return (
            <Comment>
                <UserName>@joao.da.silva</UserName>
                <CommentContent>Comentário do joao</CommentContent>

                <BottomBar>
                    <Votes>
                        <span>"Mais"</span> {/* inserir imagem de voto positivo aqui */}
                        <span>5 </span>
                        <span>"Menos"</span> {/* inserir imagem de voto negativo aqui */}
                    </Votes>
                </BottomBar>
            </Comment>
        );
    }
}

export default CommentCard;