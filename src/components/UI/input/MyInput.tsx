import React from 'react'
import classes from './MyInput.module.css'

interface InputProps {
  type: string,
  placeholder: string,
  value?: string,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function MyInput(props: InputProps) {
  return (
    <input className={classes.MyInput} {...props} />
  )
}
