import Spinner from 'react-bootstrap/Spinner';
import './Spinner.css'

function CustomSpinner() {
  return <div className='spinner' style={{margin:"50px"}}><Spinner animation="border"  /></div>;
}

export default CustomSpinner;