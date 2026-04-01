import { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Products from './components/Products';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Steps from "./components/Steps";

function App() {
  let cart=[];
  const [cart,setCart]=useState([]);
  function handleAddToCart(product) {
  setCart([...cart, product]);
};
    function removeCart(product){
        
    }

  const [activeTab, setActiveTab] = useState('products');

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <Banner />

      <div className='flex items-center justify-center gap-1'  >
        <button  className='btn text-center bg-purple-600 py-3 px-10 border-2 hover:bg-white hover:text-purple-600 text-white rounded-full border-none '  onClick={() => setActiveTab('products')}>Products</button>
      <button  className='btn text-center btn-outline hover:bg-purple-600 hover:text-white py-3 px-10 border-2 border-purple-500 text-purple-600 rounded-full' onClick={() => setActiveTab('cart')}>{cart.length === 0 ? 'Cart' : `Cart(${cart.length})`}</button>
      </div>

      {activeTab === 'products' ? <Products /> : <Cart/>}
      <Steps />
      <Pricing/>
      <Footer />
    </div>
  );
}

export default App;