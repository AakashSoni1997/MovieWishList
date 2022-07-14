import React from 'react'
import MoviesContainer from './component/movieApp/MoviesContainer'
const App = (props) => {
  return (
    <div className='container'>
      <h2 className='display-3'>Movies App</h2>

      <MoviesContainer/>
    </div>
  )
}

export default App


