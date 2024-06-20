import React from 'react'
import { motion } from 'framer-motion'
import vector from "../assests/Vector.png"
import styles from "./body.module.css"
import bone from "../assests/bone.png"
import voiletPrint from "../assests/voilet.png"
import ring from "../assests/ring.png"
import cat from "../assests/cat.png"
import ornageBgDog from "../assests/ornageBgDog.png"
import blueBgDog from "../assests/blueBgDog.png"
import yellowBgDog from "../assests/yellowBgDog.png"
import greenBgDog from "../assests/greenBgDog.png"
import ball from "../assests/ball.JPG"
import pinkFootPrint from "../assests/pinkFootPrint.png"
import food from "../assests/food.png"

const Body3 = () => {
    return (
      <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{opacity:0}}>
      <div>
          <img src={vector} alt="vector" className={ styles.vector} />
            </div>
            <div><img className={styles.bone} src={bone} alt="bone" /></div> 
            <div><img className={styles.pinkFootPrint} src={pinkFootPrint} alt="pinkFootPrint" /></div>   
        <div><img className={styles.ball} src={ball} alt="bone" /></div>   
            <div><img className={styles.food} src={food} alt="food" /></div> 
            <div><img className={styles.voiletPrint2} src={voiletPrint} alt="voiletPrint2" /></div>
            <div><img className={ styles.voiletPrint} src={ voiletPrint} alt="voiletPrint" /></div>
            <div><img className={styles.ring} src={ring} alt="ring" /></div>
        <div className={styles.quoteParent}><h1 className={styles.quote}>for your pets!</h1></div>
        <div><img className={styles.cat} src={cat} alt="cat" /></div>
        <div><img className={styles.yellowBgDog} src={yellowBgDog} alt="yellowBgDog" /></div>
         <div><img className={styles.greenBgDog} src={greenBgDog} alt="greenBgDog" /></div>
         <div><img className={styles.blueBgDog} src={blueBgDog} alt="blueBgDog" /></div>
                <div><img className={styles.ornageBgDog} src={ornageBgDog} alt="ornageBgDog" /></div>
        </motion.div>
  )
}

export default Body3;