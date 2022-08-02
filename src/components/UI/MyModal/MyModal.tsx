import React from 'react'
import classes from './MyModal.module.css'

interface MyModalProps {
  children: string | number | React.ReactElement<any, string | React.JSXElementConstructor<any>>,
  visible: boolean,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}


export default function MyModal({children, visible, setVisible}: MyModalProps) {

  const rootClasses = [classes.myModal];

  if(visible) {
    rootClasses.push(classes.active)
  }
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>

    </div>
  )
}
