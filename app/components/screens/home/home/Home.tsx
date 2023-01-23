import Layout from "../../../layout/Layout"
import FromInput from "../fromInput/FromInput"
import GoogleMap from "../GoogleMap"
import ToInput from "../toInput/ToInput"
import Variants from "../variants/Variants"
import Button from "@/app/components/ui/button/Button"
import styles from './Home.module.scss'

const Home = () => {

  return (
    <Layout title="Order">
      <GoogleMap />
      <div className={styles.formContainer}>
        <FromInput />
        <ToInput />
        <Variants />
        <Button />
      </div>
    </Layout>
  )
}

export default Home