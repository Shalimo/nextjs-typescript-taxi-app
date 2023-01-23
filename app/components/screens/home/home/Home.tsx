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

const Home = () => {

  const [hide, setHide] = useState(false)

  const hideInterface = () => {
    setHide(!hide)
    console.log(hide)
  }

  return (
    <Layout title="Order">
      <GoogleMap />
      <div className={styles.menuContainer}>
        <BiHide cursor='pointer' onClick={hideInterface} className={styles.hideButton} />
        <IoInformationCircleSharp className={styles.infoButton} />
      </div>

      <div className={styles.formContainer} style={hide ? { display: 'none' } : { display: 'flex' }}>
        <FromInput />
        <ToInput />
        <Variants />
        <OrderButton />
      </div>
    </Layout>
  )
}

export default Home