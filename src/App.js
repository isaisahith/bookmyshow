
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';



import CustomNavbar from './Components/Navbar/Navbar';
import { MoviesList } from './Components/MoviesList/MoviesList';



function App() {
  return (
    <div>
      
      
      <CustomNavbar/>

      <MoviesList/>
      
    </div>
  );
}

export default App;


