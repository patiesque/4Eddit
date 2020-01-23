import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { createPost } from "../action/index"


const NewPostArea = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`

const WriteNewPost = styled.textarea``

const Button = styled.button``

class CreateNewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            title: ""
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { text, title } = this.state
        this.props.createPost(text, title)
        this.setState({text: "", title: ""})

    }
    render() {
        return (
            <NewPostArea onSubmit={this.handleSubmit}>
                <label htmlFor="User">Titulo</label>
                <WriteNewPost type="text" name="title" value={this.state.title} onChange={this.handleChange} id="User" >
                </WriteNewPost>
                <label htmlFor="User">Texto</label>
                <WriteNewPost type="text" name="text" value={this.state.text} onChange={this.handleChange} id="User" >
                </WriteNewPost>
                <Button type="submit" >Postar</Button>
            </NewPostArea>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    createPost: (text, title) => dispatch(createPost(text, title)),

});


export default connect(null, mapDispatchToProps)(CreateNewPost);