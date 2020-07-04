import React from 'react'
import { motion } from "framer-motion"
import styles from './Heading.module.css'
const Heading = ({ title }) => {
    return (
        <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, duration: 1 }} className={styles.name}>{title}</motion.span>
    )
}

export default Heading;