import React from 'react'
import { motion } from 'framer-motion'
import vector from "../../assests/Vector.png"
import styles from "./PetClinic.module.css"
import footprint1 from "../../assests/footprint1.png"
import foodFull from "../../assests/foodFull.png"
import pinkFootPrint from "../../assests/pinkFootPrint.png"
import voiletPrint from "../../assests/voilet.png"
import clinic from "../../assests/clinic.png"

const PetClinic = () => {
  return (
      <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{opacity:0}}>
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
        </motion.div>
  )
}

export default PetClinic