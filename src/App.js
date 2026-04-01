import { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Products from './components/Products';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Steps from "./components/Steps";
import Stats from './components/Stats';

function App() {
  const [cart, setCart] = useState([]);
  const [activeTab, setActiveTab] = useState('products');

  function handleAddToCart(product) {
    setCart([...cart, product]);
  }

  function removeCart(id) {
    const remaining = cart.filter((item) => item.id !== id);
    setCart(remaining);
  }

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <Banner />
      <Stats />

      <h2 className='font-bold text-5xl text-center mt-7 mb-7'>Premium Digital Tools</h2>
      <p className='text-center mb-8'>
        Choose from our curated collection of premium digital products designed
        <br />
        to boost your productivity and creativity.
      </p>

      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setActiveTab("products")}
          className={`btn rounded-full px-10 py-3 ${
            activeTab === "products"
              ? "bg-purple-600 text-white border-none"
              : "bg-white text-purple-600 border-2 border-purple-500"
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setActiveTab("cart")}
          className={`btn rounded-full px-10 py-3 ${
            activeTab === "cart"
              ? "bg-purple-600 text-white border-none"
              : "bg-white text-purple-600 border-2 border-purple-500"
          }`}
        >
          {cart.length === 0 ? "Cart" : `Cart(${cart.length})`}
        </button>
      </div>

      {activeTab === 'products' ? (
        <>
          <Products handleAddToCart={handleAddToCart} />
          <Steps />
          <Pricing />
        </>
      ) : (
        <Cart cart={cart} removeCart={removeCart} />
      )}

      <Footer />
    </div>
  );
}

export default App;