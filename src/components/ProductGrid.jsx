import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
    console.log(products);

    return (
        <section className="product-grid container-fluid p-0">
            <div className="row g-3">
                {products.length > 0 ?
                products.map(product => (
                    <div className="col-lg-4 col-md-6 col-sm-12" key={product.id}>
                        <ProductCard
                            id={product.id}
                            productName={product.name}
                            price={product.price}
                            imageUrl={product.imageUrl}
                        />
                    </div>
                )) : (<div className='text-center fs-3 mb-5'>No Products Found!</div>)}
            </div>
        </section>
    );
}

export default ProductGrid;
