import React from 'react';

const Landing = () => {
  return (
    <div className="bg-saffron-400 text-white py-12">
      <div className="container mx-auto text-center">
        
        
        <h1 className="text-4xl font-bold mb-4">Welcome to <span className='text-bronze-200'>Shana's Exclusive</span></h1>
        <img src="/images/logoSHE.png"/>
        <p className="text-lg mb-8">Discover a world of amazing products.</p>
        <a
          href="/products"
          className="bg-bronze-500 hover:bg-bronze-700 text-white font-bold py-2 px-4 rounded"
        >
          Explore Products
        </a>
      </div>
    </div>
  );
};

export default Landing;
