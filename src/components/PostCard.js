import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getPosts } from '../action/index'
import { getPostsDetailAction } from '../action/index'
import { routes } from '../containers/Router'
import { push } from "connected-react-router";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px 0;
  align-items: flex-start;
`

const Card = styled.section`
    width: 100%;
    max-height: 250px;
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
    align-items: center;
`

const Votes = styled.div`
    display: flex;
    padding: 3px;
    align-items: center;   
`

const Comments = styled.div`
    padding: 5px;


    &:hover{
	    background-color: #d3d3d3;
        cursor: pointer;
        border-radius: 5px;
    }
`

class PostCard extends Component {

    componentDidMount() {
        this.props.getPosts()
    }

    handlePostDetail = (id) => {
        this.props.getPostsDetail(id)
        this.props.goToPostDetail()
    }

    render() {


        return (
            <Root>
                {this.props.allPosts.map((post) =>
                    <Card>
                        <UserName>{post.username}</UserName>
                        <PostContent>{post.text}</PostContent>
                        <BottomBar>
                            <Votes>
                                <span><ArrowUpwardIcon /></span>
                                <span>{post.votesCount}</span>
                                <span><ArrowDownwardIcon /></span>
                            </Votes>

                            <Comments value={post.id} name="id"
                                onClick={() => this.handlePostDetail(post.id)}
                            >
                                {post.commentsNumber} Comentários
                            </Comments>
                        </BottomBar>
                    </Card>

                )}
            </Root>
        );
    }
}


const mapStateToProps = state => ({
    allPosts: state.posts.allPosts,
})

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(getPosts()),
    getPostsDetail: (id) => dispatch(getPostsDetailAction(id)),
    goToPostDetail: () => dispatch(push(routes.posts))


});


export default connect(mapStateToProps, mapDispatchToProps)(PostCard);