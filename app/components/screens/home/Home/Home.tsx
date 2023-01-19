import Layout from "../../../layout/Layout"
import FromInput from "../FromInput/FromInput"
import GoogleMap from "../GoogleMap"
import styles from './Home.module.scss'

const Home = () => {
  return (
    <Layout title="Order">
      <GoogleMap/>
      <div className={styles.formContainer}>
        <FromInput/>
      </div>
    </Layout>
  )
}

export default Home