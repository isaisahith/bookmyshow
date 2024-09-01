
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';



import CustomNavbar from './Components/Navbar/Navbar';
import { MoviesList } from './Pages/LandingPage/MoviesList';
import { Rating } from './Components/Rating/Rating';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auth } from './Pages/Auth/Auth';
import { MovieDetails } from './Pages/MovieDetails/MovieDetails';
import { AuthHOC } from './hoc/AuthHOC';
import { Theatre } from './Pages/threatres/Theatre';
import { PageNotfound } from './Pages/Auth/PageNotfound';
import { AddMovie } from './Pages/addMovie/AddMovie';
import { roles } from './utils/constants';



function App() {
  return (
    <div>
      
      {/* <Rating/> */}
      
      

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<MoviesList/>}></Route>
          
          <Route path="/moviedetails/:id" element={<AuthHOC roles={roles.bothAdminCustomer}><MovieDetails/></AuthHOC>}/>
          <Route path = '/login' element={
            <Auth/>}
          />
          <Route path='/add' element ={<AuthHOC roles={roles.onlyAdmin}><AddMovie/></AuthHOC>}/>
          <Route path='/theatre' element ={<AuthHOC><Theatre/></AuthHOC>}/>
          <Route path='*' element={<PageNotfound/>}/>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;


