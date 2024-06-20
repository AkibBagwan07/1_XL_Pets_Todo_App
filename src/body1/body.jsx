import React from 'react'
import vector from "../assests/Vector.png"
import styles from "./body.module.css"
import footprint1 from "../assests/footprint1.png"
import bone from "../assests/bone.png"
import paw from "../assests/paw.png"
import voiletPrint from "../assests/voilet.png"
import ring from "../assests/ring.png"
import cat from "../assests/cat.png"
import ornageBgDog from "../assests/ornageBgDog.png"
import blueBgDog from "../assests/blueBgDog.png"
import yellowBgDog from "../assests/yellowBgDog.png"
import greenBgDog from "../assests/greenBgDog.png"

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
                <div><img className={styles.ornageBgDog} src="ornageBgDog.png" alt="ornageBgDog" /></div>
        </div>
  )
}

export default Body1;