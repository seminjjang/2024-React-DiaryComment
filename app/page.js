//박세민/60210021/기초웹 과제#4
'use client';
import React, { useState, useRef, useCallback } from "react";
import DiaryTemplate from "./DiaryTemplate";
import CommentInsert from "./CommentInsert";
import CommentList from "./CommentList";
import DiaryMain from "./DiaryMain";
import DiaryContent from './DiaryContent';
import DiaryFooter from './DiaryFooter';

export default function Page(){
  const [comments, setComments] = useState([
    {
      id:1,
      text:'음식이 너무 맛있어보여요!!',
      time: '2024.12.26 11:30',
      liked: true,
    },
    {
      id:2,
      text:'내년도 파이팅! 잘해봐요!!!+_+',
      time: '2024.12.26 11:40',
      liked: false,
    },
    {
      id:3,
      text:'한 학기도 고생했어요 다들 따뜻한 연말보내세요:)',
      time: '2024.12.26 13:10',
      liked: false,
    }
  ])
  const nextId = useRef(4);
  const onInsert = useCallback(
    (text)=> {
      //댓글을 남긴 시간
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const formattedDate = `${year}.${month}.${day} ${hours}:${minutes}`;
      
      const comment = {
        id:nextId.current,
        text,
        time: formattedDate,
        liked: false,
      };
      setComments(comments.concat(comment));
      nextId.current += 1;
    },
    [comments],
  );
  const onRemove = useCallback(
    (id) => {
      setComments(comments.filter((comment)=>comment.id !== id));
    },[comments]
  );
  const onToggle = useCallback(
    (id) => {
      setComments(
        comments.map((comment)=>
          comment.id===id?{...comment, liked: !comment.liked}: comment,
        ),
      )
    },[comments],
  )
  return(
    <>
      <DiaryMain/>
      <DiaryTemplate>
        <DiaryContent></DiaryContent>
        <CommentList comments={comments} onRemove={onRemove} onToggle={onToggle}/>
        <CommentInsert onInsert={onInsert}/>
      </DiaryTemplate>
      <DiaryFooter></DiaryFooter>
    </>
  )
};