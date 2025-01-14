import './TitleCards.css'
import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const TitleCards = ({title, category}) => {
  
  const [apiData, setApiData] = useState([])
  const cardsRef = useRef()

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: import.meta.env.VITE_AUTH
    }
  };
  
 

  const handleWheel =(e)=>{
    e.preventDefault()
    cardsRef.current.scrollLeft += e.deltaY
  }

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:'now_playing'}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel)
  }, [])
  return (
    <div className='title-cards'>
        <h2> {title}</h2>
        <div className="card-list" ref={cardsRef}>
            {apiData.map((card, index)=>{
              return  <Link to={`/player/${card.id}`} className="card" key={index}>
                  <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
                  <p>{card.original_title}</p>
       
                </Link>
            })}
        </div>
    </div>
  )
}

export default TitleCards