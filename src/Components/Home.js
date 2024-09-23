import React from 'react';
import vid from '../Assets/bannerVid.mp4';
import {
  MobileOutlined, DesktopOutlined
} from '@ant-design/icons';
import article from '../Assets/article.jpg';
import bills from '../Assets/Bills.jpg';
import cable from '../Assets/strucured-cabling.jpg';
import mobile from '../Assets/Mobile.webp';
import network from '../Assets/NetworkCabling.jpg';
import security from '../Assets/securitySystems.webp';
import workspace from '../Assets/Workspace.jpg';
import {
  MapContainer,
  TileLayer,
  useMap,
} from 'https://cdn.esm.sh/react-leaflet'
import MyMap from './Map';

function Home() {
  const ServiceCard = (content, image) => {
    return (
      <div class="card">
      <div class="first-content">
        <img className='h-full w-full rounded-xl' src={image}></img>
      </div>
      <div class="second-content">
    <span className='pt-20 text-center'>{content}</span>
      </div>
    
    
    </div>

    )
  }
  return (
    <div>

      <div style={{ height: '600px', width: '100%' }} className='flex flex-col justify-center text-white items-center  relative overflow-hidden'>
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-[600px] object-cover"
        >
          <source src={vid} type="video/mp4" />
        </video>
        <div className='relative bg-opacity-40 text-center'>
          <h1 style={{ marginTop: '250px' }} className='text-3xl md:text-5xl font-bold'>N2N DISTRIBUTORS</h1>
          <p className='mt-5 mb-24 mx-20 font-bold text-lg opacity-100'>
            N2N Distributors is a 28-year-old distribution and holding company in Dominica, focused on managing and growing technology brands
            with a core team of experts and strong business partnerships.</p>
        </div></div>


      <div className='p-10 w-[100%]'>
        <p className='text-3xl font-bold flex items-center justify-center w-[100%]'>Our Services</p>
        <div className='flex gap-10 p-5 flex-wrap justify-center'>
          {ServiceCard('Telecommunications distributors of mobile airtime and handsets', mobile)}
          {ServiceCard('Office Solutions, Equipment and Service dealers', workspace)}
          {ServiceCard('Security Solution and Systems Suppliers', security)}
          {ServiceCard('IT Network structural cabling Installers', network)}
          {ServiceCard('Computer and Electronics Suppliers', cable)}
          {ServiceCard('Courier and Shipping Agents', article)}
          {ServiceCard('Bill payment solutions provider', bills)}</div>

      </div>
      <div className='md:mx-20 rounded-2xl pb-10'>
        <p className='text-2xl flex justify-center font-bold'>Retail Location</p>
        <p className='text-lg flex justify-center p-2 pb-10'>Find us across Dominica at Convenient locations</p>
      <MyMap />
      </div>

    </div>
  )
}

export default Home ;