import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getPostsDetail } from '../action/index'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { voteComment } from '../action/index'


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
`

const Votes = styled.div`
    display: flex;
    padding: 3px;
    align-items: center; 
`
const Comments = styled.span``

class PostCardDetail extends Component {



    componentDidMount() {
        this.props.getPostsDetail(this.props.selectIdPost)

    }


    handleVoteComment = (comment, direction) => {
        if(comment.userVoteDirection === 0) {
            // Se a pessoa nunca interagiu com o post
            this.props.voteComment(this.props.selectIdPost, comment.id, direction)
        } else if(comment.userVoteDirection === 1 && direction === 1){
            // Se a pessoa curtiu, mas já estava curtido
            this.props.voteComment(this.props.selectIdPost, comment.id, 0)
        } else if (comment.userVoteDirection === -1 && direction === -1){
            // Se a pessoa descurtiu, mas já estava descurtido
            this.props.voteComment(this.props.selectIdPost, comment.id, 0)
        }

    }

    render() {
        return (
            <Root>

                {this.props.selectPost.comments && this.props.selectPost.comments.map((comment) =>
                    <Card>
                        <UserName>{comment.username}</UserName>
                        <PostContent>{comment.text}</PostContent>
                        <BottomBar>
                            <Votes>
                                <span ><ArrowUpwardIcon color={comment.userVoteDirection !== 1 ? "primary" : "secondary" } onClick = { () => this.handleVoteComment(comment,1)}/></span>
                                <span>{comment.votesCount}</span>
                                <span ><ArrowDownwardIcon color={comment.userVoteDirection !== -1 ? "primary" : "secondary" }  onClick = { () => this.handleVoteComment(comment,-1) } /></span>
                            </Votes>
                            <Comments>{comment.commentsNumber}</Comments>
                        </BottomBar>
                    </Card>
                )}
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
    voteComment: (id, commentId, direction) => dispatch(voteComment(id, commentId, direction))

});


export default connect(mapStateToProps, mapDispatchToProps)(PostCardDetail);