import React from 'react';


const CommentsList = ({ comments }) => {

  const renderedComments = comments.map(comment => {
    return <li key={comment.id}>{comment.comment}</li>;
  });

  return <ul>{renderedComments}</ul>;
};

export default CommentsList