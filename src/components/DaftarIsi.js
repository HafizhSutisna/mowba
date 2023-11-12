import { Typography, List, Card, Space } from 'antd'

const DaftarIsi = () => {
  return (
    <Space direction='vertical' size={16}>
      <Card style={{ background: 'rgba(241,225,221,1)', fontWeight: 'bold' }}>
        <div>PENDAHULUAN</div>
        <div>PETUNJUK PENGGUNAAN MOWBA</div>
        <div>DAFTAR ISI</div>
        <div>DAFTAR GAMBAR</div>
        <div>PETA KONSEP</div>
        <div>IDENTITAS MODUL</div>
        <div>KOMPETENSI DASAR</div>
      </Card>

      <Card
        title={
          <div>
            MATERI BELAJAR
            <br />
            SEJARAH BERDIRINYA MASJID LUAR BATANG
          </div>
        }
        bodyStyle={{ textAlign: 'start' }}
        style={{ background: 'rgba(241,225,221,1)' }}
      >
        <div>A. Tujuan Pembelajaran</div>
        <div>B. Uraian Materi</div>
        <div style={{ marginLeft: 18 }}>1. Sejarah Situs Masjid Luar Batang</div>
        <div style={{ marginLeft: 18 }}>2. Deskripsi Situs</div>
        <div style={{ marginLeft: 18 }}>3. Penetapan Situs Sebagai Bangunan Cagar Budaya di DKI Jakarta</div>
        <div>C. Uji Kompetensi</div>
        <div>D. Kunci Jawaban</div>
        <div>E. Penilaian Diri</div>
      </Card>

      <Card style={{ background: 'rgba(241,225,221,1)', fontWeight: 'bold' }}>
        <div>PENUTUP</div>
        <div>GLOSARI</div>
        <div>DAFTAR RUJUKAN</div>
        <div>BIOGRAFI PENGEMBANG</div>
      </Card>
    </Space>
  )
}

export default DaftarIsi