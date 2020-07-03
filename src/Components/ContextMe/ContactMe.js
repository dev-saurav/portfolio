import React from 'react'
import styles from './ContactMe.module.css'

const contactIcons = [
    {
        icon: <i className={`fa fa-github ${styles.icon}`} aria-hidden="true"></i>,
        link: "https://github.com/dev-saurav"
    },
    {
        icon: <i className={`fa fa-free-code-camp ${styles.icon}`} aria-hidden="true"></i>,
        link: "https://www.freecodecamp.org/devsaurav"
    },
    {
        icon: <i className={`fa fa-linkedin-square c-icon ${styles.icon}`} aria-hidden="true" ></i>,
        link: "https://www.linkedin.com/in/saurav-ganguly-839ba6162/"
    }


]

export const ContactMe = () => {
    return (
        <div id="contactMe" className={styles.contactSection}>
            <div className={styles.heading}>
                Contact Me
            </div>
            <div className={styles.mainSection}>
                {contactIcons.map(item => <a href={item.link}>{item.icon}</a>)}
            </div>
        </div>
    )
}
