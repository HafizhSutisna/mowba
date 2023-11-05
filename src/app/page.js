'use client'

import Image from 'next/image'

import { Layout, Collapse } from 'antd';
const { Content } = Layout;

import PetunjukPenggunaanMowba from '../components/PetunjukPenggunaanMowba'
import DaftarIsi from '../components/DaftarIsi'
import IdentitasModul from '../components/IdentitasModul'
import KompetensiDasar from '../components/KompetensiDasar'
import DaftarGambar from '../components/DaftarGambar'

const Dashboard = () => {
  const collapseItems = [
    {
      key: '1',
      label: <span style={{ color: 'rgb(241, 194, 50)' }}>1. PETUNJUK PENGGUNAAN MOWBA</span>,
      children: <PetunjukPenggunaanMowba />
    },
    {
      key: '2',
      label: <span style={{ color: 'rgb(241, 194, 50)' }}>2. DAFTAR ISI</span>,
      children: <DaftarIsi />
    },
    {
      key: '3',
      label: <span style={{ color: 'rgb(241, 194, 50)' }}>3. DAFTAR GAMBAR</span>,
      children: <DaftarGambar />
    },
    {
      key: '4',
      label: <span style={{ color: 'rgb(241, 194, 50)' }}>4. PETA KONSEP</span>,
      children: <Image src="/peta-konsep.jpg" alt='gambar-1' width={827} height={582} />
    },
    {
      key: '5',
      label: <span style={{ color: 'rgb(241, 194, 50)' }}>5. IDENTITAS MODUL</span>,
      children: <IdentitasModul />
    },
    {
      key: '6',
      label: <span style={{ color: 'rgb(241, 194, 50)' }}>6. KOMPETENSI DASAR</span>,
      children: <KompetensiDasar />
    }
  ]

  return (
    <Layout style={{ minHeight: '100vh' }}>
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
            MOWBA
            <br />
            Sejarah Lokal DKI Jakarta (Masjid Luar Batang)
          </h1>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 100,
            background: 'rgb(115, 67, 50)',
          }}
        >
          <strong style={{ color: 'rgb(241, 194, 50)', fontSize: 18 }}>
            A. PENDAHULUAN
          </strong>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgb(115, 67, 50)'
          }}
        >
          <div
            style={{
              width: 680,
              color: 'rgb(241, 194, 50)',
              margin: 16,
              fontSize: 16
            }}
          >
            <p>
              Assalamu’alaikum Wr. Wb. Halo anak-anak cerdas! Selamat datang di Mowba.
            </p>
            <br />
            <p>
              Sejauh mana kamu mengetahui sejarah lokal di DKI Jakarta?
              Pernahkan kamu menyadari bahwa di kota Metropolitan seperti Jakarta ini memiliki sejarah lokal,
              khususnya yang bercorak islam? Penasaran? Mari simak materi di dalam Mowba ini dengan cermat ya anak-anak cerdas!
            </p>
          </div>
        </div>

        <Collapse size="large" items={collapseItems} style={{ background: 'rgb(115, 67, 50)' }} />
      </Content>
    </Layout>
  );
};

export default Dashboard;
