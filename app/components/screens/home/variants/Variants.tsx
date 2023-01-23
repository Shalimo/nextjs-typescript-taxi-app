import styles from './Variants.module.scss'
import Image from 'next/image'
import { variants } from '@/app/data/data'
import { useActions } from '@/app/hooks/useActions'
import { useTypedSelector } from '@/app/hooks/useTypedSelector'

const Variants = () => {

  const { setVariantOfTrip } = useActions()
  const { selectedVariant, time } = useTypedSelector(state => state.slice)

  return (
    <div className='hide-scroll-bar mt-5 h-64 flex overflow-y-auto rounded-lg shadow-slate-400 shadow-md bg-white'>
        <div className={styles.variantsContainer}>
            {variants.map(variant => (
              <button key={variant.id} className={styles.variantButton} style={variant.id === selectedVariant ? { opacity: 1 } : { opacity: 0.5 }} onClick={() => setVariantOfTrip(variant.id)}>
                  <div className='flex flex-row items-center'>
                  <Image src={variant.car} alt={variant.title} width={50} height={50} />
                  <div className='flex flex-row ml-5 w-52'>
                    <div className='flex flex-col'>
                      <p className='font-bold mr-auto'>{variant.title}</p>
                      <p className='font-bold text-[10px] mr-auto'>{typeof time === 'string' ? null : `${Math.floor(time)} min.`}</p>
                    </div>
                      <p className='ml-auto font-bold'>20$</p>
                    </div>
                  </div>
                </button>
            ))}
        </div>
    </div>
  )
}

export default Variants