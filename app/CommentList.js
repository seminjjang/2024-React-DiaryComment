import React from 'react';
import Comment from './Comment'
import './CommentList.scss'

const CommentList = ({comments, onRemove, onToggle}) => {
    return (
        <div className='CommentList'>
            <h4>댓글</h4>
            {comments.map((comment)=>(
                <Comment
                    comment={comment}
                    key={comment.id}
                    onRemove={onRemove}
                    onToggle={onToggle}/>
            ))}
        </div>
    );
};

export default CommentList;