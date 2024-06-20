import React from 'react'
import vector from "../images/Vector.png"
import styles from "./body.module.css"
import bone from "../images/bone.png"
import paw from "../images/paw.png"
import voiletPrint from "../images/voilet.png"
import cat from "../images/cat.png"
import ornageBgDog from "../images/ornageBgDog.png"
import blueBgDog from "../images/blueBgDog.png"
import yellowBgDog from "../images/yellowBgDog.png"
import greenBgDog from "../images/greenBgDog.png"
import ball from "../images/ball.png"
import faintPinkFoot from "../images/faintPinkFoot.png"
import foodFull from "../images/foodFull.png"

const Body4 = () => {
    return (
      <div>
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
        </div>
  )
}

export default Body4;