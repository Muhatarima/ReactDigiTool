import productsData from '../products.json';

function Products({ handleAddToCart }) {
  function getTagStyle(tagType) {
    if (tagType === "best-seller") return "bg-yellow-100 text-red-500";
    if (tagType === "new") return "bg-green-100 text-green-600";
    if (tagType === "popular") return "bg-blue-100 text-purple-600";
    return "";
  }

  return (
    <div className="grid max-w-6xl mx-auto mt-4 justify-center items-center grid-cols-1  lg:grid-cols-3 space-y-2 shadow-lg gap-8">
      {productsData.map((product) => (
        <div key={product.id} className="card w-96 space-y-3 py-5 text-center px-4 bg-slate-200 shadow-sm">
          <div className="card-body">
            <span className={`badge badge-xs rounded-full my-3 p-1 ${getTagStyle(product.tagType)}`}>
              {product.tag}
            </span>

            <p className="text-2xl mt-4 mb-3">{product.icon}</p>
            <h2 className="text-2xl mb-3 font-bold">{product.name}</h2>
            <p className="mb-3">{product.description}</p>
            <span className="text-xl mb-3">
              ${product.price}/{product.period}
            </span>

            <ul className="mt-6 flex flex-col gap-2 text-xs">
              {product.features.map((feature, index) => (
                <li key={index}>✔ {feature}</li>
              ))}
            </ul>

            <div className="mt-6">
              <button
                onClick={() => handleAddToCart(product)}
                className="bg-purple-600 text-white border border-purple-600 rounded-full px-20 py-3 hover:bg-white hover:text-purple-600 hover:border-purple-600 hover:border-2 font-medium"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;