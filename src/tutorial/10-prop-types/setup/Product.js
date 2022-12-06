import React from 'react';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({id, name, price, image}) => {
  //Here you are relying on the fact that you are going to have the price property on every such product, what if the data that you are iterating over, that property is missing? if you try accessing a property on an object that does not exist you are going to face a big fat error

  const url = image && image.url;
  //So basicaly whatever image.url is set to, even if it is undefined, that is what url will be set to and then while returning you can use the 'or' operator <img src={url || defaultImage} />
  return <article className='product' key={id}>
    {/* The 'or' operator is not going to make sense for image here, image.url || defaultImage is something like check for this property on image and if it is not found use this defaultImage but this is not going to work if the image itself is undefined
    
    Here the and operator is going to come into handy, READ THE 2ND PARAGRAPH
    */}
    <img src={image.url } alt={name} />
    <h4>{name}</h4>

    {/* Setting the default value of price using the or operator */}
    <p>${price || 3.99}</p>
    {/* Here you will find that not all products have the property 'price', once in a while, while working with API's you will find that some price or image is missing */}
    {/* if you ever encounter this situation just make sure you are returning some kind of static value because you don't wanna access it dynamically cause that you will throw an error, now you should set a prop type that is going to check if some property is undefined and then set a default value  */}
    </article>;
};

export default Product;
