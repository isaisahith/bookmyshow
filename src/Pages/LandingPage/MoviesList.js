import React, { useEffect, useState } from 'react'


import { Movie } from '../../Components/Movie/Movie'
import './MovieList.css'
import { NoMovies } from '../../Components/NoMovies.js/NoMovies'
import { Spinner } from 'react-bootstrap'
import { getAllMovies } from '../../APIs/Movie/movie'




export const MoviesList = () => {
  

  const [movieList, setMovieList] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false)

 const [allMovies, setAllMovies] = useState([]);



  const fetchMovies =async()=>{
      try{
        setIsLoading(true);
        
        const newData = await getAllMovies();
        setMovieList(newData);
        setIsLoading(false)
        setAllMovies(newData)
      }catch(err){

      }
      
  }

  useEffect(()=>{
    fetchMovies();
    
    console.log(allMovies)
  },[])


  const onRemove = (_id)=>{
    const filteredMovies = movieList.filter(movie=>movie._id!=_id);

    setMovieList(filteredMovies);
  }

  const handleSearch = (e)=>{

    let searchedvalue = e.target.value;

    setSearch(searchedvalue)

    const filteredData = allMovies.filter(movie=>movie.name.toLowerCase().startsWith(searchedvalue));

    setMovieList(filteredData);

    



  }


  if(isLoading){
    return (
      <div className='movieList-container'>
        <Spinner/>
      </div>
    )
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
          {movieList.map((movie)=><Movie key={movie._id} movie={movie} search={search} onRemove={onRemove}/>)}
      </div>
        
    </div>
  )
}
