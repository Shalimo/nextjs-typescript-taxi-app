import Layout from "../../../layout/Layout"
import FromInput from "../fromInput/FromInput"
import GoogleMap from "../GoogleMap"
import ToInput from "../toInput/ToInput"
import Variants from "../variants/Variants"
import OrderButton from "../OrderButton/OrderButton"
import styles from './Home.module.scss'

const Home = () => {

  return (
    <Layout title="Order">
      <GoogleMap />
      <div className={styles.formContainer}>
        <FromInput />
        <ToInput />
        <Variants />
        <OrderButton />
      </div>
    </Layout>
  )
}

export default Home