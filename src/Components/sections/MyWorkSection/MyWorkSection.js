import React from 'react'
import styles from './MyWorkSection.module.css'
import Grid from '../../Grid/Grid'
import coronaTracker from '../../../assets/corona-tracker.png'
import todoList from '../../../assets/todo-list.png'
import budgetApp from '../../../assets/budget-app.png'
export const MyWorkSection = () => {
    const work = [
        {
            img: <img className={styles.img} src={coronaTracker} alt="corona-tracker" />,
            heading: "Corona Tracker",
            desc: "Corona Tracker made in react and covid-19 api",
            link: "https://dev-saurav.github.io/corona-tracker/"
        },
        {
            img: <img className={styles.img} src={todoList} alt="todo-list" />,
            heading: "Todo List",
            desc: "Todo List made in react, context api, material-ui",
            link: "https://dev-saurav.github.io/todo-app/"
        },
        {
            img: <img className={styles.img} src={budgetApp} alt="budget-app" />,
            heading: "Budget App",
            desc: "Budget App made in react, context api, react hooks, localStorage",
            link: "https://dev-saurav.github.io/budget-app/"
        },
    ];
    return (
        <div id="workSection" className={styles.workSection}>
            <div className={styles.mainSection}>
                <Grid list={work} className={styles.grid} section={"work"} />
            </div>
        </div>
    )
}
