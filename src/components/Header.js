'use client'

import Image from 'next/image'

import { Layout, Menu } from 'antd';
const { Header } = Layout;

const Headers = () => {
  const items = [
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
        items={items}
        disabledOverflow
        style={{ borderBottom: 0 }}
      />
    </Header>
  )
}

export default Headers
