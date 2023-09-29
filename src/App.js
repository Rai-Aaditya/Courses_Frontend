import './App.css';
import Header from './components/headers';
import Addcourse from './pages/addCourse';
import Listcourses from './pages/listCourses'
import Addinstance from './pages/addInstance'
import Listinstances from './pages/listInstances'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/addCourse' element={<Addcourse/>}/>
          <Route path='/listCourses' element={<Listcourses/>} />
          <Route path='/addInstance' element={<Addinstance/>} />
          <Route path='/listInstances' element={<Listinstances/>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
