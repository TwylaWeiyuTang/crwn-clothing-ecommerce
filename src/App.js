import './App.css';
import { Route } from 'react-router-dom';
import HomepageComponent from './pages/homepage/HomepageComponent';
import { Routes } from 'react-router-dom';
import ShopComponent from './pages/shoppage/ShopComponent';

function App() {
  return (
    <Routes>
      <Route exact path='/' element = {<HomepageComponent />} />
      <Route path='/shop' element = {<ShopComponent />} />
    </Routes>
  );
}

export default App;
