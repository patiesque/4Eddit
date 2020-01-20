import React, { Component } from "react";
import styled from "styled-components";
import PostCard from "../../components/PostCard";
import CreateNewComment from "../../components/CreateNewComment";
import CommentCard from "../../components/CommentCard"

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 15px 0;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 50vh;
  justify-content: center;
  align-items: center;
`

class PostsPage extends Component {
    render() {
        return (
            <Root>
                <MainContainer>
                    <PostCard />    
                    <CreateNewComment />
                    <CommentCard />
                </MainContainer>
            </Root>
        );
    }
}

export default PostsPage;