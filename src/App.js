
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/public/Footer';
import Main from './components/public/Main';
import { NavBar } from './components/public/NavBar';
import Main2 from './components/public/Main2';

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route exact path='/Main' Component={Main}>Main1</Route>
        <Route exact path='/Main2' Component={Main2}>Main2</Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
