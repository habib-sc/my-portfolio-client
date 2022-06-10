import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home';
import ProjectDetail from './components/Pages/Home/Projects/Project/ProjectDetail';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/project/:id' element={<ProjectDetail></ProjectDetail>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
