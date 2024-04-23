import { Footer, Header, PageTitle, ProductGrid } from '../components';
import { useEffect, useState } from 'react';

// Example static data for products
const staticProducts = [
  {
    id: 1,
    name: "Widget",
    price: "$20",
    category: "all",
    subCategory: "tools",
    imageUrl: "../src/assets/image3.png"  // Random shirt image
  },
  {
    id: 2,
    name: "Gadget",
    price: "$25",
    category: "all",
    subCategory: "gadgets",
    imageUrl: "https://source.unsplash.com/random/200x200?tshirt"  // Random t-shirt image
  },
  {
    id: 3,
    name: "Doohickey",
    price: "$15",
    category: "all",
    subCategory: "hardware",
    imageUrl: "https://source.unsplash.com/random/200x200?oversized-shirt"  // Random oversized t-shirt image
  },
  // Add more static products as needed
];

const Shop = ({ category, subCategory }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  // Simulate fetching products
  const fetchProducts = () => {
    setLoading(true);
    setTimeout(() => {
      // Filter products based on category and subCategory
      const filteredProducts = staticProducts.filter(p => 
        (category === 'all' || p.category === category) &&
        (!subCategory || p.subCategory === subCategory)
      );
      setProducts(filteredProducts);
      setLoading(false);
    }, 500); // Simulate network delay
  };

  useEffect(() => {
    fetchProducts();
  }, [category, subCategory]);

  return (
    <>
      <Header />
      <PageTitle title={`Shop / ${category} - ${subCategory || ''}`} />
     
      <Footer />
    </>
  );
}

export default Shop;
