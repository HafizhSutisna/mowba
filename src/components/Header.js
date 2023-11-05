'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Layout, Menu } from 'antd';
const { Header } = Layout;

const Headers = () => {
  const items = [
    {
      key: '1',
      label: <Link href="/">Pendahuluan</Link>
    },
    {
      key: '2',
      label: <Link href="/materi">Materi</Link>
    },
    {
      key: '3',
      label: <Link href="/penutup">Penutup</Link>
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
        background: 'rgb(241, 225, 221)'
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
        style={{ borderBottom: 0, background: 'rgb(241, 225, 221)' }}
      />
    </Header>
  )
}

export default Headers
