import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostsApi from './../../api/PostsApi';
import CommentsApi from '../../api/CommentsApi';
import CommentForm from '../comments/CommentForm';
import CommentCard from '../comments/CommentCard';

const Post = (props) => {
  const postId = props.match.params.id;
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    try {
      async function fetchData() {
        const response = await PostsApi.getPostById(postId);
        setPost(response.data);
      }
      fetchData();
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    try {
      async function fetchData() {
        const response = await CommentsApi.getAllCommentsByPostId(postId);
        setComments(response.data);
        console.log(response.data);
      }
      fetchData();
    } catch (e) {
      console.error(e);
    }
  }, []);

  async function createComment(commentBody) {
    try {
      const response = await CommentsApi.createComment(postId, commentBody);
      const newComment = response.data;
      const commentsWithNew = comments.concat(newComment);
      setComments(commentsWithNew);
    } catch (e) {
      console.error(e);
    }
  }

  async function updateComment(comment) {
    try {
      const response = await CommentsApi.updateComment(
        postId,
        comment.id,
        comment
      );
      const newComment = response.data;
      const commentsWithNew = comments.concat(newComment);
      setComments(commentsWithNew);
    } catch (e) {
      console.error(e);
    }
  }

  async function deleteComment(comment) {
    try {
      const response = await CommentsApi.deleteComment(postId, comment.id);
      const notDeletedComments = comments.filter((c) => c.id !== comment.id);
      setComments(notDeletedComments);
    } catch (e) {
      console.error(e);
    }
  }

  const postDiv = (
    <div className='card mt-3'>
      <div className='card-body'>
        {' '}
        Post Title: {post.title}
        <br />
        Post: {post.body}
      </div>
    </div>
  );
  const commentForm = <CommentForm onSubmit={createComment} />;
  const commentList = comments.map((comment) => (
    <CommentCard
      key={comment.commentId}
      comment={comment}
      onDeleteClick={() => deleteComment(comment)}
      onSubmit={updateComment}
      /*       onSaveClick={() => updateComment(comment)}
       */ editMode={editing}
    />
  ));

  return (
    <div className='Posts'>
      {postDiv}

      {commentForm}
      {commentList}
    </div>
  );
};

export default Post;
