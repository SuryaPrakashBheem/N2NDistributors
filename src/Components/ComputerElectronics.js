import React from 'react';
import banner from '../Assets/Rectangle290.png';
import badge from '../Assets/ComputerElectronics/badge.png';
import bestPrice from '../Assets/ComputerElectronics/best-price.png';
import computer from '../Assets/ComputerElectronics/computer.png';
import connection from '../Assets/ComputerElectronics/connection.png';
import recognition from '../Assets/ComputerElectronics/recognition.png';
import truck from '../Assets/ComputerElectronics/truck.png'
import { Collapse } from 'antd';

function ComputerElectronics() {
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
  const items = [
    {
      key: '1',
      label: ' Personalized Consultation',
      children: <p>Our team works closely with you to ensure your build meets your exact specifications and needs. </p>,
    },
    {
      key: '2',
      label: ' Top-Tier Expertise',
      children: <p>  Decades of experience in computer electronics ensures you get professional advice and expert support at every step.</p>,
    },
    {
      key: '3',
      label: 'Future-Ready Builds',
      children: <p> We design systems that allow for easy upgrades and future expansion to keep up with technological advancements. </p>,
    },
    {
      key: '4',
      label: 'Trusted Brands',
      children: <p> We work with only the most reputable manufacturers, ensuring you receive reliable, long-lasting components. </p>,
    }, 
    {
      key: '5',
      label: 'Efficient Installations',
      children: <p> Our experts handle installations with precision to minimize setup time and ensure smooth operation from day one.  </p>,
    },
    {
      key: '6',
      label: ' Ongoing Support',
      children: <p>  After-sales support includes troubleshooting, system upgrades, and component replacements to keep your system running optimally. </p>,
    },
  ];
  return (
    <div className='w-[100%] pb-20'>
      <div className='h-[600px] text-white' style={{ backgroundImage: `url(${banner})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center' }}>
        <p className='text-3xl font-bold pb-[60px] pt-[260px] flex justify-center'>Computer Electronics</p>
        <p className='flex text-center text-lg md:px-20'>
          We specialize in providing a wide range of high-quality computer electronics tailored to meet the needs of everyone—from casual users to tech enthusiasts and professionals.</p>
      </div>
      <p className='font-bold text-xl flex justify-center mt-20'>What We Offer</p>
      <p className='text-md p-2 mt-5 flex justify-center md:mx-20 text-center'>
        Our Computer Electronics solutions offer the latest in technology, from desktops and laptops to accessories and peripherals. We provide high-quality,
         reliable products to meet both personal and business needs.</p>
      <div className='flex gap-20 flex-wrap justify-center p-10'>
        {card(' Expert Component Selection: ', ' Our specialists help you choose the right hardware, from CPUs to GPUs, tailored to your performance needs.', badge)}
        {card('Custom PC Builds:', '  We design and assemble high-performance systems to match your unique requirements for gaming, workstations, or productivity.', computer)}
        {card('Cutting-Edge Technology:', ' We provide the latest components, ensuring your system stays ahead with top-tier processors, GPUs, and storage.', connection)}
        {card('Quality Assurance:', ' Every product is tested for durability and performance, sourced from leading brands like Intel, AMD, and NVIDIA.', recognition)}
        {card('Competitive Pricing:', '  Offering high-end components at competitive prices, giving you great value without compromising quality.', bestPrice)}
        {card(' Fast and Secure Shipping:', ' Guaranteed quick and secure deliveries with real-time tracking to ensure you receive your products safely.', truck)}
      </div>
      <div className='md:mx-20'>
      <p className='text-2xl flex pb-10 font-bold justify-center'> Why Choose Us</p>
      <Collapse className='mx-20' accordion items={items} />

      </div>
    </div>
  )
}

export default ComputerElectronics