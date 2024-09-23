import React from 'react';
import banner from '../Assets/telecommunications.jpg';
import responsive from '../Assets/responsive.png';
import phone from '../Assets/phone-case.png';
import support from '../Assets/support.png';
import usb from '../Assets/usb.png';
import idea from '../Assets/idea.png';
import recog from '../Assets/ComputerElectronics/recognition.png';
import pricing from '../Assets/ComputerElectronics/best-price.png'


function TeleCommunications() {
  const chooseCard = (image, heading, content) => {
    return (
      <div className='w-[600px] h-[180px] justify-center rounded-xl items-center p-2 bg-gray-200 flex'>
        <img className='h-24 ' src={image}></img>
        <div>
          <p className='text-2xl font-bold px-5 py-2'>{heading}</p>
          <p className='text-md px-5 '>{content}</p>
        </div>
      </div>
    )
  }
  const card = (Heading, content, image) => {
    return (
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div className='w-[200px] h-[180px] shadow-2xl  p-3 '>
              <img className='h-12 ml-14 flex justify-center mt-5' src={image}></img>
              <p className='font-semibold flex justify-center pb-2 mt-10 text-md'>{Heading}</p>
            </div>  </div>
          <div class="flip-card-back">
            <p className='p-2 pt-10'>{content}</p>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='w-[100%]'>
      <div className='h-[600px] text-white' style={{ backgroundImage: `url(${banner})` }}>
        <p className='text-3xl md:text-5xl font-bold pb-[40px] pt-20 md:pt-[260px] flex justify-center'>Telecommunications</p>
        <p className='flex text-center text-lg md:px-20'>
          Telecommunications distributors of mobile airtime and handsets serve as the bridge between mobile network operators and end-users,
          providing essential products and services that power everyday communication. As a distributor,
          the focus is on ensuring seamless access to mobile services, offering a range of mobile handsets and prepaid/postpaid airtime solutions.
          These distributors cater to both individual consumers and businesses, ensuring connectivity through reliable products, exceptional service,
          and competitive pricing.</p>
      </div>
      <div className='md:flex  p-10'>
        <div className='w-[300px]'>
          <p className='font-bold text-3xl flex justify-center my-10'>What We Offer</p>
          <p className='text-md text-justify '>We provide a diverse range of products and services that cater to both individual customers and businesses.
            Our offerings are designed to meet the growing demands of our market, ensuring quality, reliability, and convenience across all sectors.</p>
        </div>
        <div className='flex gap-5 flex-wrap justify-center mt-10 px-2'>
          {card('Mobile Handsets', 'From the latest smartphones to affordable feature phones, we provide a wide range of devices from leading global brands.', phone)}
          {card('Mobile Airtime', 'Prepaid and postpaid airtime solutions tailored to meet customer needs, available for major network operators.', responsive)}
          {card('Accessories', 'Complementary mobile accessories, such as chargers, earphones, and protective cases.', usb)}
          {card('Business Solutions', ' Customized mobile communication packages for businesses, including bulk airtime and device bundles.', idea)}
          {card('Customer Support', ' Dedicated support for all products and services, ensuring a smooth user experience.', support)}
        </div></div>
      <p className='text-3xl flex justify-center p-10 font-bold p-5 pb-10'>Why Choose Us</p>
      <div className='flex flex-wrap justify-center pb-10 gap-10'>
        {chooseCard(idea, 'Broad Selection', 'Access to the latest models of handsets and airtime packages from all major networks.')}
        {chooseCard(pricing, 'Competitive Pricing', 'Competitive pricing with flexible payment options.')}
        {chooseCard(responsive, 'Reliability', 'Proven track record of reliable and timely delivery.')}
        {chooseCard(recog, 'Expertise', 'Industry experience with a deep understanding of customer needs.')}
      </div></div>
  )
}

export default TeleCommunications;