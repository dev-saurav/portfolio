import React from 'react'
import styles from './SkillsSection.module.css'
import CardGrid from '../../Grid/Grid';


export const SkillsSection = () => {
    const skills = [
        <img src="https://img.icons8.com/nolan/128/html-5.png" alt="html" />,
        <img src="https://img.icons8.com/color/128/css3.png" alt="css" />,
        <img src="https://img.icons8.com/color/128/javascript.png" alt="javascropt" />,
        <img src="https://img.icons8.com/nolan/128/react-native.png" alt="react" />,
        <img src="https://img.icons8.com/color/128/redux.png" alt="redux" />,
        <img src="https://img.icons8.com/color/128/mongodb.png" alt="mongo" />,
        <img src="https://img.icons8.com/color/128/nodejs.png" alt="node" />,
        <img src="https://img.icons8.com/color/128/git.png" alt="git" />
    ];
    return (
        <div id="skillsSection" className={styles.skillsSection}>
            {/* <div className={styles.heading}>
                My Skills
            </div> */}
            <div className={styles.mainSection}>
                <CardGrid list={skills} className={styles.grid} />
            </div>
        </div>
    )
}
