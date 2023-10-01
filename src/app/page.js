'use client'

import { Layout, Collapse } from 'antd';
const { Content } = Layout;

import PetunjukPenggunaanMowba from '../components/PetunjukPenggunaanMowba'
import DaftarIsi from '../components/DaftarIsi'
import IdentitasModul from '../components/IdentitasModul'
import KompetensiDasar from '../components/KompetensiDasar'

const Dashboard = () => {
  const collapseItems = [
    {
      key: '1',
      label: '1. PETUNJUK PENGGUNAAN MOWBA',
      children: <PetunjukPenggunaanMowba />
    },
    {
      key: '2',
      label: '2. DAFTAR ISI',
      children: <DaftarIsi />
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
      children: <IdentitasModul />
    },
    {
      key: '6',
      label: '6. KOMPETENSI DASAR',
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

        <Collapse size="large" items={collapseItems} />
      </Content>
    </Layout>
  );
};

export default Dashboard;
