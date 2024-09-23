import React from 'react';
import banner from '../Assets/Rectangle288.png';
import access from '../Assets/securitySolutions/access-control.png';
import cctv from '../Assets/securitySolutions/cctv-camera.png';
import Consultation from '../Assets/securitySolutions/consultation.png';
import firedetector from '../Assets/securitySolutions/fire-detector.png';
import door from '../Assets/securitySolutions/smart-door.png';
import security from '../Assets/securitySolutions/security.png'
import support from '../Assets/support.png';
import { Collapse } from 'antd';

function SecuritySolutions() {
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
      label: ' Tailored Security Solutions',
      children: <p> Personalized systems designed to meet the specific security needs of your home or business.</p>,
    },
    {
      key: '2',
      label: ' Cutting-Edge Technology',
      children: <p> Latest innovations in surveillance, access control, and alarm systems to provide robust protection.</p>,
    },
    {
      key: '3',
      label: ' Expert Installation',
      children: <p> Professional setup and configuration of all security equipment for maximum efficiency and reliability.</p>,
    },
    {
      key: '4',
      label: ' Scalability',
      children: <p> Security systems that can grow with your needs, whether you're a small business or a large corporation.</p>,
    },
    {
      key: '5',
      label: ' Remote Monitoring',
      children: <p>  Access to live surveillance feeds and control over security systems from anywhere using mobile devices.</p>,
    },
    {
      key: '6',
      label: '  Proactive Support',
      children: <p> Regular system maintenance, upgrades, and 24/7 technical support to ensure seamless operation.</p>,
    },
  ];
  return (
    <div className='w-[100%]'>
      <div className='h-[600px] text-white' style={{ backgroundImage: `url(${banner})` }}>
        <p className='text-3xl font-bold pb-[60px] pt-[260px] flex justify-center'>Security Solutions</p>
        <p className='flex text-center text-sm md:text-lg md:px-20'>
          Security Solutions and Systems Suppliers offer a comprehensive range of advanced security products and
          services designed to protect both residential and commercial properties. From surveillance systems and access control
          to alarm systems and integrated security networks, these suppliers ensure the safety of people, property, and sensitive information.
          With cutting-edge technology and expert support, they provide customized security solutions tailored to meet the unique needs of every client.</p>
      </div>
      <p className='font-bold text-xl flex justify-center mt-20'>What We Offer</p>
      <p className='text-md p-2 mt-5 flex justify-center md:mx-20 text-center'>
        Our Security Solutions offer advanced protection through surveillance systems,
        access control, and alarm monitoring, ensuring safety and peace of mind for businesses and individuals.
      </p>
      <div className='flex gap-20 flex-wrap justify-center p-10'>
        {card('Surveillance Systems: ', ' High-definition CCTV cameras, video recording systems (DVR/NVR), and remote monitoring solutions.', cctv)}
        {card('Access Control Systems:', '  Biometric scanners, card access systems, and keyless entry technologies to manage who enters and exits your premises.', access)}
        {card('Alarm Systems:', ' Intruder alarms, fire detection systems, and emergency alert systems to ensure rapid response in critical situations.', firedetector)}
        {card('Integrated Security Solutions:', ' Unified security systems combining video surveillance, access control, and alarms into a single platform for centralized monitoring.', Consultation)}
        {card('Home & Business Security:', ' Custom security setups for residential, small business, and large commercial applications.', door)}
        {card('Security Consulting:', ' Expert advice and planning for optimal security design, system installation, and risk mitigation.', security)}
        {card('24/7 Monitoring & Support:', ' Continuous monitoring services for real-time alerts and swift response to any security breaches.', support)}
      </div>

      <div className='md:px-20 pb-10 flex flex-col justify-center'>
        <p className='text-2xl flex pb-10 font-bold justify-center'> Why Choose Us</p>
        <Collapse className='mx-20' accordion items={items} />
      </div>
    </div>
  )
}


export default SecuritySolutions;