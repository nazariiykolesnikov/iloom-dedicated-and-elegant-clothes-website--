import { useState } from 'react';
import './App.css';

function Counter() {
    const [counters, setCounters] = useState([
        { id: 1, value: 0 },
        { id: 2, value: 0 }
    ]);

    const updateCounter = (id: number, delta: number) => {
        setCounters(prev =>
            prev.map(counter =>
                counter.id === id
                    ? { ...counter, value: counter.value + delta }
                    : counter
            )
        );
    };

    return (
        <div className="App">
            <ul>
                {counters.map(counter => (
                    <li key={counter.id}>
                        <button onClick={() => updateCounter(counter.id, -1)}>Minus</button>
                        {counter.value}
                        <button onClick={() => updateCounter(counter.id, 1)}>Plus</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Counter;
