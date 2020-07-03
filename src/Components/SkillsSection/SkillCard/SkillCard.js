import React from "react";
import styles from './SkillCard.module.css';

export default function SkillCard(props) {
    return (
        <div className={styles.card}>
            {props.children}
        </div>
    );
}
