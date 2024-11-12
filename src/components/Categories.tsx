import { Coffee, Pizza, Salad, IceCream } from 'lucide-react';

const categories = [
  { icon: Pizza, name: 'Order Food Online', desc: 'Stay home and order to your doorstep' },
  { icon: Coffee, name: 'Dining Out', desc: 'View the city favourite dining venues' },
  { icon: IceCream, name: 'Nightlife & Clubs', desc: 'Explore the city top nightlife outlets' },
  { icon: Salad, name: 'Pro and Pro Plus', desc: 'Exclusive benefits for dining out' },
];

export default function Categories() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold mb-8">What's on your mind?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <category.icon className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
            <p className="text-gray-600">{category.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}