import styles from './Button.module.scss'
import { ButtonHTMLAttributes, FC } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  cb: () => void,
  isActive?: boolean,
  title: string,
  success: string
}

const Button: FC<IButton> = ({ cb, isActive, title, success }) => {
  return (
    <button className={isActive ? styles.button : styles.inativeButton} onClick={cb} disabled={!isActive}>
      <p>{title}</p>
    </button>
  )
}

export default Button