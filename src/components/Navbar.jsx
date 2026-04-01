function Navbar({cartCount}) {
  return (
    <div className="navbar px-6 md:px-12 lg:px-24 flex items-center justify-between bg-white shadow-sm p-3 sticky top-0 z-50">
      
      
      <div className="navbar-start">
        <a className="text-3xl px-4 font-bold text-purple-600">DigiTools</a>
      </div>

      
      <div className="navbar-center ">
        <ul className="menu menu-horizontal flex text-center items-start gap-3 ">
          <li><a href=''className="font-bold text-bold text-gray-800 " >Products</a></li>
          <li><a href=''className="font-bold text-bold text-gray-800 " >Features</a></li>
          <li><a href=''className="font-bold text-bold text-gray-800 " >Pricing</a></li>
          <li><a href=''className="font-bold text-bold text-gray-800 " >Testimonials</a></li>
          <li><a href=''className="font-bold text-bold text-gray-800 " >FAQ</a></li>
        </ul>
      </div>

    
      <div className="navbar-end gap-3 items-center flex">
 <div className="relative">
  <button className="btn btn-ghost btn-circle text-xl">
    🛒
  </button>

  {cartCount > 0 && (
    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
      {cartCount}
    </span>
  )}
</div>
        <a href='' className="btn btn-ghost">Login</a>
        <button className="btn bg-purple-600 px-6 py-3  hover:bg-white hover:text-purple-600 hover:border-purple-600 hover:border-2 text-white rounded-full">Get Started</button>
      </div>

    </div>
  );
}
export default Navbar;