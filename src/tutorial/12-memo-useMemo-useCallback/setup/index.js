import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders

//Every single time you click the 'count' button, it is going to trigger a re-render because a useState preserves values between re-renders and triggers re-renders and so 'Index' component re-renders and subsequently its children component also re-render i.e 'BigList' and re-rendering of 'BigList' triggers re-rendering of 'Single Product' so basically if there are 12 Products then every time you increase the count, useEffect for Big list gets triggered once and that of Single Product gets triggered 12 times as there are 12 products so it is triggered once per product

// Solution is using the memo function that comes with React i.e React.memo, not   to be confused with useMemo which is a hook, what you basically wanna do is wrap that component that is causing re-rendering of a child component multiple times under React.memo, in our case, it is 'BigList'

//React.Memo
const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  // useMemo -> Come to this after learning about React.memo and useCallback()
  const calculateMostExpensiveData = (data) => {
    console.log('hello');
    //If this function takes a long time to calculate then this is going to be a pain as you are calling it everytime you update state, so it would be nice if you could remember the value returned by this function and only recalculate if your 'data' changes and this is where useMemo comes into play

    //in useMemo you pass in a callback within the callback you invoke the function that is going to return a value and also add a dependency list [products]
    return data.reduce((total, item) => {
      const price = item.fields.price;
      if (price >= total) {
        total = price;
      }
      return total;
    }, 0) / 100;
  };

  const mostExpensive = useMemo(() => 
  calculateMostExpensiveData(products)
  , [products])

//Now what you'll notice is that the hello won't get printed in the console everytime the components are re-rendered

  const addToCart = useCallback(() => {
    setCart((cart) => cart + 1);
  });

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: "3rem" }}>Cart : {cart}</h1>
      <h1>Most Expensive : ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

//React.memo is going to check the value of the prop passed, in this case -> products, if the value of the prop does then we are not triggering re-render and consequently useEffect() is not triggered as it is called at every re-render

//We are triggering a re-render everytime you hit the count button
const BigList = React.memo(({ products, addToCart }) => {
  //Memo is basically going to check if the value of the prop i.e. product has changed and if it hasn't changed then no re-renders take place
  useEffect(() => {
    console.log("Big List");
  });

  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

//After adding the add to cart button you will observe that every time you click the add to cart button all the 12 singleProduct components are re-rendering ,now if you scroll up you'll realise that each and every time you change the state you trigger re-render, say you click the 'Click me' button, now Index component will re-render and hence the addToCart function will be re-created and inside React.memo, you have products and addToCart, since addToCart was re-created BigList component is also re-rendered which further re-renders the SingleProduct component, the solution to this is using the useCallback which is essentially the same as React.memo but it is specifically for functions

//useCallback will essentially check if the value of the function it is wrapped around has changed, if it hasn't changed, the function is created again from scratch and if the value has changed the function is created from scratch

//The good news is that if you are just working with the click me button, the addToCart function is not going to be re-created and the other components are not going to be re-rendered, you also need to add a dependency list containing [cart] so that the function is re-created only when you addToCart

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.count("Single Product");
  });

  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;
  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button className="btn" onClick={addToCart}>
        Add to cart
      </button>
    </article>
  );
};

export default Index;

//React.memo deals with the changes taking place in props whereas useMemo deals with a value
