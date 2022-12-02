import React, {ChangeEvent} from 'react';
import s from './Display.module.css'

type DisplayPropsType = {
    value: number
    setValue: (value: number)=>void
}

export const Display = (props: DisplayPropsType) => {

    // const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //   props.setValue(+e.currentTarget.value)
    // }


    return (
        <div className={s.display}>
            {/*<input type={'number'} value={props.value} onChange={onChangeInputHandler}/>*/}
            <div className={props.value < 5 ? s.counter : s.counterEnd}>{props.value}</div>
        </div>
    );
};