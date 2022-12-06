import React, { useState, useEffect } from "react";
import { useFetch } from "./2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

// const Example = () => {
//   const [loading, setLoading] = useState(true)
//   const [products, setProducts] = useState([])

//   const getProducts = async () => {
//     const response = await fetch(url)
//     const products = await response.json()
//     setProducts(products)
//     setLoading(false)
//   }

//   useEffect(() => {
//     getProducts()
//   }, [url])
//   console.log(products)
//   return (
//     <div>
//       <h2>{loading ? 'loading...' : 'data'}</h2>
//     </div>
//   )
// }

const Example = () => {
  const {loading, products} = useFetch(url);

  //useFetch is going to return an object containing the properties 'loading' and 'products', basically the results of your request to the url that you have passed in, so you need to capture it
  return (
    <div>
      <h2>{loading ? "Loading" : "Data"}</h2>
    </div>
  );
};

//We need to come up with a functionality that we want to reuse, if you had another component that needed to fetch data you shouldn't need to rewrite this entire code again

export default Example;