import React from 'react'
import style from './Button.module.css'
const Button = (props) => {
    return (
        <input type="button"  class={style.button} value={props.text}></input>
    )
}

export default Button;