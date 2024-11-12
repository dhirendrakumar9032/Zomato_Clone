
export default function Hero() {
  return (
    <div className="relative h-[500px] bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80")'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-bold mb-6">Discover the best food & drinks</h1>
          <p className="text-xl mb-8">Explore top-rated restaurants, cafes, and bars around you</p>
        </div>
      </div>
    </div>
  );
}