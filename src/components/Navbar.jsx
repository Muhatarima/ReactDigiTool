function Navbar({cartCount}) {
  return (
    <div className="navbar max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between bg-white shadow-sm p-3 sticky top-0 z-50">
      
      
      <div className="navbar-start">
        <a className="text-2xl font-bold text-purple-600">DigiTools</a>
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
        <button className="btn btn-ghost btn-circle">
  🛒 <span className="text-red-500">{cartCount}</span>
</button>
        <a href='' className="btn btn-ghost">Login</a>
        <button className="btn bg-purple-600 p-3 text-white rounded-full">Get Started</button>
      </div>

    </div>
  );
}
export default Navbar;