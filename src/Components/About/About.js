import React from 'react'
import styles from './About.module.css'
import { Container, Grid } from '@material-ui/core';
export const About = () => {
    return (
        <div className={styles.aboutSection}>
            <div className={styles.heading}>
                About Me
            </div>
            <Grid container className={styles.mainSection}>
                <Grid item md={6}>
                    <div className={styles.aboutText}>
                        Hi there! I am saurav.
                       < br />
                        I have a passion for developing web apps and knack for shining new technology.
                        <br />
                        I am learning to be a full stack web developer.
                        <br />
                        Scroll down to see my skills and projects.
                    </div>
                </Grid>
                <Grid item md={6}>
                   
                        resume
                    
                </Grid>
            </Grid>
        </div>
    )
}
