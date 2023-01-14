import { useEffect, useState } from "react";

const HookCounter = () => {
    const [currentCount, setCount] = useState(0);
    const [name, setName] = useState('');

    //useEffect is called after every render of the component
    useEffect(() => {
        console.log(`updating title...`);
        document.title = `clicked ${currentCount} times`
    }, [currentCount]);//this array takes the values, whose changes matters for the calling of useEffect
    return (
        <div>
            <span>{currentCount}</span>
            <br />
            <button onClick={() => setCount(currentCount + 1)} > Increment</button>
            <button onClick={() => setCount(prevCount => {
                const newCount = prevCount - 1;
                return newCount;
            })} > Decrement</button>

            <input value={name} onChange={e => setName(e.target.value)} />
        </div >
    );
};

export default HookCounter;