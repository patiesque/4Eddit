import React, { Component } from "react";
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import { getPosts } from '../action/index'
import { getPostsDetailAction } from '../action/index'
import { routes } from '../containers/Router'
import { push } from "connected-react-router";
import { vote } from '../action/index';
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

const PostCard = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`

const BottomBar = styled.span`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

const Comments = styled.div`
    padding: 5px;
`


class PostCardNew extends Component {
    componentDidMount() {
        this.props.getPosts()
    }

    handlePostDetail = (id) => {
        this.props.getPostsDetail(id)
        this.props.goToPostDetail()

    }

    handleVotePost = (post, direction) => {
        if (post.userVoteDirection === 0) {
            // Se a pessoa nunca interagiu com o post
            this.props.votePost(post.id, direction)
        } else if (post.userVoteDirection === 1 && direction === 1) {
            // Se a pessoa curtiu, mas já estava curtido
            this.props.votePost(post.id, 0)
        } else if (post.userVoteDirection === -1 && direction === -1) {
            // Se a pessoa descurtiu, mas já estava descurtido
            this.props.votePost(post.id, 0)
        }

    }

    render() {

        return (
            <Root>

                {this.props.allPosts.map((post) =>
                    <PostCard>
                        <Card width="100%" >
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    {post.username}
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {post.title}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {post.text}
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <BottomBar>
                                    <VotesArea>
                                        <ButtonVote>
                                            <ArrowUpwardIcon color={post.userVoteDirection !== 1 ? "main" : "primary"} onClick={() => this.handleVotePost(post, 1)} />
                                        </ButtonVote>
                                        <VotesCount> {post.votesCount} </VotesCount>
                                        <ButtonVote>
                                            <ArrowDownwardIcon color={post.userVoteDirection !== -1 ? "main" : "secondary"} onClick={() => this.handleVotePost(post, -1)} />
                                        </ButtonVote>
                                    </VotesArea>
                                    <Comments>
                                        <Button size="small"
                                            value={post.id} name="id"
                                            onClick={() => this.handlePostDetail(post.id)}
                                        >
                                            {post.commentsNumber} comentários
                                    </Button>
                                    </Comments>
                                </BottomBar>
                            </CardActions>
                        </Card>
                    </PostCard>
                )}

            </Root>

        );
    }
}

const mapStateToProps = state => ({
    allPosts: state.posts.allPosts,
    selectIdPost: state.posts.selectIdPost,
})

const mapDispatchToProps = dispatch => ({
    getPosts: () => dispatch(getPosts()),
    getPostsDetail: (id) => dispatch(getPostsDetailAction(id)),
    goToPostDetail: () => dispatch(push(routes.posts)),
    votePost: (id, direction) => dispatch(vote(id, direction))
});


export default connect(mapStateToProps, mapDispatchToProps)(PostCardNew);