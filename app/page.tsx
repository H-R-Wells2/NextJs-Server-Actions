import { addProductToDatabase } from "@/actions/serverAtions";
import AddProductButton from "@/components/AddProductButton";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/typing";

export default async function Home() {
  const res = await fetch(
    "https://653e400cf52310ee6a9abc15.mockapi.io/products",
    {
      cache: "no-cache",
      next: {
        tags: ["products"],
      },
    }
  );

  const products: Product[] = await res.json();

  return (
    <div className="pt-4 pb-8">
      <h1 className="text-center mb-8 font-bold text-2xl">Product Warehouse</h1>
      <form
        action={addProductToDatabase}
        className="flex flex-col max-w-2xl mx-auto gap-2"
      >
        <input
          name="product"
          className="border border-gray-600 p-2 rounded-lg outline-none"
          placeholder="Enter Product Name..."
          autoComplete="off"
        />
        <input
          name="price"
          className="border border-gray-600 p-2 rounded-lg outline-none"
          placeholder="Enter Price..."
          autoComplete="off"
        />
        <button className="p-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white">
          Add Product
        </button>
      </form>

      <h2 className="text-center my-8 font-semibold text-2xl">
        List of Products
      </h2>
      <div className="flex justify-center mb-8">
      <AddProductButton />
      </div>

      <div className="flex flex-wrap justify-center gap-5 mx-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
