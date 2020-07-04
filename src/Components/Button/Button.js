import React from 'react'
import style from './Button.module.css'
const Button = (props) => {
    return (
        <input type="button" onClick={() => window.open("https://drive.google.com/file/d/1QAvSg2jSTcfkhTbZ-qF-PjdHKzuQG9fF/view?usp=sharing", "mywindow")} className={style.button} value={props.text}></input>
    )
}

export default Button;