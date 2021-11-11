import React, { useState } from 'react'

function UserGreeting(props){
    // return <h1>{props.name}, it's {props.count} time</h1>
    // 이름 있을 때만 보여주기
    // return  <h1>{ props.name && props.name+','} it's {props.count && props.count} time</h1>
    // 0은 false는 아니지만 falsy 이다 count가 0일 때 위의 표현이 안됨 
    // 안전하게 표현하려면 0을 불리언으로 감싸서 falsy한 값을 아예 false로 만들기
    // return  <h1>{ props.name && props.name+','} it's {Boolean(props.count) && props.count} time</h1>
    // 혹은 ? 있을 때는 주고 falsy 할때는 아예 널값주기
    return  <h1>{ props.name && props.name+','} it's {props.count ? `${props.count}time`: null }</h1>
}

function GuestGreeting(){
    return <h1>Please sign up</h1>
}

function Greeting(props){
    // if(props.isLoggedIn){
    //    return <UserGreeting name ="ian" count= {0} />
    // }
    // return <GuestGreeting />;
    return props.isLoggedIn ? <UserGreeting name ="ian" count= {0} />
    :  <GuestGreeting />;
}


export default function Condition() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div>
            <button onClick = {() =>setIsLoggedIn((prev) => !prev)} >toggle</button>
            <Greeting isLoggedIn = {isLoggedIn} />
        </div>
    )
}
