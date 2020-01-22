import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

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

        const {username, text} = this.props.selectPost

        return (
            <Comment>
                <UserName>{username}</UserName>
                <CommentContent>{text}</CommentContent>

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

const mapStateToProps = state => ({
    selectPost: state.posts.selectPost

})

export default connect(mapStateToProps)(CommentCard);