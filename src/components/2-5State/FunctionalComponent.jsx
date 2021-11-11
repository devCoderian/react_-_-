import React, {useState, useEffect} from 'react'

export default function FunctionalComponent() {
    const [date, setDate] = useState(new Date());

    const tick = () => {
        setDate(new Date());
    }

    useEffect(() => {
        const Interval = setInterval(() => {
            tick();
        }, 1000);

        return () =>{
            clearInterval(Interval); 
        }
    }, []);

    return (
        <div>
        <h1>Hello, FunctionalComponent!</h1>
        <h2>It is {date.toLocaleTimeString()}.</h2>
      </div>
    )
}
