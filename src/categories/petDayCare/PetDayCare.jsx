import React from 'react'
import vector from "../../assests/Vector.png"
import styles from "./PetDayCare.module.css"
import footprint1 from "../../assests/footprint1.png"
import foodFull from "../../assests/foodFull.png"
import ring from "../../assests/ring.png"
import voiletPrint from "../../assests/voilet.png"
import petDayCare from "../../assests/PetDayCare.png"

const PetDayCare = () => {
  return (
      <div className={styles.parentDiv}>
          <div className={ styles.categoryParent}> <h1 className={ styles.category}>Categories</h1></div>
      <div>
          <img src={vector} alt="vector" className={ styles.vector} />
          </div>
          <div className={styles.paragraphParent}>
              <h2 className={styles.serviceType}>Pet DayCare</h2>
              <p className={ styles.para}>Pet daycare offers a safe and stimulating environment for pets while their owners are away, providing companionship, exercise, and socialization opportunities. Supervised by trained staff, pets engage</p>
              <button className={ styles.getStartedBtn}>Get Started</button>
          </div>
        <div><img className={styles.ring} src={ring} alt="ring" /></div>
        <div><img className={styles.foodFull} src={foodFull} alt="foodFull" /></div>   
            <div><img className={styles.footprint1} src={footprint1} alt="footprint1" /></div>
            <div><img className={ styles.voiletPrint} src={ voiletPrint} alt="voiletPrint" /></div>
            <div><img className={styles.petDayCare} src={petDayCare} alt="clinic" /></div>
        </div>
  )
}

export default PetDayCare