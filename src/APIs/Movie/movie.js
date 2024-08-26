


export const getAllMovies = async()=>{
    console.log('in get all movies')
    const resp =  await fetch("https://movie-booking-application.onrender.com/mba/api/v1/movies");
    const data = await resp.json();

    return data;
}


export const getMovieDetails = async(id)=>{
    const resp = await fetch(`https://movie-booking-application.onrender.com/mba/api/v1/movies/${id}`);
    const data = await resp.json();

    return data;
}