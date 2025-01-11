import React from 'react';
import { IoClose } from "react-icons/io5";
import { GoHeart, GoHeartFill } from "react-icons/go";
import './Comment.scss';
import cn from 'classnames';

const Comment = ({comment, onRemove, onToggle}) => {
    const {id, text, time, liked} = comment;
    return (
        <div className='Comment'>
            <div className='text'>{text}</div>
            <div className='meta-data'>
                <div className='time'>{time}</div>
                <div className={cn('liked', {liked})}
                    onClick={()=>onToggle(id)}>
                    {liked ? <GoHeartFill/> : <GoHeart/>}
                </div>
                <div className='remove' onClick={()=>onRemove(id)}>
                    <IoClose/>
                </div>
            </div>
        </div>
    );
};

export default Comment;