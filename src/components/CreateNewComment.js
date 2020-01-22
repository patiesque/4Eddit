import React, { Component } from "react";
import styled from "styled-components";
import CommentCard from "./CommentCard";
import { connect } from "react-redux";
import { createComment } from "../action/index";
import { routes } from "../containers/Router";
import { push } from "connected-react-router";



const NewCommentArea = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    border: solid black 1px;
`

const WriteNewComment = styled.textarea`
    
`

const Button = styled.button``

class CreateNewComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { text } = this.state
        this.props.createComment(text, this.props.selectIdPost)
        this.props.goToPost()

    }

        render() {
            return (
                <NewCommentArea onSubmit={this.handleSubmit}>
                    <WriteNewComment type="text" name="text" value={this.state.text} onChange={this.handleChange} placeholder="Escreva seu comentário">
                    </WriteNewComment>
                    <Button type="submit" >Comentar</Button>
                </NewCommentArea>

            );
        }
    }


const mapStateToProps = state => ({
    selectIdPost: state.posts.selectIdPost,
})

const mapDispatchToProps = dispatch => ({
    createComment: (text, id) => dispatch(createComment(text, id)),
    goToPost: () => dispatch(push(routes.posts)),

});

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewComment);