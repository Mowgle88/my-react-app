import React from 'react'
import classes from './MyInput.module.css'

interface ButtonProps {
  type: string,
  placeholder: string,
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function MyInput(props: ButtonProps) {
  return (
    <input className={classes.MyInput} {...props} />
  )
}
