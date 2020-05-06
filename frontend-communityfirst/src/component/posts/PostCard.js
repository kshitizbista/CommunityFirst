import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

function PostCard(props) {
  const [body, setBody] = React.useState('');
  const [title, setTitle] = React.useState('');

  const handleSubmit = () => {
    console.log(title);
    console.log(body);
    props.onSubmit({ id: props.post.id, title: title, body: body });
    setTitle('');
    setBody('');

    window.location.reload();
  };
  const [edit, setEdit] = useState(false);

  const editButton = (
    <button
      className='btn btn-warning'
      onClick={() => setEdit(true)}
      id='update'>
      Edit
    </button>
  );
  const deleteButton = (
    <button
      className='btn btn-danger'
      onClick={props.onDeleteClick}
      id='delete'>
      DELETE
    </button>
  );
  const saveButton = (
    <button
      className='btn btn-warning'
      onClick={handleSubmit}
      // onClick={props.onSaveClick}
      id='save'>
      Save
    </button>
  );
  const cancelButton = (
    <button
      className='btn btn-danger'
      onClick={() => setEdit(false)}
      id='cancel'>
      Cancel
    </button>
  );
  const editedTextTitle = (
    <textarea
      className='form-control'
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  );
  const editedTextBody = (
    <textarea
      className='form-control'
      value={body}
      onChange={(e) => setBody(e.target.value)}
    />
  );

  return (
    <div className='card mt-3'>
      <div className='card-body'>
        <Link to={`/posts/${props.post.id}`}>
          <p>{edit || props.post.title}</p>
        </Link>
        {edit && editedTextTitle}
        {edit && editedTextBody}
        <p>{edit || props.post.body}</p>
        <p> Created at: {props.post.createdAt}</p>
        <p> Updated at: {props.post.updatedAt}</p>

        {edit || editButton}
        {edit || deleteButton}
        {edit && saveButton}
        {edit && cancelButton}
      </div>
    </div>
  );
}

export default PostCard;
