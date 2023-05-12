import React from 'react'
import './Card.css'

export const Card = () => {
  return (
    <div className='card-container'>
      Crunchy Butterscotch
      <p>Butterscotch & Cashews</p>
      <div className="precio-card">
        <span>Bs 18</span>
        <button>Add</button>
      </div>
    </div>
  )
}


