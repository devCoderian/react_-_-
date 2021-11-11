import React , {useEffect, useState} from 'react'

const CleanUp =() => {


    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log("side-effect 실행")
        return () => {
          console.log("이전값",value);
        }
      },[value]);
    return (
        <>
        <h1>{value}</h1>
        <button onClick={() => setValue(value+ 1)}>+</button>
        </>
    )
}

export default CleanUp;
