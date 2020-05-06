import React from 'react';

function PostForm({ onSubmit }) {
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');

  const handleSubmit = () => {
    // Invoke the passed in event callback
     onSubmit({ title: title, body: body });
  

    // Clear the input field
    setTitle('');
    setBody('');
  };

  return (
    <div className='card'>
      <div className='card-body'>
        <h4 className='card-title'>What's on your mind?</h4>
        <div>
          <div className='form-group'>
            Post Title
            <textarea
              className='form-control'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className='form-group'>
            Post
            <textarea
              className='form-control'
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>

          <div className='form-group'>
            <button className='btn btn-primary' onClick={handleSubmit}>
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostForm;
