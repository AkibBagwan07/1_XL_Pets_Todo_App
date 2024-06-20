import React from 'react'
import styles from "./buttons.module.css"

const Buttons = () => {
  return (
      <div className={ styles.parent}>
          <button className={ styles.signin}>SignIn</button>
          <button className={ styles.register}>Register</button>
    </div>
  )
}

export default Buttons