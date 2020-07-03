import React from 'react'
import styles from './NavBar.module.css'
import { motion } from "framer-motion";

export const NavBar = () => {
    return (
        <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className={styles.navSection}>
            <a href="#about">ABOUT</a>
            <a href="#skillsSection">SKILLS</a>
            <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, duration: 1 }} className={styles.name}>Saurav Ganguly</motion.span>
            <a href="#workSection">PROJECTS</a>
            <a href="#contactMe">CONTACT</a>
        </motion.div>
    )
}
