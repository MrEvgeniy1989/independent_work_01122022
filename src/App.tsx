import React, {useState} from 'react';
import './App.css';
import {Display} from './components/Display/Display';
import {Button} from './components/Button/Button';

function App() {
    const [value, setValue] = useState<number>(0)

    return (
        <div className="App">
            <div className={"Counter"}>
                <div>
                    <Display value={value} setValue={setValue}/>
                </div>
                <div>
                    <Button name={'Inc'}/>
                    <Button name={'Reset'}/>
                </div>
            </div>
        </div>
    );
}

export default App;
