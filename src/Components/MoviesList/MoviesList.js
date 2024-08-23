import React, { useState } from 'react'

import moviesData from './MoviesData'
import { Movie } from '../Movie/Movie'
import './MovieList.css'
import { NoMovies } from '../NoMovies.js/NoMovies'


export const MoviesList = () => {
  

  const [movieList, setMovieList] = useState(moviesData);
  const [search, setSearch] = useState('');

  const handleSearch = (e)=>{

    let searchedvalue = e.target.value;

    setSearch(searchedvalue)

    const filteredData = moviesData.filter(movie=>movie.name.toLowerCase().startsWith(searchedvalue));

    setMovieList(filteredData);

    



  }

  if(movieList.length==0){
    return (
      <div className='movieList-container'>
        <input name='search' placeholder='moviename'
        onChange={(e)=>handleSearch(e)}/>
      <div className='movieList'>
          <NoMovies/>
      </div>
        
    </div>
    )
  }
  return (
    <div className='movieList-container'>
        <input name='search' placeholder='moviename'
        onChange={(e)=>handleSearch(e)}/>
      <div className='movieList'>
          {movieList.map((movie)=><Movie movie={movie} search={search}/>)}
      </div>
        
    </div>
  )
}
