
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';



import CustomNavbar from './Components/Navbar/Navbar';
import { MoviesList } from './Pages/LandingPage/MoviesList';
import { Rating } from './Components/Rating/Rating';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auth } from './Pages/Auth/Auth';
import { MovieDetails } from './Pages/MovieDetails/MovieDetails';



function App() {
  return (
    <div>
      
      {/* <Rating/> */}
      
      

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<MoviesList/>}></Route>
          <Route path='/auth' element={<Auth/>}/>
          <Route path="/moviedetails/:id" element={<MovieDetails/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;


