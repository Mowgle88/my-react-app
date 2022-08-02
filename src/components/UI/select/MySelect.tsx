import React from 'react'
import classes from './MySelect.module.css'

interface SelectProps {
  defaultValue: string,
  options: {
    value: string,
    name: string,
  }[],
  value: string,
  onChange: (event: Options) => void
}

export type Options = 'title' | 'description';

export default function MySelect({options, defaultValue, value, onChange}: SelectProps) {
  return (
    <select
      value={value}
      onChange={event => onChange(event.target.value as Options)}
    >
      <option disabled value="">{defaultValue}</option>
      {options.map(option => <option value={option.value} key={option.value}>{option.name}</option>)}
    </select>
  )
}
