import './App.css'
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main.jsx';
import NewProducts from './pages/NewProducts.jsx';
import Promotions from './pages/Promotions.jsx';
import ClothesForWoman from './pages/ClothesForWoman.jsx';
import ClothesForMan from './pages/ClothesForMan.jsx';
import Accessories from './pages/Accessories.jsx';
import Sport from './pages/Sport.jsx';
import Bestsellers from './pages/Bestsellers.jsx';
import Underwear from './pages/Underwear.jsx';
import ViewAll from './pages/ViewAll.jsx';
import BecomeSeller from './pages/BecomeSeller.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Orders from './pages/Orders.jsx';
import PlaceOrder from './pages/PlaceOrder.jsx';
import Collection from './pages/Collection.jsx';
import FavoriteProducts from './pages/FavoriteProducts.jsx';
import About from './pages/About.jsx';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/new-products" element={<NewProducts/>} />
        <Route path="/promotions" element={<Promotions/>} />
        <Route path="/clothes-for-woman" element={<ClothesForWoman/>} />
        <Route path="/clothes-for-man" element={<ClothesForMan/>} />
        <Route path="/accessories" element={<Accessories/>} />
        <Route path="/sport" element={<Sport/>} />
        <Route path="/bestsellers" element={<Bestsellers/>} />
        <Route path="/underwear" element={<Underwear/>} />
        <Route path="/view-all" element={<ViewAll/>} />
        <Route path="/become-seller" element={<BecomeSeller/>} />
        <Route path="/product/:productId" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/place-order" element={<PlaceOrder/>} />
        <Route path="/collection" element={<Collection/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/favorite-products" element={<FavoriteProducts/>} />
      </Routes>
    </div>
  )
}

export default App;
