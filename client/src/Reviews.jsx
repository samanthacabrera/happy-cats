import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    text: "This platform has been amazing for my cat! She has made so many new friends.",
    author: "Samantha Cabrera",
  },
  {
    id: 2,
    text: "A fantastic way to arrange playdates for my cats. Highly recommend!",
    author: "Justin Miller",
  },
  {
    id: 3,
    text: "My cats love it! They have never been happier and more social.",
    author: "Ares Cabriller",
  },
];

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl p-8 bg-white bg-opacity-80 rounded-xl shadow-2xl">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mt-6 mb-12">
          Read what others are saying.. 
        </h2>
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="px-4">
              <blockquote className="text-3xl italic text-gray-800 mb-6">
                “{review.text}”
              </blockquote>
              <p className="text-2xl font-medium text-gray-700 text-right">- {review.author}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
