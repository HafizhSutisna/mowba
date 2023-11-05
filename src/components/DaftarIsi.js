import { Typography, List, Card, Space } from 'antd'

const DaftarIsi = () => {
  return (
    <Space direction='vertical' size={16}>
      <Card style={{ background: 'rgba(241,225,221,1)' }}>
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
            MATERI BELAJAR 1
            <br />
            SEJARAH BERDIRINYA MASJID LUAR BATANG
          </div>
        }
        bodyStyle={{ textAlign: 'start' }}
        style={{ background: 'rgba(241,225,221,1)' }}
      >
        <div>A. Tujuan Pembelajaran</div>
        <div>B. Uraian Materi</div>
        <div style={{ marginLeft: 18 }}>1. Kondisi sosial dan ekonomi Masyarakat Malang awal abad ke-20</div>
        <div style={{ marginLeft: 18 }}>2. Penyebaran Pes di Malang</div>
        <div>C. Uji Kompetensi</div>
        <div>D. Kunci Jawaban</div>
        <div>E. Penilaian Diri</div>
      </Card>

      <Card
        title={
          <div>
            MATERI BELAJAR 2
            <br />
            MASJID LUAR BATANG SEBAGAI SEJARAH LOKAL DAN CAGAR BUDAYA MILIK DKI JAKARTA YANG BERBENTUK BANGUNAN
          </div>
        }
        bodyStyle={{ textAlign: 'start' }}
        style={{ background: 'rgba(241,225,221,1)' }}
      >
        <div>A. Tujuan Pembelajaran</div>
        <div>B. Uraian Materi</div>
        <div style={{ marginLeft: 18 }}>1. Pemberantasan Pes di Malang tahun 1911-1916</div>
        <div style={{ marginLeft: 18 }}>2. Dampak Pes di Malang tahun 1911-1916</div>
        <div>C. Uji Kompetensi</div>
        <div>D. Kunci Jawaban</div>
        <div>E. Penilaian Diri</div>
      </Card>

      <Card style={{ background: 'rgba(241,225,221,1)' }}>
        <div>PENUTUP</div>
        <div>GLOSARI</div>
        <div>DAFTAR RUJUKAN</div>
        <div>BIOGRAFI PENGEMBANG</div>
      </Card>
    </Space>
  )
}

export default DaftarIsi