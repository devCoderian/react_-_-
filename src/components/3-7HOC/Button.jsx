import React, {useState, useEffect} from 'react'
import withLoading from './withLoading';
function Button() {
    //HOC없을 때
    // const [loading, setLoading] = useState(true)
    
    // useEffect(() => {
    //     const timer = setTimeout(() => setLoading(false), 3000);
    //     return () => clearTimeout(timer);
    // }, []);
    
    // return loading ? <p>loading...</p> :   <button>button</button>
    
    return <button>button</button>
}

export default withLoading(Button);