import React from 'react'
import { motion } from 'framer-motion'
import vector from "../assests/Vector.png"
import styles from "./body.module.css"
import bone from "../assests/bone.png"
import paw from "../assests/paw.png"
import voiletPrint from "../assests/voilet.png"
import cat from "../assests/cat.png"
import ornageBgDog from "../assests/ornageBgDog.png"
import blueBgDog from "../assests/blueBgDog.png"
import yellowBgDog from "../assests/yellowBgDog.png"
import greenBgDog from "../assests/greenBgDog.png"
import ball from "../assests/ball.JPG"
import faintPinkFoot from "../assests/faintPinkFoot.png"
import foodFull from "../assests/foodFull.png"

const Body4 = () => {
    return (
      <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{opacity:0}}>
      <div>
          <img src={vector} alt="vector" className={ styles.vector} />
            </div>
            <div><img className={styles.bone} src={bone} alt="bone" /></div> 
            <div><img className={styles.faintPinkFoot} src={faintPinkFoot} alt="faintPinkFoot" /></div>   
        <div><img className={styles.ball} src={ball} alt="bone" /></div>   
            <div><img className={styles.foodFull} src={foodFull} alt="foodFull" /></div> 
            <div><img className={styles.voiletPrint2} src={voiletPrint} alt="voiletPrint2" /></div>
            <div><img className={ styles.voiletPrint} src={ voiletPrint} alt="voiletPrint" /></div>
            <div><img className={styles.paw} src={paw} alt="paw" /></div>
        <div className={styles.quoteParent}><h1 className={styles.quote}>Get various services personalized for your pets like</h1></div>
        <div><img className={styles.cat} src={cat} alt="cat" /></div>
        <div><img className={styles.yellowBgDog} src={yellowBgDog} alt="yellowBgDog" /></div>
         <div><img className={styles.greenBgDog} src={greenBgDog} alt="greenBgDog" /></div>
         <div><img className={styles.blueBgDog} src={blueBgDog} alt="blueBgDog" /></div>
                <div><img className={styles.ornageBgDog} src={ornageBgDog} alt="ornageBgDog" /></div>
        </motion.div>
  )
}

export default Body4;