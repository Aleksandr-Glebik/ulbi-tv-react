import React, { useState } from 'react'

function App() {

  const [likes, setLikes] = useState(0)
  const [value, setValue] = useState('Текст внутри инпута')

  function increment() {
    setLikes(likes + 1)
  }
  function decrement() {
    setLikes(likes - 1)
  }

  return (
    <div className='App'>
       <h2>{likes}</h2>
       <button onClick={ increment }>Increment</button>
       <button onClick={ decrement }>Decrement</button>
       <hr />
       <input
         type={'text'}
         value={value}
         onChange={ event => setValue(event.target.value)}
        />
       <h1>{value}</h1>
    </div>
  )
}

export default App
