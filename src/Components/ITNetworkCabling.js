import React from 'react';
import banner from '../Assets/Rectangle289.png';
import approval from '../Assets/ITNetworkSolutions/approval.png';
import cableManagement from '../Assets/ITNetworkSolutions/cable-management.png';
import coaxial from '../Assets/ITNetworkSolutions/coaxial.png';
import energy from '../Assets/ITNetworkSolutions/energy.png';
import laptop from '../Assets/ITNetworkSolutions/laptop.png';
import technology from '../Assets/ITNetworkSolutions/technology.png';
import usb from '../Assets/ITNetworkSolutions/usb-cable.png';
import { Carousel } from 'antd';

const contentStyle = {
  height: '80px',
  color: '#fff',
  lineHeight: '50px',
  textAlign: 'center',
  background: '#364d79',
};


function ITNetworkCabling() {
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
      <div className='h-[600px] text-white' style={{ backgroundImage: `url(${banner})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center' }}>
        <p className='text-3xl font-bold pb-[60px] pt-[260px] flex justify-center'>IT Network Cabling</p>
        <p className='flex text-sm md:text-lg text-center text-lg md:px-20'>
          IT Network Structural Cabling Installers specialize in designing, installing,
          and maintaining the physical cabling infrastructure that supports data, voice,
          and video communications in businesses, data centers, and industrial environments.
          This structured cabling system is the backbone of a reliable IT network, ensuring high-speed connectivity,
          seamless communication, and efficient data transfer. These experts deliver scalable and future-proof cabling solutions for companies of all sizes,
          ensuring efficient network performance and stability.</p>
      </div>
      <p className='font-bold text-xl flex justify-center mt-20'>What We Offer</p>
      <p className='text-md p-2 mt-5 flex justify-center md:mx-20 text-center'>
        Our IT Network Cabling solutions provide reliable and efficient infrastructure for businesses,
         ensuring seamless connectivity and optimal performance. We specialize in structured cabling systems that support your current and future network needs.
</p>
      <div className='flex gap-20 flex-wrap justify-center p-10'>
        {card('Structured Cabling Design ', ' Customized design of data and voice cabling infrastructures tailored to your specific needs and business size.', usb)}
        {card('Fiber Optic Cabling', ' High-speed fiber optic cable installations for maximum data transfer rates and long-distance communication.', energy)}
        {card('Cat5e, Cat6, Cat7 Ethernet Cabling', ' Installation of Ethernet cables for local area networks (LANs), providing fast and reliable internet and intranet connections.', coaxial)}
        {card('Data Center Cabling', ' End-to-end structured cabling solutions for data centers, including server racks, patch panels, and backbone cabling.', technology)}
        {card('Cable Management', ' Proper labeling, organization, and management of cables to ensure efficiency and ease of maintenance.', cableManagement)}
        {card(' Testing & Certification', ' Thorough testing and certification of installed cables to ensure they meet industry standards and perform optimally.', approval)}
        {card('Maintenance & Upgrades', ' Ongoing maintenance services and upgrades to keep your cabling infrastructure modern and efficient.', laptop)}
      </div>
      <div>
        <p className='text-3xl font-bold flex justify-center py-10'>Why Choose Us</p>

        <Carousel className='mb-10' autoplay>
          <div >
            <h1 className='text-2xl' style={contentStyle}> Expert Design & Installation</h1>
            <h3 className='text-md' style={contentStyle}>  Skilled professionals with extensive experience in structured cabling design and installation for maximum network performance. </h3>
          </div>
          <div>
          <h1 className='text-2xl' style={contentStyle}>Scalability</h1>
            <h3 className='text-md' style={contentStyle}> Cabling solutions that are scalable and adaptable as your business grows or your network requirements change. </h3>
          </div>
          <div>
          <h1 className='text-2xl' style={contentStyle}>Future-Proofing</h1>
            <h3 className='text-md' style={contentStyle}> Cabling infrastructure designed to support the evolving needs of your network, ensuring compatibility with future technologies.</h3>
          </div>
          <div>
          <h1 className='text-2xl' style={contentStyle}>High-Performance Standards</h1>
            <h3 className='text-md'  style={contentStyle}> We follow industry standards (such as EIA/TIA and ISO) to guarantee efficient, reliable, and secure network performance. </h3>
          </div>
          <div >
          <h1 className='text-2xl' style={contentStyle}> Minimal Downtime</h1>
            <h3 className='text-md' style={contentStyle}> Efficient installations designed to minimize disruption to your business operations during deployment or upgrades.</h3>
          </div>
          <div >
          <h1 className='text-2xl' style={contentStyle}>Post-Installation Support</h1>
            <h3 className='text-md' style={contentStyle}> Comprehensive support services, including troubleshooting, repairs, and system expansions.</h3>
          </div>
        </Carousel>

      </div>
    </div>
  )
}

export default ITNetworkCabling ;