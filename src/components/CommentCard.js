import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const Comment = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: solid black 1px;
`

const UserName = styled.span`
    text-align: center;
    border: solid grey 1px;
`

const CommentContent = styled.div`
    padding: 10px;
    border: solid grey 1px;
`

const BottomBar = styled.span`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: solid grey 1px;
`

const Votes = styled.div`
    display: flex;
    padding: 3px;
    align-items: center;   
`

const Comments = styled.span``

class CommentCard extends Component {
    render() {

        const { username, text, votesCount } = this.props.selectPost

        return (
            <Comment>
                <UserName>{username}</UserName>
                <CommentContent>{text}</CommentContent>

                <BottomBar>
                    <Votes>
                        <span><ArrowUpwardIcon /></span>
                        <span>{votesCount}</span>
                        <span><ArrowDownwardIcon /></span>
                    </Votes>
                </BottomBar>
            </Comment>
        );
    }
}

const mapStateToProps = state => ({
    selectPost: state.posts.selectPost

})

export default connect(mapStateToProps)(CommentCard);