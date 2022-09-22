import React from 'react';
import './App.css';
import Nav from './components/common/navbar';
import FeaturedProducts from './components/common/featuredProducts';
import AllProducts from './components/common/AllProducts';
import { ProductName } from './components/common/styles';
import { content } from './resources/string.js';
const App:React.FC =()=> {
  return (
    <div className="App">
     <Nav />
     <ProductName>{content.featuredHeading}</ProductName>
     <FeaturedProducts />
     <AllProducts />
    </div>
  );
}

export default App;
