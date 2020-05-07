import React from "react";
import ItemApi from "./../../api/ItemApi";
import ItemForm from "./ItemForm";
import ItemCard from "./ItemCard";

class ItemPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
    }

    async createItemPost(postData) {
        try {
            const response = await ItemApi.createItemPost(postData);
            const post = response.data;
            const newPosts = this.state.posts.concat(post);

            this.setState({
                posts: newPosts,
            });
        } catch (e) {
            console.error(e);
        }
    }

    async updateItemPost(postID, updatedText) {
        try {
            let updatedPost = {};
            updatedPost.id = postID;
            updatedPost.body = updatedText;

            const response = await ItemApi.updateItemPost(updatedPost);
            const post = response.data;

            const newPosts = this.state.posts.filter(p => p.id !== postID).concat(post);

            this.setState({
                posts: newPosts,
            });
        } catch (e) {
            console.error(e);
        }
    }

    async deleteItemPost(post) {
        try {
            await ItemApi.deleteItemPost(post.id);
            const newPosts = this.state.posts.filter(p => p.id !== post.id);
            this.setState({
                posts: newPosts,
            });
        } catch (e) {
            console.error(e);
        }
    }

    componentDidMount() {
        ItemApi.getAllItemPosts()
            .then(({ data }) => this.setState({ posts: data }))
            .catch(err => console.error(err));
    }

    render() {
        const posts = this.state.posts;

        return (
            <div>
                <ItemForm onSubmit={(postData) => this.createItemPost(postData)} />

                {posts.map(post =>
                    <ItemCard key={post.id} post={post} onDeleteClick={() => this.deleteItemPost(post)}
                        onUpdateClick={(postData) => this.updateItemPost(post.id, postData)} />
                )}

            </div>
        );
    }
}

export default ItemPage;
