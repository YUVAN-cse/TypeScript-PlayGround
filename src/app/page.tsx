'use client'

import React from 'react'
import { useState } from 'react'
import Button from '@/Button'


const page = () => {

  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Home</h1>
      <Button data="yuvan"/>
    </>
  )
}

export default page