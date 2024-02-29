import React, { useState } from 'react'
import Xhr from '../api'

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const onClickCategory = index => {
    setActiveIndex(index)
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <div>
        <ul>
          <li onClick={() => onClickCategory(0)} className={activeIndex === 0 ? 'active' : ''}>
            Aaa
          </li>
          <li onClick={() => onClickCategory(1)} className={activeIndex === 1 ? 'active' : ''}>
            Bbb
          </li>
          <li onClick={() => onClickCategory(2)} className={activeIndex === 2 ? 'active' : ''}>
            Ccc
          </li>
          <li onClick={() => onClickCategory(3)} className={activeIndex === 3 ? 'active' : ''}>
            Ddd
          </li>
          <li onClick={() => onClickCategory(4)} className={activeIndex === 4 ? 'active' : ''}>
            Eee
          </li>
        </ul>
      </div>
      <Xhr />
    </div>
  )
}

export default App
