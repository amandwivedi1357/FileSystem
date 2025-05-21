
import './App.css'
import FileSystem from './component/FileSystem'
import { explorer } from './data'

function App() {
  return (
    <div className="app">
      <h1>File System Explorer</h1>
      <FileSystem data={[explorer]} />
    </div>
  )
}

export default App
