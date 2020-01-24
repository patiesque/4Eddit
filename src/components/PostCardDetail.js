import React, { Component } from "react";
import styled from "styled-components";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import createMuiTheme from '../style/theme';
import { getPostsDetail } from '../action/index'
import { connect } from "react-redux";
import { getPosts } from '../action/index'
import { getPostsDetailAction } from '../action/index'
import { routes } from '../containers/Router'
import { push } from "connected-react-router";
import { vote } from '../action/index';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { voteComment } from '../action/index'

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`

const VotesCount = styled.span`
    padding: 5px;
`

const Comments = styled.div`
    padding: 5px;
`

class PostCardDetail extends Component {

    render() {

        const { username, text, votesCount, title, userVoteDirection, id, commentsNumber } = this.props.selectPost

        return (
            <Root>
                <PostCard>
                    <Card >
                        <CardContent>
                            <Typography 
                            color="textSecondary" gutterBottom>
                                {username}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {text}
                            </Typography>
                        </CardContent>

                        <CardActions>
                            <BottomBar>
                                <VotesArea>
                                    <ButtonVote>
                                        <ArrowUpwardIcon
                                            color={userVoteDirection !== 1 ? "" : "primary"}
                                            
                                        />
                                    </ButtonVote>
                                    <VotesCount> {votesCount} </VotesCount>
                                    <ButtonVote>
                                        <ArrowDownwardIcon
                                            color={userVoteDirection !== -1 ? "" : "secondary"}
                                        
                                        />
                                    </ButtonVote>
                                </VotesArea>
                                <Comments>
                                    <Button
                                        disabled
                                        size="small"
                                        value={id}
                                        name="id"
                                    >
                                        {commentsNumber} comentários
                                        </Button>
                                </Comments>
                            </BottomBar>
                        </CardActions>
                    </Card>
                </PostCard>
            </Root>
        );
    }
}

const mapStateToProps = state => ({
    selectPost: state.posts.selectPost
})

const mapDispatchToProps = dispatch => ({
    getPostsDetail: (id) => dispatch(getPostsDetail(id)),
    voteComment: (id, commentId, direction) => dispatch(voteComment(id, commentId, direction))
});

export default connect(mapStateToProps)(PostCardDetail);