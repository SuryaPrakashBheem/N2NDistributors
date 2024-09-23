import React from 'react';
import banner from '../Assets/Rectangle292.png';
import approval from '../Assets/BillPayments/approval.png';
import digital from '../Assets/BillPayments/digital.png';
import paymentMethod from '../Assets/BillPayments/payment-method.png';
import payment from '../Assets/BillPayments/payment.png';
import securePayment from '../Assets/BillPayments/secure-payment.png';
import { Collapse } from 'antd';

function BillPaymentSolutions() {

  const card = (heading, content, image) => {
    return (
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <div className='w-[200px] h-[180px] shadow-2xl  p-3 '>
              <img className='h-12 ml-14 flex justify-center mt-5' src={image}></img>
              <p className='font-semibold flex justify-center pb-2 mt-10 text-md'>{heading}</p>
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
      label: 'Convenience and Flexibility',
      children: <p> We offer a streamlined process to make bill payments quick and hassle-free, with 24/7 access to our platform. </p>,
    },
    {
      key: '2',
      label: ' Transparent Fees',
      children: <p>  No hidden charges—clear breakdown of fees (if any) before you confirm payment.</p>,
    },
    {
      key: '3',
      label: 'Payment Reminders',
      children: <p> Get automated alerts and reminders to ensure you never miss a due date. </p>,
    },
    {
      key: '4',
      label: ' Customer Support',
      children: <p> Dedicated customer service available to assist you with any payment-related inquiries or issues.</p>,
    }, 
    {
      key: '5',
      label: 'Transaction History',
      children: <p>  Easily view and download your payment history for record-keeping and reference. </p>,
    }
  ];
  return (
    <div className='w-[100%] pb-20'>
      <div className='h-[600px] text-white' style={{ backgroundImage: `url(${banner})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center' }}>
        <p className='text-3xl font-bold pb-[60px] pt-[260px] flex justify-center'>Bill Payment Solutions</p>
        <p className='flex text-center text-lg md:px-20'>
          Our Bill Payment Solutions offer secure, convenient, and flexible payment options with real-time processing and automated reminders. Enjoy peace of mind with multiple payment methods, transparent fees, and 24/7 online access to manage your bills effortlessly.</p>
      </div>
      <p className='font-bold text-xl flex justify-center mt-20'>What We Offer</p>
      <p className='text-md p-2 mt-5 flex justify-center md:mx-20 text-center'>
      Our Bill Payment Solutions offer secure, convenient options for paying bills online. With multiple payment methods, real-time processing, and automated reminders, managing your payments is simple and efficient.</p>
      <div className='flex gap-20 flex-wrap justify-center p-10'>
        {card('Multiple Payment Options: ', ' We support a wide range of payment methods, including credit/debit cards, bank transfers, mobile wallets, and PayPal for convenient bill settlement.', payment)}
        {card('Automated Recurring Payments:', ' Set up automatic payments to ensure bills are paid on time, every time, without manual intervention.', paymentMethod)}
        {card('Real-Time Payment Processing:', ' Instant confirmation of payments, allowing you to see your transactions reflected immediately.', approval)}
        {card('Secure Payment Gateway:', ' We use industry-leading encryption and security protocols to ensure all transactions are safe and secure.', securePayment)}
        {card(' Easy Online Access:', ' Our user-friendly platform allows you to pay bills online from any device, anywhere, at any time.', digital)}
      </div>
      <div className='md:mx-20'>
      <p className='text-2xl flex pb-10 font-bold justify-center'> Why Choose Us</p>
      <Collapse className='mx-20' accordion items={items} />

      </div>
        
      
    </div>
  )
}

export default BillPaymentSolutions;