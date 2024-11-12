import { Star } from 'lucide-react';

const restaurants = [
  {
    name: 'The Gourmet Kitchen',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80',
    cuisine: 'North Indian, Chinese',
    rating: 4.5,
    price: '₹210',
    location: 'Indiranagar'
  },
  {
    name: 'Cafe Italiano',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80',
    cuisine: 'Italian, Continental',
    rating: 4.3,
    price: '₹450 for one',
    location: 'Koramangala'
  },
  {
    name: 'Sushi House',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80',
    cuisine: 'Japanese, Asian',
    rating: 4.7,
    price: '₹250',
    location: 'MG Road'
  },
  {
    name: 'Spice Garden',
    image: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&q=80',
    cuisine: 'South Indian',
    rating: 4.4,
    price: '₹390',
    location: 'JP Nagar'
  }
];

export default function PopularRestaurants() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8">Popular Restaurants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="relative h-48">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded-md text-sm font-semibold flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                {restaurant.rating}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{restaurant.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{restaurant.cuisine}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-500 text-sm">{restaurant.location}</span>
                <span className="text-gray-500 text-sm">{restaurant.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}