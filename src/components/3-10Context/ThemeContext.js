import React from 'react'

export const themes = {
    light:{
        foreground: '#000000',
        background: '#eeeeee'
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222'
    }
}

export const ThemeContext = React.createContext(themes.dark);
// context는 themes.dark라는 디폴트 값을 가지는 컨텍스트이다. 
// 이 디폴트 값은 프로바이더로 감싸져 있는 자식이라면 그 프로바이더가 전달해주는 컨텍스트값을 쓸건데
// 이 프로바이더보다 밖에 있는 값이라면 여기서 선언한 디폴트값을 쓴다.
