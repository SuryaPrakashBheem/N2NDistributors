import React from 'react';
import banner from '../Assets/Office.png';
import desk from '../Assets/officeSolutions/desk.png';
import fax from '../Assets/officeSolutions/fax.png';
import monitoring from '../Assets/officeSolutions/monitoring.png';
import software from '../Assets/officeSolutions/software-application.png';
import technical from '../Assets/officeSolutions/technical-support.png';
import support from '../Assets/support.png';
import { Collapse } from 'antd';

function OfficeSolutions() {
  const card = (Heading, content, image) => {
    return (
      <div className='w-[300px] h-[240px] border border-red-700 border-2 p-3 rounded-xl border-r-[7px] border-b-[7px]'>
        <div className='flex flex-row justify-around py-2 border border-2 rounded-xl '>
          <img className='w-10 h-10 ' alt='image' src={image}></img>
          <p className='font-bold text-lg   py-2'>{Heading}</p></div>
        <p className='font-semibold flex text-center mt-10'>{content}</p>
      </div>
    )
  }
  const items = [
    {
      key: '1',
      label: 'Tailored Solutions:',
      children: <p>    Customized office equipment packages designed to meet your specific business needs.</p>,
    },
    {
      key: '2',
      label: ' Top Brands',
      children: <p>    Access to trusted global brands with a proven track record of quality and reliability.</p>,
    },
    {
      key: '3',
      label: ' End-to-End Service',
      children: <p> From planning and installation to maintenance and support, we offer complete office solutions.</p>,
    },
    {
      key: '4',
      label: 'Scalability',
      children: <p>   Solutions designed to grow with your business, allowing you to scale up or upgrade as your needs evolve.</p>,
    }, 
    {
      key: '5',
      label: 'Eco-Friendly Options',
      children: <p>    Environmentally friendly equipment and energy-efficient solutions to reduce your carbon footprint.</p>,
    },
  ];
  return (
    <div className='w-[100%] pb-20'>
      <div className='h-[600px] text-white' style={{ backgroundImage: `url(${banner})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center' }}>
        <p className='text-5xl font-bold pb-[40px] pt-20 md:pt-[260px] flex justify-center'>Office Solutions</p>
        <p className='flex text-center text-lg md:px-20'>
          Office Solutions, Equipment, and Service Dealers provide businesses with essential tools and services to create efficient,
          productive work environments. From office hardware like printers and computers to software and IT support,
          these dealers offer comprehensive solutions tailored to businesses of all sizes. Whether you're setting up a new office or
          upgrading existing infrastructure, office solution providers ensure your workspace is equipped with modern technology and reliable service.</p>
      </div>
      <p className='font-bold text-xl flex justify-center mt-20'>What We Offer</p>
      <p className='text-md p-2 flex justify-center mt-5 md:mx-20 text-center'>
        Our Office Solutions provide everything you need to streamline business operations, including office supplies, furniture, 
        and equipment. We offer tailored solutions to enhance productivity and create efficient workspaces.</p>
      <div className='flex gap-20 flex-wrap justify-center p-10'>
        {card('Office Equipment ', 'Printers, copiers, fax machines, scanners, and multifunction devices from top brands.', fax)}
        {card('Furniture Solutions', ' Office desks, ergonomic chairs, filing cabinets, and modular furniture for functional and stylish workplaces.', desk)}
        {card('Communication Systems', ' Phones, video conferencing tools, intercoms, and other business communication solutions.', monitoring)}
        {card('IT Services', '  Network setup, cloud services, data backup, and cybersecurity solutions to ensure smooth operations.', technical)}
        {card('Software', ' Business software for accounting, project management, HR, and customer relationship management (CRM).', software)}
        {card('Maintenance & Support', ' Ongoing service contracts for repair, maintenance, and technical support to minimize downtime.', support)}
      </div>
      <div className='md:mx-20'>
        <p className='text-3xl flex justify-center font-bold py-10'>Why Choose Us</p>
        <Collapse className='mx-2 md:mx-20' accordion items={items} />


      
      </div>
    </div>
  )
}

export default OfficeSolutions;