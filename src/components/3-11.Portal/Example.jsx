import React from 'react'
import { createPortal } from 'react-dom'
import ThankYouDialog from './ThankYouDialog'

const Portal = (props) =>{
    //portal은 react domn안에 있디ㅏ.
    return createPortal(props.children, document.getElementById('potal'));
}

export default function Example() {
    return (
        <div>
            <Portal>
            <ThankYouDialog />
            </Portal>
            <div style = {{ position: "absolute"}}>
                <button>하하하</button>
            </div>
            
            {/*
            <div style = {{ position: "absolute"}}>
                <button>하하하</button>
            </div>
            <ThankYouDialog />
             이렇게 위치를 바꿔야 위치상으로 덮어진다. 
            지금이야 한 컴포넌트안이어서 위치로 레이어를 바꿀수 있지만
            이 레이어가 어느 컴포넌트 속에 속에 들어 있다면 이 레이어가 스택을 벗어나는
            일을 할 수가 없다.
            -> 그럴 때 potal 필요*/}

        </div>
    )
}
