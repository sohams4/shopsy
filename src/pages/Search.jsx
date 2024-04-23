import { useCallback, useEffect, useState } from 'react';
import { Footer, Header, PageTitle, ProductGrid } from '../components';
import { useParams } from 'react-router-dom';

// Example static data for demonstration
const staticProducts = [
    { id: 1, name: "Widget", description: "A useful widget", category: "Tools" },
    { id: 2, name: "Gadget", description: "A fancy gadget", category: "Gadgets" },
    { id: 3, name: "Thing", description: "Just a thing", category: "Misc" },
];

const Search = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");
    let { query } = useParams();

    const fetchProducts = useCallback(() => {
        setLoading(true);
        setError("");
        try {
            // Simulating search with static data
            setTimeout(() => {
                const filteredProducts = staticProducts.filter(p =>
                    p.name.toLowerCase().includes(query.toLowerCase())
                );
                setProducts(filteredProducts);
                setLoading(false);
            }, 500); // Simulate network delay
        } catch (error) {
            console.error(error);
            setError("Failed to load products."); // Simple error handling
            setLoading(false);
        }
    }, [query]);

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <>
            <Header />
            <PageTitle title={"Search"} />
            {loading ? (
                <div className='d-flex justify-content-center align-items-center h-100 w-100'>
                    <span className="spinner-grow spinner-grow bag" aria-hidden="true"></span>
                </div>
            ) : error ? (
                <p>Error: {error}</p> // Displaying error message
            ) : (
                <ProductGrid products={products} />
            )}
            <Footer />
        </>
    );
}

export default Search;
