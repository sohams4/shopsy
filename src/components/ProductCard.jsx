import { useContext } from "react";
import { Link } from "react-router-dom";
import BagContext from "../contexts/BagContext";

const ProductCard = ({ id, productName, regularPrice, salePrice, image }) => {
    const { addToBag } = useContext(BagContext);

    const item = {
        id,
        productName,
        image,
        salePrice,
        quantity: 1
    };

    const handleAddToBag = () => {
        addToBag(item);
    };

    const handleImageError = (e) => {
        e.target.src = "https://via.placeholder.com/150"; // Fallback image URL
    };

    return (
        <div className="card product-card position-relative p-3">
            <Link to={`/product/${id}`} className="product-link d-block position-relative overflow-hidden">
                <img 
                    className="object-fit-cover w-100 h-100" 
                    src={image || "https://via.placeholder.com/150"} 
                    alt={productName} 
                    onError={handleImageError} 
                />
            </Link>
            <div className="container-fluid p-3 pb-0">
                <div className="row">
                    <div className="col-8">
                        <h2 className="card-heading font-color text-uppercase fs-4">{productName}</h2>
                        <button onClick={handleAddToBag} className="btn add-cart-btn fw-medium p-1 px-3" aria-label={`Add ${productName} to bag`}>
                            <span className="fas mx-1 fs-5">&#xf290;</span>
                            <span className="pe-2">Add to bag</span>
                        </button>
                    </div>
                    <div className="col-4">
                        <p className="product-card-price font-color m-0">$ {salePrice.toFixed(2)} USD</p>
                        <p className="product-card-price striked m-0">$ {regularPrice.toFixed(2)} USD</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
