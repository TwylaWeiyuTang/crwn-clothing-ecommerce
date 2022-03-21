import './App.css';
import { Route } from 'react-router-dom';
import HomepageComponent from './pages/homepage/HomepageComponent';
import { Routes } from 'react-router-dom';
import ShopComponent from './pages/shoppage/ShopComponent';
import HeaderComponent from './components/header/HeaderComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <Routes>
        <Route exact path='/' element = {<HomepageComponent />} />
        <Route path='/shop' element = {<ShopComponent />} />
      </Routes>
    </div>
  );
}

export default App;
