import React, { useEffect, useState } from 'react'

function ListSection() {

  const [films, setFilm]=useState([]);

  useEffect(()=>{
    const fetchFilms  = async () => {
    try {
      const response = await fetch('http://localhost:3001/film');
      if (!response.ok) {
                throw new Error(data.message || 'Ошибка')
            } 
      const data = await response.json();
      setFilm(data);
    } catch (error) {
            console.error('Ошибка загрузки фильмов:', error.message);
            alert(error.message)
        }
    
  } 
  fetchFilms();
  }, [])
  

  return (
    <section className='listSection'>
      {films.map((film, index) => (
        <div key={index} className="filmCard">
          <img className='filmImg' src={film.img} alt={film.title} />

          <div className='film'>
            <h3 className='titleFilm'>{film.title}</h3>
            <p className='year'>Год: {film.year}</p>
            <p className='pre'>{film.pre}</p>
            <div className="timeButtons">
              {film.time && Object.values(film.time).map((time, index) => (
                <button key={index} className="timeBtn">
                  {time}
                </button>
              ))}
              
            </div>
            <p className='price'>{film.price}</p>
          </div>

        </div>
      ))
      }
    </section>
  );
}

export default ListSection;