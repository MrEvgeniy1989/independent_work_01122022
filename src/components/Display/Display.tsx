import React from 'react';
import s from './Display.module.css'

type DisplayPropsType = {
    value: number
    setValue: (value: number)=>void
}

export const Display = (props: DisplayPropsType) => {
    return (
        <div className={s.display}>
            <input type={'number'}/>
        </div>
    );
};