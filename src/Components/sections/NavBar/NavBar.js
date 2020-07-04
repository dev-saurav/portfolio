import React from 'react'
import styles from './NavBar.module.css'
import { motion } from "framer-motion";
import { Link, useLocation } from 'react-router-dom'
import Heading from '../../Heading/Heading'
export const NavBar = () => {
    const location = useLocation()
    const titleVal = () => {
        switch (location.pathname) {
            case "/":
                return "Saurav Ganguly"
            case "/skills":
                return "Skills"
            case "/work":
                return "Work"
            case "/contact":
                return "Contact"
            default:
                return "Saurav Ganguly"
        }
    }
    return (
        <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className={styles.navSection}>
            <Link to='/'>ABOUT</Link>
            <Link to='/skills'>SKILLS</Link>
            <Heading title={titleVal()}/>
            <Link to="/work">PROJECTS</Link>
            <Link to="/contact">CONTACT</Link>
        </motion.div>

    )
}
