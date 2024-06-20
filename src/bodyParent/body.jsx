import React from 'react'
import  { useState } from 'react'
import styles from "./body.module.css"
import Body1 from '../body1/body'
import Body2 from '../body2/body'
import Body3 from '../body3/body'
import Body4 from '../body4/body'
import Body5 from '../body5/body'

const Body = () => {
    const [changingUi, setChangingUi] = useState(1)
  // console.log(changingUi)
  const handleUiChange = () => { 
    if (changingUi > 4)
      setChangingUi(0)
    setChangingUi((prev) => prev + 1)
  }

  return (
      <div onWheel={handleUiChange} className={styles.homeParent}>
      {changingUi === 1 && <Body1 />}
      {changingUi === 2 && <Body2 />}
      {changingUi === 3 && <Body3 />}
      {changingUi === 4 && <Body4 />}
      {changingUi === 5 && <Body5 />}
    </div>
  )
}

export default Body