import React, { Component } from "react";
import styled from "styled-components";
import CreateNewComment from "../../components/CreateNewComment";
import CommentCard from "../../components/CommentCard"
import PostCardDetail from "../../components/PostCardDetail";
import Button from '@material-ui/core/Button';
import { push } from "connected-react-router";
import { routes } from "../Router";
import { connect } from "react-redux";


// TODO:
// Caso o usuário não esteja logado,
// deverá ser redirecionado para a página de login.

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`

const Header = styled.header`
  width: 50vw;
  display: flex;
  margin-bottom: 15px;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  justify-content: center;
  align-items: center;
`

class PostPage extends Component {
    render() {
        return (
            <Root>
                <Header>
                    <Button
                        type="submit"
                        variant="outlined"
                        size="small"
                        color="third"
                        text-align="left"
                        onClick={this.props.goToFeed}
                    >
                        Voltar
                    </Button >
                </Header>
                <MainContainer>
                    <PostCardDetail />
                    <CreateNewComment />
                    <CommentCard />
                </MainContainer>
            </Root>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        goToFeed: () => dispatch(push(routes.feed)),
    };
}
export default connect(null, mapDispatchToProps)(PostPage);