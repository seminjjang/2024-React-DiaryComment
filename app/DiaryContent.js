import React from 'react';
import './DiaryContent.scss';

const DiaryContent = () => {
    return (
        <div className='diary-content'>
            <div>
                <img src='/diary_img.png' alt="일기사진" class="diary-img"></img>
                2024년 12월 25일,<br/>학기를 모두 마치고 드디어 크리스마스 파티를 했다!<br/>
                중간고사 준비가 특히 힘들었던 한 학기지만, 기말고사는 중간고사보다 만족스럽게 볼 수 있었다. <br/>
                만족스럽게 학기를 마치고 맞이한 크리스마스는 뿌듯하고 편안했다.
                한 학기동안 고생한 나에게 위로와 축하를 주는 하루를 보낼 수 있어서 행복했다.<br/>
                많은 것을 배우고, 지난 학기보다 더 바빴던 3학년 1학기였지만.. 다음 학기도 이번 학기처럼 후회없이 보내보자!!<br/>
                이 일기를 읽고 있는 이웃분들도 행복한 연말 보내시고, 내년은 더 행복하고 뿌듯한 한 해가 되시길 응원하겠습니다!<br/>
            </div>
        </div>
    );
};

export default DiaryContent;