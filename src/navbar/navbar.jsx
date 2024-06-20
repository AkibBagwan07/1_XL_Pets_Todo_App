import React, { useState } from 'react'
import Logo from "../assests/Logo.png.png"
import styles from "./navbar.module.css"
import Buttons from '../buttons/buttons'
import Body from '../bodyParent/body'
import Categories from '../categories/categories'

const Navbar = () => {
    const [home, setHome] = useState(true)
    const [categories,setCategories] = useState(false)
    
    const handleHome = () => { 
        setHome(!home)
        setCategories(!categories)
    }

    const handleCategory = () => { 
        setCategories(!categories)
        setHome(!home)
    }
    return (
      <div>
      <div className={ styles.parent}>
          <div className={ styles.childFlex}>
          <img className={styles.logo} src={Logo} alt="Logo" />
              <h2 className={styles.logoName}><span className={ styles.G}>G</span>local</h2> 
          </div>
          <div className={ styles.childFlex}>
              <h4 onClick={handleHome} className={home===true ? styles.selected : styles.child6}>Home</h4>
              <h4 onClick={handleCategory} className={categories===true ? styles.selected : styles.child6}>Categories</h4>
              <h4 className={ styles.child6}>About Us</h4>
              <h4 className={ styles.child6}>Products</h4>
              <h4 className={ styles.child6}>Pet Care</h4>
              <h4 className={ styles.child6}>Contact</h4>
          </div>
                <Buttons />
            </div>
            {categories && <Categories />}
            { home && <Body/>}
      </div>
  )
}

export default Navbar