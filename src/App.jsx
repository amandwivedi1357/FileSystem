import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FileSystem from './component/FileSystem'
import { explorer } from './data'

function App() {
  return (
    <>
      <FileSystem data={explorer.items} />
    </>
  )
}

export default App
