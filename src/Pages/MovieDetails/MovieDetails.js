import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getMovieDetails } from '../../APIs/Movie/movie';
import { Spinner } from 'react-bootstrap';
import './MovieDetails.css'
import ReactPlayer from 'react-player';
import { MoviePosterDetails } from './MoviePosterDetails/MoviePosterDetails';

export const MovieDetails = () => {

  const {id} = useParams();


  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetch =async()=>{
    const data = await getMovieDetails(id);
    setMovieData(data);
    setIsLoading(false);
  }

  useEffect(()=>{
    fetch();
  },[])

  console.log(movieData);


  if(isLoading){
    return  <div className='movie-details-container'>
        <Spinner/>
    </div>
    
  }


  
  
  return (
    <div className='movie-details-container'>
      <div className='movie-poster-container'>
        <img src={movieData.posterUrl} className='poster'/>
          <MoviePosterDetails movieData={movieData}/>

      </div>

      <div className='trailer'>
          <h5>Watch Trailer</h5>
          <ReactPlayer url={movieData.trailerUrl}/>
      </div>
      
    </div>
  )
}
