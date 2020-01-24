import React, { Component } from "react";
import styled from "styled-components";
import { getPostsDetail } from '../action/index'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import createMuiTheme from '../style/theme';
import { connect } from "react-redux";
import { getPosts } from '../action/index'
import { getPostsDetailAction } from '../action/index'
import { routes } from '../containers/Router'
import { push } from "connected-react-router";
import { vote } from '../action/index';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import green from '@material-ui/core/colors/green';

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px 0;
  align-items: flex-start;
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
    justify-content: space-between;
`

const Votes = styled.div`
    display: flex;
    padding: 3px;
    align-items: center; 
`
const Comments = styled.span``

const PostCard = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`

const VotesArea = styled.div`
    display: flex;
    padding: 3px;
    align-items: center;   
`

const ButtonVote = styled.span`
    &:hover{
	    background-color: #d3d3d3;
        cursor: pointer;
        border-radius: 5px;
    }
`

const VotesCount = styled.span`
    padding: 5px;
`

class CommentCard extends Component {

    componentDidMount() {
        this.props.getPostsDetail(this.props.selectIdPost)
    }


    render() {
        return (
            <Root>

                {this.props.selectPost.comments && this.props.selectPost.comments.map((comment) =>
                    <PostCard>
                        <Card width="100%" >
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    {comment.username}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {comment.text}
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <BottomBar>
                                    <VotesArea>
                                        <ButtonVote>
                                            <ArrowUpwardIcon
                                                color={comment.userVoteDirection !== 1 ? "" : "primary"}
                                                onClick={() => this.handleVotePost(comment.id, 1)}
                                            />
                                        </ButtonVote>
                                        <VotesCount> {comment.votesCount} </VotesCount>
                                        <ButtonVote>
                                            <ArrowDownwardIcon
                                                color={comment.userVoteDirection !== -1 ? "" : "secondary"}
                                                onClick={() => this.handleVotePost(comment, -1)}
                                            />
                                        </ButtonVote>
                                    </VotesArea>
                                </BottomBar>
                            </CardActions>
                        </Card>
                    </PostCard>
                )}
                {/* 
                {this.props.selectPost.comments && this.props.selectPost.comments.map((comment) =>
                    <Card>
                        <UserName>{comment.username}</UserName>
                        <PostContent>{comment.text}</PostContent>
                        <BottomBar>
                            <Votes>
                                <span><ArrowUpwardIcon /></span>
                                <span>{comment.votesCount}</span>
                                <span><ArrowDownwardIcon /></span> 
                            </Votes>
                            <Comments>{comment.commentsNumber}</Comments>
                        </BottomBar>
                    </Card>
                )}
            */}
            </Root>
        )
    }

}


const mapStateToProps = state => ({
    allPosts: state.posts.allPosts,
    selectIdPost: state.posts.selectIdPost,
    selectPost: state.posts.selectPost

})

const mapDispatchToProps = dispatch => ({
    getPostsDetail: (id) => dispatch(getPostsDetail(id)),

});


export default connect(mapStateToProps, mapDispatchToProps)(CommentCard);