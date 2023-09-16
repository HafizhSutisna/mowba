'use client'

import React from 'react';

import Image from 'next/image'

import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

const Dashboard = () => {
  const menus = [
    {
      key: '1',
      label: 'Pendahuluan'
    },
    {
      key: '2',
      label: 'Materi'
    },
    {
      key: '3',
      label: 'Penutup'
    }
  ]

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          background: 'transparent'
        }}
      >
        <Image
          src="/logo-um.png"
          width={100}
          height={32}
          alt="Logo Kampus UM"
        />
        <Menu
          mode="horizontal"
          defaultOpenKeys={['1']}
          defaultSelectedKeys={['1']}
          items={menus}
          disabledOverflow
          style={{
            background: 'transparent',
            borderBottom: 0
          }}
        />
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: '0 50px',
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          style={{
            padding: 24,
            minHeight: 380,
          }}
        >
          Content
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        MOWBA ©2023 Created by Hafizh Sutisna
      </Footer>
    </Layout>
  );
};

export default Dashboard;
