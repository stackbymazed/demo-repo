"use client";

import { Star } from 'lucide-react';

const popularFoods = [
  { id: 1, name: 'Spicy Burger', price: '$12.00', rating: 4.8, type: 'Burger', img: '/images/spicy-burger.png', tag: 'Hot' },
  { id: 2, name: 'Beef Steaks', price: '$24.00', rating: 5.0, type: 'Meat', img: '/images/beef-steaks.png', tag: 'Popular' },
  { id: 3, name: 'Chicken Biryani', price: '$18.00', rating: 4.9, type: 'Rice', img: '/images/chicken-biryani.png', tag: 'New' },
  { id: 4, name: 'Italian Pasta', price: '$15.00', rating: 4.7, type: 'Pasta', img: '/images/hero-pasta.png', tag: 'Classic' },
  { id: 5, name: 'Crispy Fries', price: '$6.00', rating: 4.5, type: 'Sides', img: '/images/spicy-burger.png' },
  { id: 6, name: 'Grilled Salmon', price: '$28.00', rating: 4.9, type: 'Seafood', img: '/images/beef-steaks.png', tag: 'Chef Choice' },
];

export default function MenuPage() {
  return (
    <main className="pt-10 pb-20">
       <section className="popular-foods container" style={{ paddingTop: '40px' }}>
        <h4 className="section-subtitle">Fresh & Tasty</h4>
        <h2 className="section-title">Our Full Menu</h2>
        
        <div className="filter-tabs">
          <button className="filter-tab active">All</button>
          <button className="filter-tab">Pizza</button>
          <button className="filter-tab">Burger</button>
          <button className="filter-tab">Pasta</button>
          <button className="filter-tab">Drinks</button>
          <button className="filter-tab">Meats</button>
        </div>
        
        <div className="food-grid">
          {popularFoods.map(food => (
            <div className="food-card" key={food.id}>
              {food.tag && <span className="tag">{food.tag}</span>}
              <div className="food-img-wrapper">
                <img src={food.img} alt={food.name} />
              </div>
              <h3 className="food-title">{food.name}</h3>
              <div className="rating">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="food-price">{food.price}</p>
              <button className="add-cart-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
