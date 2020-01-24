import React, { Component } from "react";
import styled from "styled-components";
import PostCard from "../../components/PostCard";
import CreateNewPost from "../../components/CreateNewPost";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";

const Root = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 15px 0;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  justify-content: center;
  align-items: center;
`

class FeedPage extends Component {

    componentDidMount() {
        const token = window.localStorage.getItem("token")
        if (token === null) {
            this.props.goToLogin()
            window.alert("Área restrita. Faça seu login")
        }
    }

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

const mapDispatchToProps = dispatch => ({
    goToLogin: () => dispatch(push(routes.root)),
});
      
export default connect(null, mapDispatchToProps)(FeedPage);
