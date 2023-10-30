'use client'

import { Layout, Collapse } from 'antd';
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
          <strong style={{ color: 'white', fontSize: 18 }}>
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
          <ol style={{ listStyle: 'none', lineHeight: 1.8 }}>
            <li style={{ color: '#f1c232' }}>Batang : Sebuah kurung tempat menyimpan mayat (seperti keranda)</li>
            <li style={{ color: '#f1c232' }}>Cungkup : Bangunan beratap di atas makam sebagai pelindung makam; rumah kubur. </li>
            <li style={{ color: '#f1c232' }}>Kolom : Tiang (pilar) penyangga (biasanya dari beton yang bertulang besi).</li>
            <li style={{ color: '#f1c232' }}>Madrasah : Sebuah instansi pendidikan Islam (sederajat sekolah).</li>
            <li style={{ color: '#f1c232' }}>Mercusuar : Menara yang dibangun di pantai, pulau kecil di tengah laut, daerah berbatu karang, dan sebagainya, yang memancarkan sinar isyarat pada waktu malam hari untuk membantu navigasi.</li>
            <li style={{ color: '#f1c232' }}>Pemugaran : Pembaharuan kembali atau perbaikan kembali</li>
            <li style={{ color: '#f1c232' }}>Prasasti : Sebuah piagam (yang tertulis pada batu, tembaga, dan sebagainya), yang berisi sebuah informasi dari tempat dimana prasasti itu berada. </li>
            <li style={{ color: '#f1c232' }}>Situs : Daerah temuan benda-benda purbakala</li>
          </ol>
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
          <ol style={{ listStyle: 'none', lineHeight: 1.8 }}>
            <li>Abdullah, Sayid. 1998. Alhabib Husein Bin Abubakar Alaydrus : Memuat Karomah Kampung Luar Batang. Buletin, Jakarta.</li>
            <li>Ashadi, Dkk. 2017. “Fungsi Masjid Bersejarah Luar Batang, Jakarta Utara, dan Pengaruhnya terhadap Pola Permukiman di Sekitarnya”  dalam jurnal arsitektur Volume 16 </li>
            <li>Alvat, Pradikta Andi. 17 Januari 2019. Peran Penting Masyarakat dan Arti Penting Pelestarian Cagar Budaya. https://www.qureta.com/post/peran-penting. Diakses: 25 Oktober 2023</li>
            <li>Debdikbud. 1999. Mesjid Kuno Indonesia. Jakarta : Debdikbud Proyek Pembinaan Peninggalan Sejarah dan Kepurbakalaan Pusat.</li>
            <li>Heuken, Adolf. 2003. ”Mesjid-mesjid Tua di Jakarta”. Penerbit Cipta Loka Caraka :Jakarta.</li>
            <li>Heuken, Adolf. 2007. ”Historical Sites of Jakarta”. Penerbit Cipta Loka Caraka :Jakarta.</li>
            <li>KementerianPendidikandanBudaya. http://cagarbudaya.kemdikbud.go.id/cagarbudaya/detail/PO2014100800274/masjid-luar-batang</li>
            <li>Ruchiat, Rachmat. 2012. Asal-Usul Nama Tempat di Jakarta. Jakarta : Mansup Jakarta.</li>
            <li>Sudarso, Yus. 1998. Sepintas Riwayat Shahibul Qutub Al-Habib Husein bin Abubakar Alaydrus.</li>
            <li>Undang-Undang Republik Indonesia Nomor 11 Tahun 2010 tentang Cagar Budaya (2010). [Diakses pada tanggal 25 Oktober 2023]. http://jdih.ristekdikti.go.id</li>
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
          <div>Lahir pada 30 Mei 2000 di Depok, Jawa Barat. Ia merupakan mahasiswa Departemen Sejarah, Program Studi Pendidikan Sejarah, Universitas Negeri Malang (UM) angkatan 2019. Saat ini ia menempuh semester 9 (tahun ke-4) dalam perkuliahan. Hafizh tidak terlalu aktif dalam organisasi kemahasiswaan intra maupun ekstra kampus. Namun dalam organisasi kemasyarakatan, ia mengikuti cukup banyak organisasi seperti Remaja Masjid, Kader Muhammadiyah (Tingkat Ranting), serta Karang Taruna. </div>
        </div>
      </Content>
    </Layout>
  )
}

export default Penutup
