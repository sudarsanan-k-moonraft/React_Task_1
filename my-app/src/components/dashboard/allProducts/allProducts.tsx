import {
  SearchBar,
  AllProductsContainer,
  NoItemsFound,
} from './allProductsStyle';

import { useEffect, useState } from 'react';
import { products } from '../../../data/products';
import ProductContent from '../../common/productDisplay/productDisplay';
import { mapProducts } from '../../utils/mapProducts';
import { ProductModel } from '../../../Models/products';

//Functional component to display all the products

const AllProducts: React.FC = () => {
  const [productData, setProductData] = useState<ProductModel[] | null>(null);
  const [term, setTerm] = useState<string>('');

  useEffect(() => {
    const mappedProducts = mapProducts(products);
    setProductData(mappedProducts);
  }, []);

  // function handlesearch to perform search operation

  const handleSearch = (searchTerm: string) => {
    if (productData === null) {
      return;
    }
    setTerm(searchTerm);
  };

  if (productData === null) {
    return <p>Loading</p>;
  }

  let allProducts = productData;
  if (term !== null) {
    const productCopy = [...productData];
    allProducts = productCopy.filter((product) =>
      product.productName.toLowerCase().includes(term)
    );
  }

  return (
    <>
      <SearchBar
        type="text"
        placeholder="Search For Products"
        onChange={(e) => handleSearch(e.target.value)}
      />
      {allProducts.length === 0 ? (
        <NoItemsFound>No Items Found</NoItemsFound>
      ) : (
        ''
      )}
      <AllProductsContainer>
        {allProducts.map((product) => {
          return (
            <ProductContent
              key={product.productId}
              id={product.productId}
              name={product.productName}
              brand={product.productBrand}
              image={product.productImage}
              price={product.productPrice}
              featured={product.featuredProduct}
              ratings={product.productRating}
            />
          );
        })}
      </AllProductsContainer>
    </>
  );
};

export default AllProducts;
