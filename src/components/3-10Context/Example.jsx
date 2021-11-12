import React, { Component } from 'react'
import { ThemeContext, themes } from './ThemeContext';
import ThemedButton from './ThemedButton';


export default class Example extends Component {
    constructor(props){
        super(props);
        //최적화
        this.state = {
            theme: themes.light,
        }
        this.toggleTheme = () => {
            this.setState((prev) => ({
                theme: prev.theme === themes.dark ? themes.light: themes.dark,
            }))
        }
    }
    render() {
        return (
            <div>
                {/* provider에는 값을 주어야 한다. */}
                <ThemeContext.Provider value = {this.state.theme} >
                <ThemedButton changeTheme = {this.toggleTheme}/>
                <ThemeContext.Consumer>
                        {(theme) =>(
                        <div 
                        style={{
                            width: 500, 
                            height: 500, 
                            backgroundColor: theme.background}}>
                        </div>
                        )}
                    </ThemeContext.Consumer>
                </ThemeContext.Provider>
                    <ThemedButton />
            </div>
        )
    }
}
