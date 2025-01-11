import React from 'react';
import './DiaryTemplate.scss';

const DiaryTemplate = ({children}) => {
    return (
        <div className = "DiaryTemplate">
            <div className='diary-title'>Yesterday's Diary</div>
            <div className='content'>{children}</div>
        </div>
    );
};

export default DiaryTemplate;