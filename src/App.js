import React, { useEffect, useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import Home from './Components/Home';
import Contact from './Components/Contact';
import logo from './Assets/Logo.png'
import TeleCommunications from './Components/TeleCommunications';
import OfficeSolutions from './Components/OfficeSolutions';
import SecuritySolutions from './Components/SecuritySolutions';
import ITNetworkCabling from './Components/ITNetworkCabling';
import ComputerElectronics from './Components/ComputerElectronics';
import CourierAndShipping from './Components/CourierAndShipping';
import BillPaymentSolutions from './Components/BillPaymentSolutions';
import { DownOutlined,LinkedinOutlined,FacebookOutlined,WhatsAppOutlined  } from '@ant-design/icons'; 

const { SubMenu, Item } = Menu;
const { Header, Content, Footer } = Layout;

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedMenuItem, setSelectedMenuItem] = useState('1');

  const handleClick = () => {
    window.location.reload(); // Refresh the page
  };


  const handleMenuClick = (e) => {
    setSelectedMenuItem(e.key);
  };

  const renderContent = () => {
    switch (selectedMenuItem) {
      case '1':
        return <Home />;
      case 'TeleCommunications':
        return <TeleCommunications />;
      case 'OfficeSolutions':
        return <OfficeSolutions />;
      case 'SecuritySolutions':
        return <SecuritySolutions />;
      case 'ITNetworkCabling':
        return <ITNetworkCabling />;
      case 'ComputerElectronics':
        return <ComputerElectronics />;
      case 'CourierAndShipping':
        return <CourierAndShipping />;
      case 'BillPaymentSolutions':
        return <BillPaymentSolutions />;
      case '3':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Layout style={{ backgroundColor: '#e9edf5' }}>
      <Header
        className={`m-[2%] w-[96%] rounded-lg fixed z-50 transition-transform duration-300 ${isVisible ? "transform translate-y-0" : "transform -translate-y-[150%]"}`}
        style={{ display: 'flex', alignItems: 'center', backgroundColor: '#0f97f2' }}>
        <div className="demo-logo  md:mx-10"><img alt='Logo' onClick={handleClick} style={{ height: '80px', display: 'flex', alignItems: 'center', }} src={logo} /></div>
        <Menu
          theme="dark"
          mode="horizontal"
          className='text-md font-semibold flex md:mx-[20%] justify-evenly text-lg'
          selectedKeys={[selectedMenuItem]}
          onClick={handleMenuClick}
          style={{ flex: 1, minWidth: 0, backgroundColor: '#0f97f2' }}
        >
            <Menu.Item key='1'>Home</Menu.Item>
          <SubMenu key="Services"   title={
          <span className="flex justify-between items-center w-full">
            Services
            <DownOutlined  className='mt-1 ml-1'/>
          </span>
        }   >
            <Item key="TeleCommunications">Tele Communications</Item>
            <Item key="OfficeSolutions">Office Solutions</Item>
            <Item key="SecuritySolutions">Security Solutions</Item>
            <Item key="ITNetworkCabling">IT Network Solutions</Item>
            <Item key="ComputerElectronics">Computer Electronics</Item>
            <Item key="CourierAndShipping">Courier and Shipping</Item>
            <Item key="BillPaymentSolutions">Bill Payment Solutions</Item>
          </SubMenu>
          <Menu.Item key='3'>Contact</Menu.Item>
          </Menu>
      </Header>
      <Content style={{ padding: '0px 0px' }}>

        <div
          style={{
            background: colorBgContainer,
            minHeight: 580,
            padding: 0,
            borderRadius: borderRadiusLG,
          }}
        >
          {renderContent()}
        </div>
      </Content>
      <Footer className='bg-black text-white md:pr-[200px] pb-10'>
        <div className='md:flex gap-[150px] justify-center'>
        <div>
        <div className='h-[100px] w-[150px] bg-white rounded-lg flex my-10 justify-center items-center'><img onClick={handleClick} src={logo}></img></div>
        
        </div>
           {/* Services Footer */}
        <div className='text-md'>
          <p className='font-bold py-2 underline text-xl'>Services</p>
          <p>TeleCommunications</p>
          <p className='py-2'>Office Solutions</p>
          <p>Security Solutions</p>
          <p className='py-2'>IT Network Cabling</p>
          <p>Computer Electronics</p>
          <p className='py-2'>Courier and Shipping</p>
          <p>Bill Payment Solutions</p>
        </div>
        <div>
          <p className='text-xl py-2 font-bold underline'>Related Businesses</p>
          <p className='text-md'>FoneShack</p>
          <p className='text-md py-2'>Dominica Business Systems</p>
          <p className='text-md'>ezBARREL</p>
          <p className='text-xl py-2 pt-8 font-bold underline'>Get in Touch</p>

          <div className='flex gap-5 py-2'>
       <a href="https://www.linkedin.com/company/n2n-distributors/" target="_blank" rel="noopener noreferrer" ><LinkedinOutlined   className='text-2xl'/></a>
       <a href='https://www.facebook.com/p/N2N-Distributors-Ltd-100063858645846/' target="_blank" rel='noopener noreferrer'><FacebookOutlined  className='text-2xl'/></a>
       <WhatsAppOutlined  className='text-2xl'/>
       </div>
        </div>
        <div className='text-md'>
          <p className='font-bold underline text-xl py-2'>Contact</p>
          <p> 1(767)440-5135</p>
          <p className='py-2'> n2n@gmail.com</p>
          <p>Pottersville,Roseau</p>
        </div>
        </div>
        <div className='ml-20 bg-white h-[1px] mt-10'></div>
       <p className='flex justify-center mt-5'> N2N Distributors ©{new Date().getFullYear()} Created by Ez Barrel</p>
     
      </Footer>
    </Layout>
  );
};

export default App;
