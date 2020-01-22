import React, { Component } from "react";
import styled from "styled-components";
import PostCard from "../../components/PostCard";
import CreateNewPost from "../../components/CreateNewPost";

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

class FeedPage extends Component {
    render() {
        return (
            <Root>
                <MainContainer>
                    <CreateNewPost />
                    <PostCard />
                </MainContainer>
            </Root>
        );
    }
}

export default FeedPage;