import React from 'react'
import styles from './HeroText.module.css'
import Button from '../../Button/Button'
import { motion } from "framer-motion";

export const HeroText = () => {
    return (
        <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className={styles.heroText}>
            <div>
                <div>Hi!</div>
                <div>I am Saurav.</div>
                <div>I am a budding</div>
                <div>full stack developer.</div>
                <Button text={"Resume"}  />
            </div>

        </motion.div>
    )
}
