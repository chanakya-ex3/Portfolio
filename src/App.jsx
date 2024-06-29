import React from 'react'
import { Preloader } from './Components'
import { HomePage } from './Pages'

const App = () => {
  return (
    <div>
      <Preloader />
      <HomePage  />
    </div>
  )
}

export default App