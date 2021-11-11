import React from 'react'

function Welcome(props) {
    console.log(props);
    return <h1>Hello, {props.name}</h1>
}

export default function Composition() {
    return (
        <div>
            <Welcome name= "ian"/>
        </div>
    )
}
