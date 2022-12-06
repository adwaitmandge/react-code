import React from "react";
import Product from "./Product";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

//To import an image from a folder just specify the path to the image along with the extension

//TO START WORKING WITH PROP TYPES YOU NEED TO IMPORT IT, it is installed whenever you create a react app

// READ THE COMMENTS STORED IN PRODUCT.JS

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-prop-types-example";

const Index = () => {
  const { products } = useFetch(url);
  return (
    <div>
      <h2>products</h2>
      <section className="products">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </section>
    </div>
  );
};

//In order to set up PropTypes, you'll have to set a 'propTypes' property on the component
Product.propTypes = {
  image: PropTypes.object.isRequired,
  //since image is an object containing the property 'url', if you want the prop type to yell and scream if something is missing, add 'isRequired'

  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

//To set something using a snippet simply write: people:ptar, where pt -> propTypes, a -> array, r -> required then you will have people:PropTypes.array.isRequired

//Since you have set everything as required you won't have to check if something is missing, in the console, the console error is not going to point you to that specific product which is missing the property,

//So you can either use the short circuit operator or set a default prop

//To set up defaultProps to a component:
Product.defaultProps = {
  name: "Sofa",
  price: 3.99,
  image:{
    url:defaultImage
  } 
};

//Another way of setting the default values is by using the or operator, checkout product.js for demonstration
export default Index;

//THIS ADDS TOO MUCH CODE AND THINGS MIGHT GET MESSY

