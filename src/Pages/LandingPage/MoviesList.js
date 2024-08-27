import React, { useEffect, useState } from 'react'


import { Movie } from '../../Components/Movie/Movie'
import './MovieList.css'
import { NoMovies } from '../../Components/NoMovies.js/NoMovies'
import { Spinner } from 'react-bootstrap'
import { getAllMovies } from '../../APIs/Movie/movie'
import { Filters } from '../../Components/Filters/Filters'
import CustomNavbar from '../../Components/Navbar/Navbar'




export const MoviesList = () => {
  

  const [movieList, setMovieList] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false)

 const [allMovies, setAllMovies] = useState([]);
 const [language, setLanguage] = useState('');

 const [user, setUser] = useState(false);



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
    
    
  },[])


  const onRemove = (_id)=>{
    const filteredMovies = movieList.filter(movie=>movie._id!=_id);

    setMovieList(filteredMovies);
  }


  const handleFilters =()=>{
      handleSearch();
      // handleFilters(language);


  }

  const handleLanguage =(lan)=>{
    setLanguage(lan)
  }

 

  const handleSearch = ()=>{

    

    

    const filteredData = allMovies.filter(movie=>movie.name.toLowerCase().startsWith(search));

    setMovieList(filteredData);

  }




  const filterByLanguage =(language)=>{

    if(language.toLowerCase()=='all'){
      handleSearch();
      return;
    }

    const filteredData = allMovies.filter(movie=>movie.name.toLowerCase().startsWith(search));
    
    const newMovies = filteredData.filter(m=>m.language.toLowerCase()==language.toLowerCase());
    setMovieList(newMovies);
  }

  const dummyFun = ()=>{
    console.log("dummy fun")
  }


  


  useEffect(()=>{
    
    handleSearch()
    filterByLanguage(language);
    
  },[search, language])


  if(isLoading){
    return (
      <div>
        <CustomNavbar user={user} setUser={setUser}/>
        <div className='movieList-container'>
        
        <Spinner/>
      </div>
      </div>
    )
  }

  

  if(movieList.length==0){


    return (
      <div>
        <CustomNavbar user={user} setUser={setUser}/>
      <div className='movieList-container'>
          
        
        <Filters setSearch={setSearch} handleLanguage={handleLanguage} />
          <NoMovies/>
      </div>

      </div>
        
    
    )
  }
  return (
    <div>
       <CustomNavbar user={user} setUser={setUser}/>
    <div className='movieList-container'>
        {/* <input name='search' placeholder='moviename'
        onChange={(e)=>handleSearch(e)}/> */}
       
        <Filters setSearch={setSearch} handleLanguage={handleLanguage}/>
        
      <div className='movieList'>
          {movieList.map((movie)=><Movie key={movie._id} movie={movie} search={search} onRemove={onRemove} user={user}/>)}
      </div>
        
    </div>
    </div>
  )
}
