import React, { Component } from "react";
import styled from "styled-components";
import CreateNewComment from "../../components/CreateNewComment";
import CommentCard from "../../components/CommentCard"
import PostCardDetail from "../../components/PostCardDetail";

const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 15px 0;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  justify-content: center;
  align-items: center;
`

class PostsPage extends Component {
    render() {
        return (
            <Root>
                <MainContainer>
                    <CommentCard />
                    <CreateNewComment />
                    <PostCardDetail />
                </MainContainer>
            </Root>
        );
    }
}

export default PostsPage;