import React from 'react'

function formatDate(date) {
    return date.toLocaleDateString();
  }

function Avatar(props){
    return(
        <img
        className = "Avatar"
        src = {props.user.avatarUrl}
        alt = {props.user.name}
        />
    )
}

function UserInfo(props){
  return(
    <div className="UserInfo">
    <Avatar user = {props.user} />
     {/*
            바깥 아바타 컴포넌트로 추출
          <img
            className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          /> */}
    <div className="UserInfo-name">
    {props.user.name}
    </div>
</div>
  )
}
  function Comment(props) {
    return (
      <div className="Comment">
        {/* 바깥 userInfo 컴포넌트로 추출 */}
       <UserInfo user={props.author} /> 
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">
          {formatDate(props.date)}
        </div>
      </div>
    );
  }
  
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };
  
export default function Extraction(props) {
    return (
       <Comment 
       date = {comment.date} 
       text = {comment.text} 
       author ={comment.author}
       />
    )
}
