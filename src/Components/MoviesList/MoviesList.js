import React from 'react'

import moviesData from './MoviesData'
import { Movie } from '../Movie/Movie'
import './MovieList.css'


export const MoviesList = () => {
  return (
    <div className='movieList'>
        {moviesData.map((movie)=><Movie movie={movie}/>)}
    </div>
  )
}
