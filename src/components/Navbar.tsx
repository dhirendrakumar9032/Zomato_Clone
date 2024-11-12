import { Search, MapPin, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-red-500">Zomato Clone</span>
          </div>
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative flex items-center">
              <MapPin className="absolute left-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Bangalore"
                className="pl-10 pr-4 py-2 w-1/3 border-r border-gray-300 focus:outline-none"
              />
              <Search className="absolute left-[33%] ml-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search for restaurant, cuisine or a dish"
                className="pl-12 pr-4 py-2 w-2/3 focus:outline-none"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <div className="h-8 w-[1px] bg-gray-300 mx-2"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
              <User size={20} />
              <span>Log in</span>
            </button>
            <button className="flex items-center gap-2 hover:text-red-500 transition-colors">
              <span>Sign up</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}