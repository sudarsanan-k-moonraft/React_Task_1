import { SearchBar,AllProductsContainer } from "./styles";
import { useState } from "react";
import ProductDetails from "./productDetails";
import ProductContent from "./ProductContent";

const AllProducts:React.FC=()=>{
    const [data, setData]= useState(ProductDetails);
    const handleSearch = (val:any) => {
        const copy = [...ProductDetails];
        const filter = copy.filter(item => item.productName.toLowerCase().includes(val));
        setData(filter);
    };
    return(
        <>
        <SearchBar type="text" placeholder="Search For Products" onChange={e=>handleSearch(e.target.value)} /> 
        <AllProductsContainer>
        {data.map((item)=>{
            return(
                <ProductContent id={item.productId} name={item.productName} brand={item.brand} image={item. productImage} price={item.productPrice} featured={item.featured} ratings={item.ratings} />
            );
           })}
           </AllProductsContainer>
        </>
    );
};

export default AllProducts;