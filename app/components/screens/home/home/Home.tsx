import Layout from "../../../layout/Layout"
import FromInput from "../fromInput/FromInput"
import GoogleMap from "../GoogleMap"
import ToInput from "../toInput/ToInput"
import Variants from "../variants/Variants"
import OrderButton from "../OrderButton/OrderButton"
import styles from './Home.module.scss'
import { useState } from "react"
import { BiHide } from 'react-icons/bi'
import { IoInformationCircleSharp } from 'react-icons/io5'
import { information } from "@/app/data/data"

const Home = () => {

  const [hide, setHide] = useState(false)
  const [info, setInfo] = useState(false)

  const hideInterface = () => {
    setHide(!hide)
  }

  const showInfo = () => {
    setInfo(!info)

    setTimeout(() => {
      setInfo(false)
    }, 5000)
  }

  return (
    <Layout title="Order">
      <GoogleMap />
      <div className={styles.menuContainer}>
        <BiHide onClick={hideInterface} className={styles.hideButton} />
        <IoInformationCircleSharp onClick={showInfo} className={styles.infoButton} />
      </div>
      <div className={styles.formContainer} style={hide ? { display: 'none' } : { display: 'flex' }}>
        <FromInput />
        <ToInput />
        <Variants />
        <OrderButton />
      </div>
      {info ? <div className={styles.popup}>
        {information.information}
      </div> : null} 
    </Layout>
  )
}

export default Home