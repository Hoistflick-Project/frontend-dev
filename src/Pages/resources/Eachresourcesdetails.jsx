import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from "../../Component/Nav";
import Footer from "../../Component/Footer";
import './eachresourcesdetails.css';
import Book from '../../assets/book.png';
import Relatedresources from './Relatedresources';

const Eachresourcesdetails = () => {
  const location = useLocation();
  const { product } = location.state; // Access the product data from state
  const [mainImage, setMainImage] = useState(product.image || Book); // State for the main image

  const images = [
    product.image || Book,
    Book,
    Book,
    Book,
  ];

  return (
    <div>
      <Nav />
      <div className="container mx-auto p-4 md:p-8 mt-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="image-gallery w-5/6 md:w-1/2 lg:w-2/6">
            <div className="main-image mb-4 w-full">
              <img src={mainImage} alt="Main Product" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div className="thumbnails flex gap-2 overflow-x-auto">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="thumbnail w-16 h-16 md:w-20 md:h-20 cursor-pointer rounded-lg border-2 border-transparent hover:border-blue-500"
                  onClick={() => setMainImage(image)} // Update the main image on click
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="product-details w-full md:w-1/2 lg:w-4/6">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">{product.title}</h1>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 text-xl md:text-2xl">★ {product.rating}</span>
            </div>
            <p className="text-gray-600 mb-4">By {product.author}</p>

            <div className="description mb-6">
              <p className="text-gray-700">{product.description}</p>
            </div>

            <div className="content mb-6">
              <h2 className="text-xl font-semibold mb-2">Content:</h2>
              <ul className="list-disc list-inside text-blue-600">
                {product.content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="video-description mb-6">
              <h2 className="text-xl font-semibold mb-2">Video Description</h2>
              <p className="text-gray-700">
                A detailed video description of the book and its contents.
              </p>
            </div>

            <div className="format mb-6">
              <h2 className="text-xl font-semibold mb-2">Format: {product.format}</h2>
            </div>

            <div className="flex flex-col w-full md:w-[360px]">
              <div className="flex items-center gap-4 mb-6 w-full">
                <h2 className="text-xl md:text-2xl font-bold border-[1px] border-[#0056D2] text-[#0056D2] w-1/2 py-2 text-center rounded-lg">${product.price}</h2>
                <button className="bg-blue-500 text-xl md:text-2xl text-white border-[1px] border-[#0056D2] w-1/2 py-2 text-center rounded-lg hover:bg-blue-600">Save</button>
              </div>
              <div className="w-full">
                <button className="bg-[#0056D2] text-white px-8 py-3 w-full rounded-lg">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
      <Relatedresources />
      </section>
      <Footer />
    </div>
  );
};

export default Eachresourcesdetails;