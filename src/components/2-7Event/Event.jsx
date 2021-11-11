import React from 'react'

export default function Event() {
    const handleButtonClick = (e) => {
        console.dir(e);
        console.log('handleClick - 3번째');
    }
    const handleClickCapture = () => {
        console.log('handleClickCapture - 젤 먼저');
    };

    const handleClickCapture2 = () => {
        console.log('handleClickCapture2 - 2번째');
    };
    
    const handleClickBubble = () => {
        console.log('handleClickBubble 4번째');
    };

    return (
        <div onClickCapture = {handleClickCapture}>
            <div onClickCapture = {handleClickCapture2} onClick = {handleClickBubble}> 
                <button onClick = {handleButtonClick} onMouseLeave ={() => alert('원래 mouseout event')}>Button</button>
            </div>
        </div>
    )
}
