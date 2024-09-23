import React from 'react';
import telecom from '../Assets/telecommunications.jpg';
import { Button, Form, Input, Space } from 'antd';
import support  from '../Assets/support.png';
import location from '../Assets/location.png';
import mail from '../Assets/mail.png';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function Contact() {
  return (
    <div className='w-[100%]'>
    <div className='h-[600px] text-white' style={{ backgroundImage: `url(${telecom})` }}>
      <p className='text-3xl font-bold pb-[100px] pt-[260px] flex justify-center'>Contact Us</p>
    </div>    
    <p className='font-bold text-xl flex justify-center my-10'>Feel Free to write us Anytime:</p>

    <div  className='flex flex-col md:flex-row w-full justify-center pb-10' >
    <Form
    className='border border-2 border-gray-700 p-10'
    layout='vertical'
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 700,
      minWidth:380,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Email"
      name="Email"
      rules={[
        {
          type: 'email',
          message: 'The input is not valid E-mail!',
        },
        {
          required: true,
          message: 'Please input your E-mail!',
        },
      ]}
    >
      <Input />
      </Form.Item>
      <Form.Item
        name="Message"
        label="Message"
        rules={[
          {
            required: true,
            message: 'Please input Your Message',
          },
        ]}
      >
        <Input.TextArea showCount maxLength={1000} />
      </Form.Item>
      <Form.Item >
        <Space>
          <Button type="primary" htmlType="submit">
            Send Message
          </Button>
          </Space>
          </Form.Item>
    </Form>
    <div className='w-[380px] h-[500px] bg-gray-200 p-10'>
      <div className='flex gap-5 '>
        <img className='w-10 h-10' src={support} />
        <div><p>Have A Question</p>
        <p className='font-bold'>1(767)440-5135</p>
        </div>  
      </div>

      <div className='flex gap-5 my-10'>
        <img className='w-10 h-10' src={mail} />
        <div><p>Send Email</p>
        <p className='font-bold'>n2ndistributors@gmail.com</p>
        </div>  
      </div>

      <div className='flex gap-5 '>
        <img className='w-10 h-10' src={location} />
        <div><p>Visit Anytime</p>
        <p className='font-bold'>Pottersville, Roseau</p>
        </div>  
      </div>

    </div>
    </div>
 
    </div> )
}

export default Contact