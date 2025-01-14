import './Player.css'
import back_arrow from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const {id} = useParams()
  const navigate = useNavigate()

  const [apiDate, setApiData]=useState({
    name: '',
    key:'',
    published_at: '',
    type: ''

  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWU5ZjM4Y2IyMDFhNWYxMDVjZTEwMjk4ZDFmMzBmMCIsIm5iZiI6MTczMjU0MDIxNC43OTksInN1YiI6IjY3NDQ3NzM2ODkzYmU2MDliZTNhOTkzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OEDTdL_zw_7-DSvSPm7svfnIlBvsk-JqdoE63FLSTCs'
    }
  };
   useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));

   }, [])
 
  return (
    <div className='player'>
      <img src={back_arrow} alt=""  onClick={()=>{navigate(-2)}}/>
      <iframe width="90%" height='90%'
      title='trailer' allowFullScreen src={`https://youtube.com/embed/${apiDate.key}`} />
      <div className='player-info'>
        <p>{apiDate.published_at.slice(0, 10)}</p>
        <p>{apiDate.name}</p>
        <p>{apiDate.type}</p>
      </div>
    </div>
  )
}

export default Player