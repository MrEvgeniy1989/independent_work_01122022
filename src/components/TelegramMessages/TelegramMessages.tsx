import React, {useState} from 'react';
import {Button} from '../Button/Button';


export const TelegramMessages = () => {
    // const [message, setMessage] = useState<string>('')
    const [messages, setMessages] = useState<Array<string>>([])
    const addMessage = () => {
        const NewMessage = ''
        setMessages([...messages, NewMessage])
    }

    return (
        <div>
            <div>
                <input type="text"/>
                <Button name={"Send"} callBack={addMessage}/>
                <Button name={"Clear"} callBack={()=>{}}/>
            </div>
            <div>
                <Button name={"Delete last message"} callBack={()=>{}}/>
            </div>
            <ul>
                {messages.map((el,index) => {
                    return (
                        <li key={index}>
                            {el}
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};