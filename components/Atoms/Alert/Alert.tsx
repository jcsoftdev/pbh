import React, { FC } from 'react'

const Alert:FC<{}> = ({children}) => {
  return (
    <div className='alert'>
      {children}
    </div>
  )
}

export default Alert
