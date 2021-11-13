import React, {FC} from 'react';
import {Comment} from 'types/types'
import style from './CommentItem.module.css'


interface MyCommentItemProps {
    comment: Comment;
}

const CommentItem: FC<MyCommentItemProps> = ({comment}) => {
    return (
        <div className={style.commentItem} >
            <h4>{comment.name}</h4>
            <div>{comment.body}</div>
            <div>{comment.email}</div>
            
        </div>
    );
};

export default CommentItem;