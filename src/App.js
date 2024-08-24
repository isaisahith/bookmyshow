
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';



import CustomNavbar from './Components/Navbar/Navbar';
import { MoviesList } from './Components/MoviesList/MoviesList';
import { Rating } from './Components/Rating/Rating';



function App() {
  return (
    <div>
      
      {/* <Rating/> */}
      
      <CustomNavbar/>

      <MoviesList/>
      
    </div>
  );
}

export default App;


