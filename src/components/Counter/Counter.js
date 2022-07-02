import {useEffect, useState} from "react";

function Counter() {
    const [number, setNumber] = useState(0);

    useEffect(() => {
        console.log("counter mounted");

        const interval = setInterval(()=> {
            setNumber((n)=> n+1);
        },1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        console.log("number guncelleniyor.");
    },[number]);


    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 1)
            }}>Click Me
            </button>
        </>
    );
}


export default Counter;
