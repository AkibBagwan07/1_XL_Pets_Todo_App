import React from 'react'
import vector from "../images/Vector.png"
import styles from "./body.module.css"
import bone from "../images/bone.png"
import voiletPrint from "../images/voilet.png"
import ring from "../images/ring.png"
import cat from "../images/cat.png"
import ornageBgDog from "../images/ornageBgDog.png"
import blueBgDog from "../images/blueBgDog.png"
import yellowBgDog from "../images/yellowBgDog.png"
import greenBgDog from "../images/greenBgDog.png"
import ball from "../images/ball.png"
import pinkFootPrint from "../images/pinkFootPrint.png"
import food from "../images/food.png"

const Body3 = () => {
    return (
      <div>
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
        </div>
  )
}

export default Body3;