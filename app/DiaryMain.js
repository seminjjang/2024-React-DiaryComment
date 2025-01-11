import React from 'react';
import './DiaryMain.scss'

const DiaryMain = () => {
    return (
        <div className='diary-main'>
            <header>
                <a href="#" class="main-title"><h1>Memoirs In Pixels</h1></a>
            </header>
            <nav>
                <ul>
                    <li><a href="#">전체보기</a></li>
                    <li><a href="#">여행계획</a></li>
                    <li><a href="#">공부계획</a></li>
                    <li><a href="#">동아리계획</a></li>
                    <li><a href="#">가계부</a></li>
                    <li><a href="#">일기장</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default DiaryMain;