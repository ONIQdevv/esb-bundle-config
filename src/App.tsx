import React, {useState} from 'react';
import './index.css';

const App = () => {
    const [state, setState] = useState<number>(1);
    const onBtnClick = () => setState(state + 1);
    return (<><h1>w</h1></>);
};
// @ts-ignore
export default App;