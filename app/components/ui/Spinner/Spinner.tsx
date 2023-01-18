import React from 'react'
import styles from './Spinner.module.scss'

const Spinner = () => {
  return (
    <div className={styles.spinnerConainer}>
        <div className={styles.spinner}></div>
        <p>Taxi App</p>
    </div>
  )
}

export default Spinner