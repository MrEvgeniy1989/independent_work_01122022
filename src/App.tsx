import React, {useState} from 'react';
import './App.css';
import {Display} from './components/Display/Display';
import {Button} from './components/Button/Button';
import {TelegramMessages} from './components/TelegramMessages/TelegramMessages';
import s from './components/Button/Button.module.css';

function App() {
    const [value, setValue] = useState<number>(0)

    const callBackIncHandler = () => {
        if (value < 5) {
            setValue(value + 1)
        }
    }

    const callBackResetHandler = () => {
        setValue(0)
    }


    return (
        <div className="App">
            <div className={'counterAll'}>
                <div>
                    <Display value={value} setValue={setValue}/>
                </div>
                <div className={"buttonAll"}>
                    <Button name={'Inc'} callBack={callBackIncHandler} disabledValue={value === 5}/>
                    <Button name={'Reset'} callBack={callBackResetHandler} disabledValue={value === 0}/>
                </div>

                {/*<TelegramMessages/>*/}
            </div>
        </div>
    );
}

export default App;
