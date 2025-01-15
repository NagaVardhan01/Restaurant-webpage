import React, { useState } from 'react';
import './Menu.css';
import RazorpayButton from './RazorpayButton.jsx'; 

const Menu = () => {
  const [cart, setCart] = useState([]);

  const featuredDishes = [
    {
      id: 1,
      name: "Spaghetti Bolognese",
      description: "Traditional Italian pasta with rich meat sauce",
      price: 16.99,
      image: "https://th.bing.com/th/id/OIP.YixleAz2dzjXRd3FGfaIlwHaE7?rs=1&pid=ImgDetMain"
    },
    {
      id: 2,
      name: "Grilled Salmon",
      description: "Fresh Atlantic salmon with herbs and lemon",
      price: 24.99,
      image: "https://bing.com/th?id=OSK.a7b624df6fac273984e6478d6c35dc83"
    },
    {
      id: 3,
      name: "Margherita Pizza",
      description: "Classic pizza with fresh mozzarella and basil",
      price: 18.99,
      image: "https://th.bing.com/th/id/OIP.diib6W3XLdZcf2MmOZkq9gHaLE?rs=1&pid=ImgDetMain"
    }
  ];

  const addToCart = (dish) => {
    setCart([...cart,{...dish, quantity: 1}]);
    alert(`${dish.name} added to the cart!`);
  };
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="menu" id="menu">
      <div className="menu-container">
        <h2 className="menu-title">Featured Dishes</h2>
        <div className="menu-grid">
          {featuredDishes.map((dish) => (
            <div key={dish.id} className="menu-card">
              <img src={dish.image} alt={dish.name} className="menu-card-image" />
              <div className="menu-card-content">
                <h3 className="menu-card-title">{dish.name}</h3>
                <p className="menu-card-description">{dish.description}</p>
                <p className="menu-card-price">${dish.price.toFixed(2)}</p>
                <button
                  className="menu-card-cart-btn"
                  onClick={() => addToCart(dish)}
                  aria-label={`Add ${dish.name} to cart`}
                >
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Cart Summary</h3>
          <p>Items in Cart: {cart.length}</p>
          <p>Total: ${cartTotal.toFixed(2)}</p>

          {/* Show the Razorpay payment button if there are items in the cart */}
          {cart.length > 0 && <RazorpayButton cart={cart} />}
        </div>
      </div>
    </section>
  );
};

export default Menu;
