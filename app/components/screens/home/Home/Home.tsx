import Layout from "../../../layout/Layout"
import FromInput from "../fromInput/FromInput"
import GoogleMap from "../GoogleMap"
import ToInput from "../toInput/ToInput"
import styles from './Home.module.scss'

const Home = () => {
  return (
    <Layout title="Order">
      <GoogleMap/>
      <div className={styles.formContainer}>
        <FromInput/>
        <ToInput/>
      </div>
    </Layout>
  )
}

export default Home