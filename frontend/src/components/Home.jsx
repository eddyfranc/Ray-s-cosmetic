import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Welcome to Ray's Cosmetics
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover the best beauty products for your skin. Premium quality, affordable prices, and fast delivery.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Product Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Luxury Moisturizer</h3>
                <p className="text-gray-600 mb-4">Hydrate and nourish your skin with our premium moisturizer.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">$29.99</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Product Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Vitamin C Serum</h3>
                <p className="text-gray-600 mb-4">Brighten and rejuvenate your skin with vitamin C.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">$39.99</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">Product Image</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Natural Lip Balm</h3>
                <p className="text-gray-600 mb-4">Keep your lips soft and hydrated with natural ingredients.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">$9.99</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Ready to Transform Your Beauty Routine?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied customers and discover your perfect products today.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Explore All Products
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
