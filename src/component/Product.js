import React, { useState, useEffect } from "react";
import axios from "axios";
import "./product.css";

function Product() {
  const [productlist, setProductList] = useState([]);
  const getProductData = async () => {
    const response = await axios.get(
      "https://dummyjson.com/products?limit=100"
    );
    // console.log(response.data.products.brand);
    // console.log(response.data.products.category);
    setProductList(response.data.products);
  };
  useEffect(() => {
    getProductData();
  }, []);
  console.log(productlist.brand);
  console.log(productlist.category);
  return (
    <>
      <div className="products">
        {productlist.map((productitem, i) => {
          return (
            <div className="card">
              <div>
                <img
                  className="product-image"
                  src={productitem.thumbnail}
                  alt={productitem.title}
                />
              </div>
              <div>
                <h3 className="product-title">{productitem.title}</h3>
                <h4 className="product-brand">{productitem.brand}</h4>
                <h5 className="product-Category">{productitem.category}</h5>
              </div>
              <div className="product-price">$ {productitem.price}</div>
              <div>
                <button className="add-cart-btn">Add To Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Product;
