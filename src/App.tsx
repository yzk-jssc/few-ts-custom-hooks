import React from 'react';
import './App.css';
import DebounceItem from './Components/DebounceItem';
import HoverItem from './Components/HoverItem';
import InputItem from './Components/InputItem';
import RequestItem from './Components/RequestItem';

function App() {
    return (
        <div className="App">

            <h1>UseInput</h1>
            <InputItem/>

            <hr style={{margin:'10px 0'}}/>
            <h1>UseHover</h1>

            <HoverItem/>

            <hr style={{margin:'10px 0'}}/>
            <h1>UseDebounce</h1>

            <DebounceItem/>

            <h1>UseRequest</h1>
            <RequestItem/>

        </div>
    );
}

export default App;
