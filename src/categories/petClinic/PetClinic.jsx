import React from 'react'
import vector from "../../images/Vector.png"
import styles from "./PetClinic.module.css"
import footprint1 from "../../images/footprint1.png"
import foodFull from "../../images/foodFull.png"
import pinkFootPrint from "../../images/pinkFootPrint.png"
import voiletPrint from "../../images/voilet.png"
import clinic from "../../images/clinic.png"

const PetClinic = () => {
  return (
      <div>
          <div className={ styles.categoryParent}> <h1 className={ styles.category}>Categories</h1></div>
      <div>
          <img src={vector} alt="vector" className={ styles.vector} />
          </div>
          <div className={styles.paragraphParent}>
              <h2 className={styles.serviceType}>Pet Clinic</h2>
              <p className={ styles.para}>The pet clinic offers comprehensive veterinary services, including medical consultations, vaccinations, and surgical procedures, ensuring the well-being of furry companions. The clinic provides compassionate care and support to pets and their owners.</p>
              <button className={ styles.getStartedBtn}>Get Started</button>
          </div>
        <div><img className={styles.pinkFootPrint} src={pinkFootPrint} alt="pinkFootPrint" /></div>
        <div><img className={styles.foodFull} src={foodFull} alt="foodFull" /></div>   
            <div><img className={styles.footprint1} src={footprint1} alt="footprint1" /></div>
            <div><img className={ styles.voiletPrint} src={ voiletPrint} alt="voiletPrint" /></div>
            <div><img className={styles.clinic} src={clinic} alt="clinic" /></div>
        </div>
  )
}

export default PetClinic