import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Footer, Header } from '../components';

const BagItem = ({ id, image, productName, quantity, salePrice, removeFromBag, increaseQuantity, decreaseQuantity }) => {
    return (
        <div className="row mt-4 g-3">
            <div className="col-sm-2">
                <div className="bag-image position-relative overflow-hidden h-100">
                    <img className="object-fit-cover w-100 h-100" src={image} alt={productName} />
                </div>
            </div>
            <div className="col">
                <h5 className="item-name card-heading font-color fs-5 mb-0">{productName}</h5>
                <p className="product-card-price font-color mb-0">$ {salePrice}.00 USD x {quantity}</p>
                <Link onClick={() => removeFromBag(id)} className="bag text-decoration-none text-center">
                    <i className="ai ai-trash-fill fs-5"></i>
                </Link>
            </div>
            <div className="col-sm-3 col-md-4 d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-center w-100">
                    <Link onClick={() => decreaseQuantity(id)} className="bag text-decoration-none mx-2">
                        <i className="ai ai-minus-fill fs-4"></i>
                    </Link>
                    <input className="login-input w-50 text-center font-color"
                        style={{ minHeight: '2.2rem', padding: '0.3rem' }}
                        type="number"
                        name="quantity"
                        value={quantity}
                        min={1}
                        readOnly />
                    <Link onClick={() => increaseQuantity(id)} className="bag text-decoration-none mx-2">
                        <i className="ai ai-plus-fill fs-4"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

const Bag = () => {
    const navigate = useNavigate();
    const [bagItems, setBagItems] = useState([
        // Sample static bag items for demonstration
        { id: 1, image: "https://via.placeholder.com/150", productName: "Product 1", quantity: 2, salePrice: 20 },
        { id: 2, image: "https://via.placeholder.com/150", productName: "Product 2", quantity: 1, salePrice: 30 }
    ]);
    const [subTotal, setSubTotal] = useState(0);
    const [total, setTotal] = useState(0);
    const shippingFees = 6;
    const [loading, setLoading] = useState(false);

    const removeFromBag = id => {
        setBagItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const increaseQuantity = id => {
        setBagItems(prevItems => prevItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        }));
    };

    const decreaseQuantity = id => {
        setBagItems(prevItems => prevItems.map(item => {
            if (item.id === id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        }));
    };

    useEffect(() => {
        const newSubTotal = bagItems.reduce((acc, item) => acc + (item.salePrice * item.quantity), 0);
        setSubTotal(newSubTotal);
    }, [bagItems]);

    useEffect(() => {
        setTotal(subTotal + shippingFees);
    }, [subTotal, shippingFees]);

    return (
        <>
            <Header />
            <main className="container py-3">
                <h1 className="title text-uppercase text-center mt-5">Your Bag</h1>
                {bagItems.length > 0 ? (
                    bagItems.map(item => (
                        <BagItem
                            key={item.id}
                            {...item}
                            removeFromBag={removeFromBag}
                            increaseQuantity={increaseQuantity}
                            decreaseQuantity={decreaseQuantity}
                        />
                    ))
                ) : (
                    <p className="text-center">Your bag is empty.</p>
                )}
                <div className="text-center mt-4">
                    <h2>Order Summary</h2>
                    <p>Subtotal: $ {subTotal}</p>
                    <p>Shipping Fees: $ {shippingFees}</p>
                    <p>Total: $ {total}</p>
                    <button disabled={loading || !bagItems.length} onClick={() => navigate('/checkout')}>Checkout</button>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Bag;
