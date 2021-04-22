import React, { useState } from 'react';
import axios from 'axios';

const CreateComment = ({ postId }) => {
  const [comment, setContent] = useState('');

  const onSubmit = async event => {
    event.preventDefault();

    await axios.post(`http://localhost:5000/posts/${postId}/comments`, {
      comment
    });

    setContent('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={comment}
            onChange={e => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreateComment;