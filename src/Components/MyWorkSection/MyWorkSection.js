import React from 'react'
import styles from './MyWorkSection.module.css'
import Grid from '../Grid/Grid'
import coronaTracker from '../../assets/corona-tracker.png'
import todoList from '../../assets/todo-list.png'
import budgetApp from '../../assets/budget-app.png'
export const MyWorkSection = () => {
    const work = [
        <img className={styles.img} src={coronaTracker} />,
        <img className={styles.img} src={todoList} />,
        <img className={styles.img} src={budgetApp} />,
    ];
    return (
        <div id="workSection" className={styles.workSection}>
            <div className={styles.heading}>
                My Work
            </div>
            <div className={styles.mainSection}>
                <Grid list={work} className={styles.grid} section={"work"} />
            </div>
        </div>
    )
}
