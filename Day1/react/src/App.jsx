export default function App() {
  const title = "Product Categories";
  const categories = ["Electronics", "Jewelry", "Men's Clothing","Women's Clothing"];
  return (
  <div id="category-section" className="p-5">
      <p className="text-2xl text-red-500 mb-3">{title}</p>
      <div>
          {categories.map((category) => (
              <button className="border border-black px-5 py-2 me-2">
          {category}
          </button>
          ))}
      </div>
  </div>
  
  
  );
  
  
  }