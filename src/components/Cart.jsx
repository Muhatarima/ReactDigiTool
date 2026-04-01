function Cart({ cart, removeCart }) {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        cart.map((product) => (
          <div
            key={product.id}
            className="flex justify-evenly items-center bg-slate-200 shadow-lg mt-8 mb-4 px-5 py-4"
          >
            <span className="text-3xl">{product.icon}</span>

            <div>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>

            <button
              onClick={() => removeCart(product.id)}
              className="rounded-full px-3 py-2 bg-red-200 text-red-600"
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;