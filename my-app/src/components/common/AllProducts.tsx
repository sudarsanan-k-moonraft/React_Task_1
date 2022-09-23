import { SearchBar, AllProductsContainer } from "./styles";
import { useState } from "react";
import products from "./products";
import ProductContent from "./ProductContent";

//Functional component to display all the products

const AllProducts: React.FC = () => {
  const [productData, setProductData] = useState(products);
  const handleSearch = (val: any) => {
    const copy = [...products];
    const filter = copy.filter((item) =>
      item.productName.toLowerCase().includes(val)
    );
    setProductData(filter);
  };
  return (
    <>
      <SearchBar
        type="text"
        placeholder="Search For Products"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <AllProductsContainer>
        {productData.map((item, i) => {
          return (
            <ProductContent
              key={i}
              id={item.productId}
              name={item.productName}
              brand={item.brand}
              image={item.productImage}
              price={item.productPrice}
              featured={item.featured}
              ratings={item.ratings}
            />
          );
        })}
      </AllProductsContainer>
    </>
  );
};

export default AllProducts;
