import productsData from '../products.json';

function Products() {
  function getTagStyle(tagType) {
    if (tagType === "best-seller") return "bg-yellow-100 text-red-500";
    if (tagType === "new") return "bg-green-100 text-green-600";
    if (tagType === "popular") return "bg-blue-100 text-purple-600";
    return "";
  }

  return (
    <div className="grid grid-cols-3 gap-6">
      {productsData.map((product) => (
        <div key={product.id} className="card w-96 bg-base-100 shadow-sm">
          <div className="card-body">
            <span className={`badge badge-xs rounded-full p-1 ${getTagStyle(product.tagType)}`}>
              {product.tag}
            </span>

            <p className="text-2xl">{product.icon}</p>
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p>{product.description}</p>
            <span className="text-xl">
              ${product.price}/{product.period}
            </span>

            <ul className="mt-6 flex flex-col gap-2 text-xs">
              {product.features.map((feature, index) => (
                <li key={index}>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <button className="btn btn-primary rounded-full p-3 btn-block">
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