import React from 'react'
import Interaction from '../functions/interaction'
import Readdata from '../functions/readdata'

export default function Home() {
  return (
    <div>
      <Readdata/>
      <Interaction/>
    </div>
  )
}
