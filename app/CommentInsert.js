'use client';
import React, {useState, useCallback} from 'react';
import { HiChatBubbleLeftEllipsis } from "react-icons/hi2";
import './CommentInsert.scss'

const CommentInsert = ({onInsert}) => {
    const [value, setValue] = useState('');
    const onChange = useCallback(e=>{
        setValue(e.target.value);
    }, []);
    const onSubmit = useCallback(
        (e) => {
            onInsert(value);
            setValue('');
            e.preventDefault();
        }, [onInsert, value],
    );
    return (
        <form className='CommentInsert' onSubmit={onSubmit}>
            <input
                placeholder='댓글을 입력하세요.'
                value={value}
                onChange={onChange}/>
            <button type='submit'>
                <HiChatBubbleLeftEllipsis/>
            </button>
        </form>
    );
};

export default CommentInsert;