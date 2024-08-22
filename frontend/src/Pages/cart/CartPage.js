// src/Pages/Cart/CartPage.jsx

import React from 'react';
import { Container, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import emptyCartImage from '../Assests/cart.png'; // Adjust the path to your image
import './CartPage.css'; // Import custom CSS

const CartPage = () => {
    const navigate = useNavigate();
    const cartItems = []; // Replace with actual cart state from Redux or Context

    const handleExploreServices = () => {
        navigate('/');
    };

    return (
        <Container className="text-center py-5">
            {cartItems.length === 0 ? (
                <>
                    <Image src={emptyCartImage} className="empty-cart-image mb-4" fluid alt="Empty Cart" />
                    <h2>Your cart is empty</h2>
                    <Button variant="primary" onClick={handleExploreServices}>Explore Services</Button>
                </>
            ) : (
                <div>
                    {/* Render cart items */}
                </div>
            )}
        </Container>
    );
};

export default CartPage;
