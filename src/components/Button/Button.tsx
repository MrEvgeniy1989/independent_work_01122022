import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    name: string
    callBack: ()=>void
    disabledValue?: boolean
}


export const Button = (props: ButtonPropsType) => {
    return (
        <div className={s.buttonAll}>
            <button onClick={props.callBack} disabled={props.disabledValue}>{props.name}</button>
        </div>
    );
};