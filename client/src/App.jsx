// import './App.css'
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Users from './Component/Users.jsx';
import CreateUsers from './Component/CreateUsers.jsx';  
import Updates from './Component/Updates.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users/>}></Route>
          <Route path='/create' element={<CreateUsers/>}></Route>
          <Route path='/update/:id' element={<Updates/>}></Route>
          {/* <Route path='/add' element={}></Route>
          <Route path='/delete' element={}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
