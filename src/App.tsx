import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import PopularRestaurants from './components/PopularRestaurants';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Categories />
        <PopularRestaurants />
      </main>
    </div>
  );
}

export default App;