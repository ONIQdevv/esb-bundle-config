import React, {useState} from 'react';
// import {useState} from "../build/bundle";

const App = () => {
    const [state, setState] = useState(0);

    return (
        <div>
            <h1>Hello (^_^)  {state}</h1>
            <button onClick={() => setState(state + 1)}>INCREASE</button>
        </div>
    );
};

export default App;