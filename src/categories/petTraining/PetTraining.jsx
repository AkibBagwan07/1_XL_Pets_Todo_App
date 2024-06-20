import React from 'react'
import vector from "../../assests/Vector.png"
import styles from "./PetTraining.module.css"
import footprint1 from "../../assests/footprint1.png"
import foodFull from "../../assests/foodFull.png"
import pinkFootPrint from "../../assests/pinkFootPrint.png"
import voiletPrint from "../../assests/voilet.png"
import petTraining from "../../assests/petTraining.png"

const PetTraining = () => {
  return (
      <div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{opacity:0}} className={styles.parentDiv}>
          <div className={ styles.categoryParent}> <h1 className={ styles.category}>Categories</h1></div>
      <div>
          <img src={vector} alt="vector" className={ styles.vector} />
          </div>
          <div className={styles.paragraphParent}>
              <h2 className={styles.serviceType}>Pet Training</h2>
              <p className={ styles.para}>Pet training encompasses teaching animals essential behaviors and commands, fostering obedience and good manners. Training sessions focus on positive reinforcement techniques, such as rewards and praise.</p>
              <button className={ styles.getStartedBtn}>Get Started</button>
          </div>
        <div><img className={styles.pinkFootPrint} src={pinkFootPrint} alt="pinkFootPrint" /></div>
        <div><img className={styles.foodFull} src={foodFull} alt="foodFull" /></div>   
            <div><img className={styles.footprint1} src={footprint1} alt="footprint1" /></div>
            <div><img className={ styles.voiletPrint} src={ voiletPrint} alt="voiletPrint" /></div>
            <div><img className={styles.petTraining} src={petTraining} alt="petTraining" /></div>
        </div>
  ) 
}

export default PetTraining