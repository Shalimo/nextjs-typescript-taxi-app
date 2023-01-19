import styles from './Variants.module.scss'
import Image from 'next/image'
import { variants } from '@/app/data/data'

const Variants = () => {
  return (
    <div className='hide-scroll-bar mt-5 h-64 flex overflow-y-auto'>
        <div className={styles.variantsContainer}>
            {variants.map(variant => (
                <button key={variant.id} className={styles.variantButton}>
                  <div className='flex flex-row items-center'>
                    <Image src={variant.car} alt={variant.title} width={50} height={50}/>
                    <div className='flex flex-row ml-5 w-52'>
                      <p>{variant.title}</p>
                      <p className='ml-auto'>20$</p>
                    </div>
                  </div>
                </button>
            ))}
        </div>
    </div>
  )
}

export default Variants