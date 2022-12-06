import { useState, useEffect, useCallback } from "react";

//All custom hooks must begin with the 'use' word, if not, a big fat error will be thrown

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async (url) => {
    try {
      const res = await fetch(url);
      const products = await res.json();
      setProducts(products);
      setLoading(false);
    } catch (error) {
      throw new Error(error);
    }
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);

  //From this hook you need to return an object containing all the states that you are going to require,
  //Since this is going to be more reusable, you can pass in the url into the function, in that way, when you call this 'useFetch' hook later in different components in different topics, you can just pass in the new url and you'll get the 'loading',whether it is true or false, and the data returned from the url
  return {loading, products}
};

//While learning about useCallbacks, you'll get a warning stating that you need to add getProducts() to the dependency list, if you add getProducts to the dependency list of useEffect, an infinite loop will be triggered, the reason being that during the first render, the callback inside useEffect will be invoked which invokes the setState function and a re-render is triggered subsequently. Now, during the re-render getProducts() is created from scratch so the useEffect callback is invoked again as something inside its dependency list is affected and so you need to avoid this infinte loop by wrapping getProducts with useCallback and adding url to the dependency list and so getProducts function is only recreated when the url changes