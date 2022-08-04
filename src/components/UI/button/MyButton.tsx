import React from 'react'
import classes from './MyButton.module.css'
interface ButtonProps {
  children: string,
  style?: {
    [className: string]: string
  },
  disabled?: boolean,
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function MyButton({children, ...props}: ButtonProps) {
  return (
    <button {...props} className={classes.myBtn}>
      {children}
    </button>
  )
}
