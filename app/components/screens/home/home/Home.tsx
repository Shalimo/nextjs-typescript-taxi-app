import Layout from "../../../layout/Layout"
import FromInput from "../fromInput/FromInput"
import GoogleMap from "../GoogleMap"
import ToInput from "../toInput/ToInput"
import Variants from "../variants/Variants"
import OrderButton from "../OrderButton/OrderButton"
import styles from './Home.module.scss'
import { useRef, useState } from "react"
import { BiHide } from 'react-icons/bi'

const Home = () => {

  const [hide, setHide] = useState(false)

  const hideInterface = () => {
    setHide(!hide)
    console.log(hide)
  }

  return (
    <Layout title="Order">
      <GoogleMap />
      <BiHide cursor='pointer' onClick={hideInterface} className={styles.hideButton} />
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