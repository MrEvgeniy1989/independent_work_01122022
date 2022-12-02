import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    name: string
}

export const Button = (props: ButtonPropsType) => {
    return (
        <div>
            <button>{props.name}</button>
        </div>
    );
};