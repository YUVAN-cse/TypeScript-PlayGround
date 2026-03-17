import React from 'react'

type buttonProps = {
    data: string
}

const Button = ({data}: buttonProps) => {
  return (
    <>
      <button>{data}</button>
    </>
  )
}

export default Button



