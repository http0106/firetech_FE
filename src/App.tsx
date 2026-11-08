import { useState } from 'react'
import './App.css'
import Header from './layout/Header'
import { FloatButton, Tooltip } from 'antd'
import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { FaArrowUp, FaHeadset, FaPhoneAlt } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
import { BsArrowBarUp } from 'react-icons/bs';
import Home from './users/Home';
import { Outlet } from 'react-router-dom';


const sharedProps: React.ComponentProps<typeof FloatButton.BackTop> = {
  showProgress: true,
  visibilityHeight: 0,
};

function App() {

  return (
    <>
      <Header />


      {/* Nút BackTop nằm ở phía trên */}
      <FloatButton.BackTop


        icon={<BsArrowBarUp size={22} />}
        {...sharedProps}
        style={{ insetInlineEnd: 20, bottom: 24 }}
        shape="circle"
      />
      <FloatButton.Group
        className='animate-pulse'
        trigger="hover"
        type="primary"
        style={{ insetInlineEnd: 20, bottom: 78 }}
        icon={<FaHeadset size={20} />}
      >
        <Tooltip placement="left" title={"Hỗ trợ trực tuyến"}>
          <FloatButton icon={<SiZalo size={20} />} />
        </Tooltip>
        <Tooltip placement="left" title={"Gọi điện"}>

          <FloatButton icon={<FaPhoneAlt size={20} />} />
        </Tooltip>

      </FloatButton.Group>
      <div className="max-w-[1280px] mx-auto">
        <Outlet />
      </div>
    </>
  )
}

export default App