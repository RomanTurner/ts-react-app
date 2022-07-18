import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h3>Update the count and edit src/App.tsx, state is preserved</h3>
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}> + </button>
      <button onClick={() => setCount((c) => c - 1)}> - </button>
    </div>
  )
}
