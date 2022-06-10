import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Pages/Home/Blogs/Blogs';
import Home from './components/Pages/Home/Home';
import ProjectDetail from './components/Pages/Home/Projects/Project/ProjectDetail';

function App() {

  const [project, setProject] = useState({});

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/project/:id' element={<ProjectDetail project={project}></ProjectDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
