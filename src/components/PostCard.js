import React, { Component } from "react";
import styled from "styled-components";

const Card = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: solid black 1px;
    margin-bottom: 15px;
`

const UserName = styled.span`
    text-align: center;
    border: solid black 1px;
`

const PostContent = styled.div`
    width: 100%;
    border: solid black 1px;
    padding: 10px;
`

const BottomBar = styled.span`
    width: 100%;
    display: flex;
    border: solid black 1px;
    justify-content: space-between;
`

const Votes = styled.div`

`

const Comments = styled.span``

class PostCard extends Component {
    render() {
        return (
            <Card>
                <UserName>@fulano.de.tal</UserName>
                <PostContent>Escrevi uma coisa pra testar</PostContent>

                <BottomBar>
                    <Votes>
                        <span>"Mais"</span> {/* inserir imagem de voto positivo aqui */}
                        <span>19</span>
                        <span>"Menos"</span> {/* inserir imagem de voto negativo aqui */}
                    </Votes>

                    <Comments> X Comentários</Comments>
                </BottomBar>
            </Card>
        );
    }
}

export default PostCard;