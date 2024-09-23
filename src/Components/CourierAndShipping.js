import React from 'react';
import banner from '../Assets/CourierBanner1.png';
import cube from '../Assets/CourierShipping/cube.png';
import fast from '../Assets/CourierShipping/fast-delivery.png';
import global from '../Assets/CourierShipping/global.png';
import tracking from '../Assets/CourierShipping/real-time-tracking.png';
import reliability from '../Assets/CourierShipping/reliability.png';
import { Carousel } from 'antd';
const contentStyle = {
  height: '80px',
  color: '#fff',
  lineHeight: '50px',
  textAlign: 'center',
  background: '#E62227',
};

function CourierAndShipping() {
  const card = (Heading, content, image) => {
    return (
      <div className='w-[500px] h-[300px]  border border-gray-400 border-2 p-3 rounded-xl '>
        <div className='flex flex-row justify-around py-10 border shadow-xl  border-2 rounded-xl'>
          <img className='w-20 h-20 ' src={image}></img>
          <div className='w-[2px] bg-red-700'></div>
          <p className='font-bold text-lg  py-5'>{Heading}</p></div>
        <p className='font-semibold mt-10'>{content}</p>
      </div>
    )
  }
  return (
    <div className='w-[100%]'>
      <div className='h-[600px] text-white' style={{ backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <p className='text-3xl font-bold pb-[60px] pt-[260px] flex justify-center'>Courier and Shipping</p>
        <p className='flex text-center text-lg md:px-20'>
          Our Courier and Shipping services ensure fast, reliable, and secure delivery of your products, both locally and internationally. With real-time tracking and carefully protected packaging, we guarantee your items arrive on time and in perfect condition.</p>
      </div>
      <p className='font-bold text-xl flex justify-center mt-20'>What We Offer</p>
      <p className='text-md p-2 mt-5 flex justify-center md:mx-20 text-center'>
      Our Courier and Shipping services ensure fast, reliable deliveries, both locally and internationally.
       With secure packaging and real-time tracking, we guarantee timely and safe arrival of your goods.
     </p>
      <div className='flex gap-20 flex-wrap justify-center p-10'>
        {card('Reliable Delivery Services ', ' We partner with trusted courier services to ensure your packages are delivered safely and on time, every time.', reliability)}
        {card('Fast Shipping Options', ' Choose from various shipping speeds, including same-day, next-day, or standard delivery to meet your needs.', fast)}
        {card('Global Reach', ' We provide international shipping, making sure your products can be delivered to nearly any location worldwide.', global)}
        {card('Real-Time Tracking', ' Our integrated tracking system allows you to monitor your shipment every step of the way, from dispatch to delivery.', tracking)}
        {card('Secure Packaging', '  All products are carefully packaged to ensure they arrive in pristine condition, with extra protection for fragile items.', cube)}
      </div>

      <div>
      <p className='font-bold text-xl flex justify-center my-10'>Why Choose Us</p>

        <Carousel className='mb-10' autoplay>
          <div >
            <h1 className='text-2xl' style={contentStyle}>Affordable Rates</h1>
            <h3 className='text-md' style={contentStyle}> We offer competitive shipping rates without sacrificing service quality, ensuring value for every delivery.</h3>
          </div>
          <div>
          <h1 className='text-2xl' style={contentStyle}>Timely Dispatch</h1>
            <h3 className='text-md' style={contentStyle}> Orders are processed and dispatched swiftly, reducing wait times and ensuring timely delivery to your door.</h3>
          </div>
          <div>
          <h1 className='text-2xl' style={contentStyle}>Insurance Coverage</h1>
            <h3 className='text-md' style={contentStyle}> We provide optional shipping insurance to cover any potential loss or damage during transit, giving you peace of mind.</h3>
          </div>
          <div>
          <h1 className='text-2xl' style={contentStyle}>Customer Notifications</h1>
            <h3 className='text-md'  style={contentStyle}> Receive instant updates via email or SMS regarding your shipment’s status, ensuring you're always informed.</h3>
          </div>
          <div >
          <h1 className='text-2xl' style={contentStyle}>Hassle-Free Returns</h1>
            <h3 className='text-md' style={contentStyle}> If an item needs to be returned, we offer simple, straightforward return shipping solutions with easy label printing.</h3>
          </div>
        </Carousel>

      </div>
    </div>
  )
}

export default CourierAndShipping;