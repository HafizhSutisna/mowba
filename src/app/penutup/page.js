'use client'

import { Layout, Collapse, Row, Col, Space, Image} from 'antd';
const { Content } = Layout;

const Penutup = () => {
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
            C. PENUTUP
          </h1>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 100,
            background: 'rgba(115,67,50,1)',
          }}
        >
          <strong style={{ color: '#f1c232', fontSize: 18 }}>
            A. GLOSARI
          </strong>
        </div>
        <div
          style={{
            background: 'rgba(115,67,50,1)',
            textAlign: 'start',
            paddingLeft: 150,
            paddingRight: 150,
            paddingBottom: 18,
            fontSize: 16
          }}
        >
          {/* <ol style={{ listStyle: 'none', lineHeight: 1.8 }}>
            <li style={{ color: 'white' }}>Batang : Sebuah kurung tempat menyimpan mayat (seperti keranda)</li>
            <li style={{ color: 'white' }}>Cungkup : Bangunan beratap di atas makam sebagai pelindung makam; rumah kubur. </li>
            <li style={{ color: 'white' }}>Kolom : Tiang (pilar) penyangga (biasanya dari beton yang bertulang besi).</li>
            <li style={{ color: 'white' }}>Madrasah : Sebuah instansi pendidikan Islam (sederajat sekolah).</li>
            <li style={{ color: 'white' }}>Mercusuar : Menara yang dibangun di pantai, pulau kecil di tengah laut, daerah berbatu karang, dan sebagainya, yang memancarkan sinar isyarat pada waktu malam hari untuk membantu navigasi.</li>
            <li style={{ color: 'white' }}>Pemugaran : Pembaharuan kembali atau perbaikan kembali</li>
            <li style={{ color: 'white' }}>Prasasti : Sebuah piagam (yang tertulis pada batu, tembaga, dan sebagainya), yang berisi sebuah informasi dari tempat dimana prasasti itu berada. </li>
            <li style={{ color: 'white' }}>Situs : Daerah temuan benda-benda purbakala</li>
          </ol> */}

          <Row gutter={[0, 8]} style={{ color: 'white' }}>
            <Col span={4} style={{ fontSize: 16 }} >Batang</Col>
            <Col span={20} style={{ fontSize: 16 }} >: Sebuah kurung tempat menyimpan mayat (seperti keranda)</Col>
            <Col span={4} style={{ fontSize: 16 }} >Cungkup</Col>
            <Col span={20} style={{ fontSize: 16 }} >: Bangunan beratap di atas makam sebagai pelindung makam; rumah kubur.</Col>
            <Col span={4} style={{ fontSize: 16 }} >Kolom</Col>
            <Col span={20} style={{ fontSize: 16 }} >: Tiang (pilar) penyangga (biasanya dari beton yang bertulang besi).</Col>
            <Col span={4} style={{ fontSize: 16 }} >Madrasah</Col>
            <Col span={20} style={{ fontSize: 16 }} >: Sebuah instansi pendidikan Islam (sederajat sekolah).</Col>
            <Col span={4} style={{ fontSize: 16 }} >Mercusuar</Col>
            <Col span={20} style={{ fontSize: 16 }} >: Menara yang dibangun di pantai, pulau kecil di tengah laut, daerah berbatu karang, dan sebagainya, yang memancarkan sinar isyarat pada waktu malam hari untuk membantu navigasi.</Col>
            <Col span={4} style={{ fontSize: 16 }} >Pemugaran</Col>
            <Col span={20} style={{ fontSize: 16 }} >: Pembaharuan kembali atau perbaikan kembali</Col>
            <Col span={4} style={{ fontSize: 16 }} >Prasasti</Col>
            <Col span={20} style={{ fontSize: 16 }} >: Sebuah piagam (yang tertulis pada batu, tembaga, dan sebagainya), yang berisi sebuah informasi dari tempat dimana prasasti itu berada.</Col>
            <Col span={4} style={{ fontSize: 16 }} >Situs</Col>
            <Col span={20} style={{ fontSize: 16 }} >: Daerah temuan benda-benda purbakala</Col>
          </Row>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: 100,
            background: 'rgba(204,67,49,1)',
          }}
        >
          <strong style={{ color: 'white', fontSize: 18 }}>
            B. DAFTAR RUJUKAN
          </strong>
        </div>
        <div
          style={{
            background: 'rgba(204,67,49,1)',
            textAlign: 'start',
            paddingLeft: 150,
            paddingRight: 150,
            paddingBottom: 18,
            fontSize: 16
          }}
        >
          <ol style={{ listStyle: 'none', lineHeight: 1.8, textAlign: 'justify' }}>
            <li style={{ paddingLeft: 40, textIndent: '-40px' }}>Abdullah, Sayid. 1998. Alhabib Husein Bin Abubakar Alaydrus : Memuat Karomah Kampung Luar Batang. Buletin, Jakarta.</li>
            <li style={{ paddingLeft: 40, textIndent: '-40px' }}>Ashadi, Dkk. 2017. “Fungsi Masjid Bersejarah Luar Batang, Jakarta Utara, dan Pengaruhnya terhadap Pola Permukiman di Sekitarnya”  dalam jurnal arsitektur Volume 16 </li>
            <li style={{ paddingLeft: 40, textIndent: '-40px' }}>Alvat, Pradikta Andi. 17 Januari 2019. Peran Penting Masyarakat dan Arti Penting Pelestarian Cagar Budaya. https://www.qureta.com/post/peran-penting. Diakses: 25 Oktober 2023</li>
            <li style={{ paddingLeft: 40, textIndent: '-40px' }}>Debdikbud. 1999. Mesjid Kuno Indonesia. Jakarta : Debdikbud Proyek Pembinaan Peninggalan Sejarah dan Kepurbakalaan Pusat.</li>
            <li style={{ paddingLeft: 40, textIndent: '-40px' }}>Fitriandini, S. 2021. Hubungan Sejarah dan Pengaruh Budaya Terhadap Proses Akulturasi Arsitektur Masjid-Masjid Tua Abad XVI-XX di Jakarta. Jurnal Ilmiah Desain & Konstruksi, 19(2), 157-168.</li>
            <li style={{ paddingLeft: 40, textIndent: '-40px' }}>Heuken, Adolf. 2003. ”Mesjid-mesjid Tua di Jakarta”. Penerbit Cipta Loka Caraka :Jakarta.</li>
            <li style={{ paddingLeft: 40, textIndent: '-40px' }}>Heuken, Adolf. 2007. ”Historical Sites of Jakarta”. Penerbit Cipta Loka Caraka :Jakarta.</li>
            <li style={{ paddingLeft: 40, textIndent: '-40px' }}>KementerianPendidikandanBudaya. http://cagarbudaya.kemdikbud.go.id/cagarbudaya/detail/PO2014100800274/masjid-luar-batang</li>
            <li style={{ paddingLeft: 40, textIndent: '-40px' }}>Lubis, Nina H., dkk. 2003. Sejarah Tatar Sunda, Jilid 1. Bandung: Lembaga Penelitian Universitas Padjajaran</li>
            <li style={{ paddingLeft: 40, textIndent: '-40px' }}>Ruchiat, Rachmat. 2012. Asal-Usul Nama Tempat di Jakarta. Jakarta : Mansup Jakarta.</li>
            <li style={{ paddingLeft: 40, textIndent: '-40px' }}>Sudarso, Yus. 1998. Sepintas Riwayat Shahibul Qutub Al-Habib Husein bin Abubakar Alaydrus.</li>
            <li style={{ paddingLeft: 40, textIndent: '-40px' }}>Undang-Undang Republik Indonesia Nomor 11 Tahun 2010 tentang Cagar Budaya (2010). [Diakses pada tanggal 25 Oktober 2023]. http://jdih.ristekdikti.go.id</li>
          </ol>
        </div>

        <div
          style={{
            background: 'rgba(241,225,221,1)',
            textAlign: 'start',
            paddingLeft: 150,
            paddingRight: 150,
            paddingBottom: 18,
            fontSize: 16
          }}
        >
          <h3 style={{ textAlign: 'center', paddingTop: 16 }}>C. Biografi Pengembang</h3>

          <h2 style={{ marginTop: 16, marginBottom: 16 }}>Hafizh Muhammad Dzikra Sutisna</h2>
          
          <Space size={'large'}>
            <Image
              width={200}
              src={'/profile.jpg'}
              alt='profile'
            />
            <div style={{ textAlign: 'justify', fontSize: 20 }}>Lahir pada 30 Mei 2000 di Depok, Jawa Barat. Ia merupakan mahasiswa Departemen Sejarah, Program Studi Pendidikan Sejarah, Universitas Negeri Malang (UM) angkatan 2019. Saat ini ia menempuh semester 9 (tahun ke-4) dalam perkuliahan. Hafizh tidak terlalu aktif dalam organisasi kemahasiswaan intra maupun ekstra kampus. Namun dalam organisasi kemasyarakatan, ia mengikuti cukup banyak organisasi seperti Remaja Masjid, Kader Muhammadiyah (Tingkat Ranting), serta Karang Taruna. </div>
          </Space>
        </div>
      </Content>
    </Layout>
  )
}

export default Penutup
