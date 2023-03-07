import React from "react";
import "./slider.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Card/Card";
import img from "../../assets/img.png";
const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const cardData = [
    {
      name: "paypal",
      price: "1-5%",
      imgUrl: "https://i.ibb.co/t38Gs6D/paypal.png ",
      // imgUrl:
      // "https://spng.pinpng.com/pngs/s/52-527945_paypal-logo-png-paypal-logo-transparent-png.png ",
    },
    {
      name: "MasterCard",
      price: "1-5%",
      imgUrl: "https://i.ibb.co/HC7r1xZ/mastercard.png",
    },
    {
      name: "WebMoney",
      price: "1-5%",
      imgUrl: "https://i.ibb.co/3sZHwhh/webmoney.png",
    },
    {
      name: "Qiwi",
      price: "1-5%",
      imgUrl: "https://i.ibb.co/F6mLB5F/qiwi.png",
    },
    {
      name: "Transferwise",
      price: "1-5%",
      imgUrl: "https://i.ibb.co/YNXX4QQ/transferwise.png",
    },
  ];
  return (
    <div className="slider">
      <h4>Payment method</h4>
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        autoPlay={true}
        autoPlaySpeed={1000}
      >
        {cardData.map((data) => (
          <Card data={data} />
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
