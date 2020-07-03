import React from 'react'
import myPic from '../../assets/myPic.png'
import styles from './HeroImg.module.css'
import { motion } from 'framer-motion'
export const HeroImg = () => {
    return (
        <motion.div className={styles.ImgSection} initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 1 }}>
            <img className={styles.myImg} src={myPic} alt="myImg" />
        </motion.div>
    )
}
