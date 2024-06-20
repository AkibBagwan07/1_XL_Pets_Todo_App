import React, { useState } from 'react'
import styles from "./categories.module.css"
import serviceFootprint from "../images/servicesFootprint.png"
import PetGrooming from './petGrooming/PetGrooming'
import PetClinic from './petClinic/PetClinic'
import PetDayCare from './petDayCare/PetDayCare'
import PetTraining from './petTraining/PetTraining'

const Categories = () => {
    const [changingUi, setChangingUi] = useState(1)
  console.log(changingUi)
  const handleUiChange = () => { 
    if (changingUi > 3)
      setChangingUi(0)
    setChangingUi((prev) => prev + 1)
    }
    
    return (
      <div onWheel={handleUiChange} >
      <div className={styles.fourServices}>
              <div className={changingUi === 1 ? styles.selectedService : styles.footprintAndService}><img src={ serviceFootprint} alt="" /><h2 className={styles.services}>Pet Grooming</h2></div>
              <div className={changingUi === 2 ? styles.selectedService : styles.footprintAndService}><img src={ serviceFootprint} alt="" /><h2 className={ styles.services}>Pet Clinic</h2></div>
              <div className={changingUi === 3 ? styles.selectedService : styles.footprintAndService}><img src={ serviceFootprint} alt="" /><h2 className={ styles.services}>Pet Daycare</h2></div>
              <div className={changingUi === 4 ? styles.selectedService : styles.footprintAndService}><img src={ serviceFootprint} alt="" /><h2 className={ styles.services}>Pet Training</h2></div>
          </div>
            {changingUi === 1 && <PetGrooming />}
            {changingUi === 2 && <PetClinic />}
            {changingUi === 3 && <PetDayCare />}
            {changingUi === 4 && <PetTraining />}
        </div>
   )
}

export default Categories