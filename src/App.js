//Router 
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
//Styles 
import './Style.css'
//Main  
import Main from './Main';
//Routing 
import Example from './Example';

//import Main from './Pages/Main';

function App() {
 
  return (
    <Router>
    <div className='App'>
        <Link to='/'></Link>
        <Link to='/example'></Link>
      <Routes>
       <Route path='/' element={<Main />} /> 
       <Route path='/users/:id' element={<Example />} /> 
       
      </Routes>
    </div>
    </Router>

  );
}


export default App;

