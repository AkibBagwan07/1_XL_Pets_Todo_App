import React from 'react'
import vector from "../images/Vector.png"
import styles from "./body.module.css"
import footprint1 from "../images/footprint1.png"
import bone from "../images/bone.png"
import paw from "../images/paw.png"
import voiletPrint from "../images/voilet.png"
import ring from "../images/ring.png"
import cat from "../images/cat.png"
import ornageBgDog from "../images/ornageBgDog.png"
import blueBgDog from "../images/blueBgDog.png"
import yellowBgDog from "../images/yellowBgDog.png"
import greenBgDog from "../images/greenBgDog.png"

const Body1 = () => {
    return (
        <div className={styles.parentDiv}>
      <div>
          <img src={vector} alt="vector" className={ styles.vector} />
            </div>
            <div>
                <img className={ styles.footprint1} src={ footprint1} alt="footprint1" />
            </div>
            <div><img className={styles.bone} src={bone} alt="bone" /></div>   
        <div><img className={styles.paw} src={paw} alt="paw" /></div>
        <div><img className={styles.bone2} src={bone} alt="bone" /></div>   
            <div><img className={styles.paw2} src={paw} alt="paw" /></div>
            <div><img className={ styles.voiletPrint} src={ voiletPrint} alt="voiletPrint" /></div>
            <div><img className={styles.ring} src={ring} alt="ring" /></div>
            <div className={styles.quoteParent}><h1 className={styles.quote}>Taking care</h1></div>
        <div><img className={styles.cat} src={cat} alt="cat" /></div>
        <div><img className={styles.yellowBgDog} src={yellowBgDog} alt="yellowBgDog" /></div>
         <div><img className={styles.greenBgDog} src={greenBgDog} alt="greenBgDog" /></div>
         <div><img className={styles.blueBgDog} src={blueBgDog} alt="blueBgDog" /></div>
                <div><img className={styles.ornageBgDog} src={ornageBgDog} alt="ornageBgDog" /></div>
        </div>
  )
}

export default Body1;