import './App.css';
import { Route } from 'react-router-dom';
import HomepageComponent from './pages/homepage/HomepageComponent';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path='/' element = {<HomepageComponent />} />
    </Routes>
  );
}

export default App;
