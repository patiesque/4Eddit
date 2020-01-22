import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getPosts } from '../action/index'
import { getPostsDetailAction } from '../action/index'
import { routes } from '../containers/Router'
import { push } from "connected-react-router";

const Card = styled.section`
    width: 100%;
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

`

const Comments = styled.span``

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
            <div>
                {this.props.allPosts.map((post) =>
                <Card>
                    <UserName>{post.username}</UserName>
                    <PostContent>{post.text}</PostContent>
                    <BottomBar>
                        <Votes>
                            <span>"Mais"</span> {/* inserir imagem de voto positivo aqui */}
                            <span>{post.votesCount}</span>
                            <span>"Menos"</span> {/* inserir imagem de voto negativo aqui */}
                        </Votes>
                        <Comments> {post.commentsNumber} </Comments>
                        <button value={post.id} name="id"

                        onClick={ () => this.handlePostDetail(post.id)}
                        >Comentários</button>
                    </BottomBar>
                </Card>
                
                )}
            </div>
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