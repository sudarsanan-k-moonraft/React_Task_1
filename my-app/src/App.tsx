import React from 'react';

import Nav from './components/common/navbar/navbar';
import FeaturedProducts from './components/dashboard/featuredProdutcs/featuredProducts';
import AllProducts from './components/dashboard/allProducts/allProducts';
import { products } from './data/products';


const App: React.FC = () => {
  return (
    <>
      <Nav />
      <FeaturedProducts productData={products} />
      <AllProducts />
    </>
  );
};

export default App;
