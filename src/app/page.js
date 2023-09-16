'use client'

import React from 'react';

import Image from 'next/image'

import { Layout, Menu, Collapse } from 'antd';
const { Header, Content, Footer } = Layout;

const Dashboard = () => {
  const headerItems = [
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

  const collapseItems = [
    {
      key: '1',
      label: '1. PETUNJUK PENGGUNAAN MOWBA',
      children: <p>Close it!</p>
    },
    {
      key: '2',
      label: '2. DAFTAR ISI',
      children: <p>Close it!</p>
    },
    {
      key: '3',
      label: '3. DAFTAR GAMBAR',
      children: <p>Close it!</p>
    },
    {
      key: '4',
      label: '4. PETA KONSEP',
      children: <p>Close it!</p>
    },
    {
      key: '5',
      label: '5. IDENTITAS MODUL',
      children: <p>Close it!</p>
    },
    {
      key: '6',
      label: '6. KOMPETENSI DASAR',
      children: <p>Close it!</p>
    }
  ]

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          background: 'white'
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
          items={headerItems}
          disabledOverflow
          style={{ borderBottom: 0 }}
        />
      </Header>

      <Content style={{ textAlign: 'center' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 352,
            backgroundImage: 'url(masjid-luar-batang.jpeg)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }}
        >
          <h1 style={{ color: 'white', fontSize: 58 }}>
            Sejarah Epidemi Pes di Malang (1911-1916)
          </h1>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 100,
            background: 'brown',
          }}
        >
          <strong style={{ color: 'white', fontSize: 18 }}>
            A. PENDAHULUAN
          </strong>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'red'
          }}
        >
          <div
            style={{
              width: 680,
              color: 'white',
              margin: 16,
              fontSize: 16
            }}
          >
            Sejauh mana kamu mengupdate informasi perkembangan Covid-19 di Malang?
            Pernahkah kamu mengetahui bahwa Malang pernah dilanda wabah penyakit besar-besaran seperti pandemi Covid-19 saat ini? Penasaran?
            Simak materi dalam E-Mopes ini dengan cermat ya anak-anak cerdas!
          </div>
        </div>

        <Collapse size="large" items={collapseItems}/>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        MOWBA ©2023 Created by Hafizh Sutisna
      </Footer>
    </Layout>
  );
};

export default Dashboard;
