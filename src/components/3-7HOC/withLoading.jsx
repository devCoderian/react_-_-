import React,  {useState, useEffect} from 'react'

//이것 자체가 HOC -> 컴포넌트를 받고 컴포넌트를 리턴한다.
export default function withLoading(Component) {
   // 새로운 함수형 컴포넌트 
    const WithLoadingComponent = (props) => {
        const [loading, setLoading] = useState(true)
    
        useEffect(() => {
            const timer = setTimeout(() => setLoading(false), 3000);
            return () => clearTimeout(timer);
        }, []);
    
       
        return loading? <p>Loading...</p> : <Component {...props} />
    }
   return WithLoadingComponent;
}
