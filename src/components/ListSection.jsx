import React from 'react'

function ListSection() {
  return (
    <section className='listSection'>
        <img src="https://static.karofilm.ru/uploads/poster/resize/3f/76/bf/d48bbbde2339228adcbde0d2a0.jpg" alt="film" />
        <div>
          <h3>Фильм</h3>
          <ul className='ulListSection'>
            <li ><button>20:00</button></li>
            <li><button>23:00</button></li>
          </ul>
        </div>
    </section>
  )
}

export default ListSection