function Cart({ cart, removeCart }) {
  return (
    <div className="max-w-6xl mx-auto mt-4">
      {cart.length === 0 ? (
        <p className="font-bold mt-2 mb-6 text-center text-red-600 text-4xl">
          Your cart is empty
        </p>
      ) : (
        <>
            <h2 className="font-extrabold text-3xl mt-5 text-center">Your Cart</h2>

           {cart.map((product) => (
            <div
                       key={product.id}
              className="flex justify-evenly bg-slate-200 shadow-lg mt-8 mb-4 px-5 py-4"
            >
                  <span className="text-3xl mt-2 mb-6">{product.icon}</span>

              <div>
                <h3 className="font-bold text-2xl">{product.name}</h3>
                <p className="text-gray-700">${product.price}</p>
              </div>

              <button
                onClick={() => removeCart(product.id)}
                className="rounded-full px-3 py-2 bg-red-200 text-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default Cart;