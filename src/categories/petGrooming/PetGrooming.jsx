import React from 'react'
import { motion } from 'framer-motion'
import vector from "../../assests/Vector.png"
import styles from "./PetGrooming.module.css"
import footprint1 from "../../assests/footprint1.png"
import bone from "../../assests/bone.png"
import paw from "../../assests/paw.png"
import voiletPrint from "../../assests/voilet.png"
import grooming from "../../assests/grooming.png"

const PetGrooming = () => {
  return (
      <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{opacity:0}} className={styles.parentDiv}>
          <div className={ styles.categoryParent}> <h1 className={ styles.category}>Categories</h1></div>
      <div>
          <img src={vector} alt="vector" className={ styles.vector} />
          </div>
          <div className={styles.paragraphParent}>
              <h2 className={styles.serviceType}>Pet Grooming</h2>
              <p className={ styles.para}>Pet grooming is the process of maintaining your pet’s hygiene and enhancing their physical appearance, which includes tasks like washing, brushing, trimming fur, and clipping nail</p>
              <button className={ styles.getStartedBtn}>Get Started</button>
          </div>
        <div><img className={styles.paw} src={paw} alt="paw" /></div>
        <div><img className={styles.bone2} src={bone} alt="bone" /></div>   
            <div><img className={styles.paw2} src={footprint1} alt="footprint1" /></div>
            <div><img className={ styles.voiletPrint} src={ voiletPrint} alt="voiletPrint" /></div>
            <div><img className={styles.grooming} src={grooming} alt="grooming" /></div>
        </motion.div>
  )
}

export default PetGrooming