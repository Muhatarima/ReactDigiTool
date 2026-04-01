import Products from "./Products";
import App from "../App";
function Cart(){
     let total=0;
    return(

  <div className="max-w-6xl mx-auto grid"> <h2>Your Cart</h2>
    {setCart.map((product)=>
       <div className="flex justify-evenly bg-slate-200 shadow-lg mt-8 mb-4 px-5 py-4 border-white-2">
          <img src="{product.icon" alt="" />
          <div><h3>{product.namr}</h3><p>{product.price}</p></div>
          <button onClick={()=>removeCart('product')} className="rounded-full px-3 py-2 bg-red-200 text-red-600 ">Remove</button>
       </div>
    )}
  </div>

        
    )

}


export default Cart;