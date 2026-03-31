import { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Products from './components/Products';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  let cart = [];
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <Banner />

      <button onClick={() => setActiveTab('products')}>Products</button>
      <button onClick={() => setActiveTab('cart')}>{cart.length === 0 ? 'Cart' : `Cart(${cart.length})`}</button>

      {activeTab === 'products' ? <Products /> : <Cart />}

      <Footer />
    </div>
  );
}

export default App;