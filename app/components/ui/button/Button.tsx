import styles from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'

interface IButton {
  cb: () => void,
  isActive?: boolean,
  title: string
}

const Button: FC<IButton> = ({ cb, isActive, title }) => {
  return (
    <button className={isActive ? styles.button : styles.inativeButton} onClick={cb}>
      <p>{title}</p>
    </button>
  )
}

export default Button