'use client'

import Image from 'next/image'

import { Layout } from 'antd';
const { Content } = Layout;

const Materi = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ textAlign: 'justify' }}>
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
            B. MATERI PEMBELAJARAN
          </h1>
        </div>

        <div
          style={{
            background: 'rgb(115, 67, 50)',
            paddingLeft: 150,
            paddingRight: 150,
            paddingBottom: 18,
            fontSize: 16,
            lineHeight: 1.5,
            color: 'rgb(241, 194, 50)'
          }}
        >
          <h3 style={{ paddingTop: 16, paddingBottom: 16 }}>A. Tujuan Pembelajaran</h3>
          <p style={{ textIndent: 32 }}> Melalui bahasan ini, siswa diharapkan dapat mengetahui sejarah Situs Masjid Luar Batang,  Mengidentifikasi bagian-bagian di kompleks dan penetapan situs Masjid Luar Batang sebagai bangunan cagar budaya. </p>

          <hr style={{ margin: '32px 0 32px 0' }} />

          <h3 style={{ marginBottom: 16 }}>B. Sejarah Berdirinya Situs</h3>
          <p style={{ textIndent: 32 }}>DKI Jakarta merupakan salah satu kota terbesar sekaligus Ibukota di Indonesia. Jakarta sendiri memiliki rangkaian peristiwa sejarah yang cukup panjang sejak ditaklukannya Pelabuhan Sunda Kelapa oleh Pasukan Kesultanan Cirebon yang dipimpin Fatahillah dari tangan Portugis pada tahun 1527 dan saat itu diberi nama Jayakarta yang artinya kota kemenangan. Kekuasaan atas Jayakarta pun diserahkan kepada Pangeran Jayakarta dan Nama Jakarta yang kita kenal sekarang diambil dari dari nama Jayakarta. Keberhasilan penaklukan tersebut disebabkan karena penyebaran agama Islam telah memainkan peran penting bagi pelayaran ataupun perdagangan di sekitar Laut Jawa sehingga menyebabkan berkembangnya pelabuhan-pelabuhan di sepanjang PANTURA (Pantai Utara) pulau Jawa, salah satunya adalah Pelabuhan Sunda Kelapa.</p>
          <p style={{ textIndent: 32 }}>Selanjutnya, pada tahun 1602 VOC yang merupakan sekumpulan Kongsi Dagang dari Hindia Belanda berhasil mendaratkan kakinya di Nusantara dan juga berhasil menguasai perdagangan di sekitar Banten hingga Jayakarta. Pada akhirnya, Jayakarta pun berhasil direbut (Bernard, 2008). Namun ternyata, Sunda Kelapa berkembang menjadi arena perebutan kekuasaan antarnegara Penjajah yaitu antara Belanda dan Inggris. Karena perebutan kekuasaan inilah, J.P Coen membumihanguskan Jayakarta dan membangun ulang kota tersebut serta mengganti namanya menjadi Batavia yang dibuat seolah-olah seperti tiruan dari kota Amsterdam, Ibukota Belanda. Batavia sendiri kemudian dijadikan sebagai pusat pemerintahan VOC dan Hindia Belanda. Sisa-sisa peninggalan dari kota Batavia di kawasan Sunda Kelapa itulah yang saat ini telah menjadi Situs Kota Tua. Sementara itu, nama Jakarta nantinya kembali digunakan ketika masa penjajahan Jepang guna mengganti segala embel-embel Belanda, termasuk penamaan kota Batavia tersebut. Sejak awal Jakarta memang dikenal sebagai kota pelabuhan yang bercorak internasional. Banyak hal yang mewarnai sejarah maupun kehidupannya sekarang. Orang dengan latar belakang kebudayaan, warna kulit, dan keyakinan agama yang berbeda-beda bertemu di wilayah ini sejak berabad-abad lamanya. Meskipun orang Belanda lebih lama berkuasa pada masa penjahaan itu, bukan berarti semua peninggalan bersejarah saat itu berhubungan dengan mereka. Beberapa peninggalan bersejarah berhubungan dengan orang Pribumi, orang Tionghoa, imigran Jazirah Arab dan India. Misalnya yang berhubungan dengan imigran Jazirah Arab, dimana pada tahun 1736 M, seorang Waliyullah asal Hadramaut Yaman yaitu Alhabib Husein Bin Abubakar Bin Abdullah Alaydrus berhasil mendarat di area Pelabuhan Sunda Kelapa dan singgah di sebuah kampung yang berjarak hanya bersebrangan dari bibir Pelabuhan Sunda Kelapa. Dalam waktu 3 tahun setelah kedatangannya, Habib tersebut berhasil memberikan pengaruh yang luar biasa bagi kampung tersebut dan berhasil membangun sebuah Surau (Masjid berukuran Kecil). Bangunan tersebut pun masih berdiri kokoh di pinggir pantai Sunda Kelapa hingga saat ini dan dianggap sakral sebagai satu-satunya peninggalan sang Habib.</p>
          <p style={{ textIndent: 32 }}>Masjid Luar Batang merupakan salah satu bangunan bersejarah tertua yang berada di DKI Jakarta. Masjid ini berlokasi di wilayah Penjaringan, Jakarta Utara atau terletak di Utara zona inti situs Kota Tua, berada tepat di perkampungan padat penduduk, serta berada di seberang kawasan pasar ikan dan Situs Pelabuhan Sunda Kelapa (1527). Dalam beberapa catatan sejarah, seperti yang muncul di atas pintu masjid bahwa bangunan tersebut selesai dibangun pada 20 Muharam 1152 H atau sama dengan tanggal 29 April 1739. Selain itu terdapat juga sebuah Prasasti yang tertulis bahwa Habib Husein bin Abubakar bin Abdullah Alaydrus wafat pada hari Kamis, 27 Ramadhan 1169 H atau bertepatan dengan 24 Juni 1756. Namun menurut sumber lain yang ditulis oleh van den Berg tahun 1886, Habib Husein meninggal tahun 1789 (Heuken, 2003:50).</p>
          <p style={{ textIndent: 32 }}>Habib Husein bin Abubakar Alaydrus sendiri merupakan seorang ulama atau Waliyullah yang berasal dari Hadramaut, Yaman yang berhasil singgah dan menetap di sekitar Pantai Sunda Kelapa pada tahun 1736 M. Beliau merupakan tokoh agama yang sangat ramah dan mudah beradaptasi dengan Masyarakat sekitar. Tidak ada sumber pasti yang menyebutkan maksud kedatangan beliau ke Nusantara. Namun, berdasarkan informasi yang didapat peneliti dari Juru kunci Masjid tersebut, kemungkinan besar disebabkan karena Sejak dahulu, pada dasarnya kawasan Utara Jakarta memang dikenal sebagai kota pelabuhan yang bercorak internasional dan menyebabkan banyak hal yang mewarnai sejarah maupun kehidupan yang ada di Jakarta pada saat ini. Seperti yang kita ketahui bersama, orang-orang Belanda berkuasa sangat lama pada masa penjajahan. Namun, bukan berarti semua peninggalan bersejarah saat itu berhubungan dengan mereka. Beberapa peninggalan bersejarah pun banyak yang berhubungan dengan orang Pribumi, orang Tionghoa, imigran Jazirah Arab dan India (Heuken, 2003). Salah satu contohnya adalah Kedatangan Habib Husein ini yang merupakan Imigran asal Jazirah Arab yaitu Hadramaut, Yaman. </p>
          <p style={{ textIndent: 32 }}>Selanjutnya, Habib Husein Bin Abubakar Bin Alaydrus membangun sebuah ’surau’ didekat kediaman beliau untuk kepentingan dalam beribadah, bahkan tidak jarang beliau mengajak masyarakat sekitar ataupun masyarakat itu sendiri yang datang secara langsung. Hal tersebut telah membuat sebuah keterikatan hubungan sosial yang pada akhirnya membuat surau tersebut diperluas menjadi sebuah Masjid (pengganti ’surau’) pembangunannya dinyatakan selesai pada tahun 1739 M (Heuken 2003). Pada era penjajahan Belanda tersebut, bangunan masjid tersebut masih tampak seperti gudang walaupun sudah diperluas. Sehingga, untuk menandai bahwa bangunan tersebut merupakan tempat ibadah, di halaman masjid dibangun bangunan seperti mercusuar dengan puncak menara serupa dengan kubah. Walaupun lokasinya sangat dekat dengan Pelabuhan dan pusat pemerintahan di Belanda di Batavia, ternyata keberadaan dan aktivitas dari Habib Husein pada saat itu tidak berpengaruh apa-apa dan tidak dianggap sebagai sebuah ancaman bagi Belanda. Karena lokasi perkampungannya yang tidak cukup luas dan berada di pesisiran Pantai, Belanda pun hanya memberikan sebuah batasan wilayah sendiri atau semacam kebebasan aktivitas kepada Habib Husein dan kampung Luar Batang. Selain itu, Belanda juga menganggap bahwa Kampung Luar Batang saat itu adalah sebatas tempat berkumpulnya para Imigran Arab.</p>
          
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1bfwu5DumcRd6Vn8QDo9bBC0VcV-HaNN7" alt='gambar-1' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 1 Ilustrasi keberadaan imigran arab di pesisir utara kota Batavia
              <br />
              (Wikipedia, diakses 2023)
            </div>
          </div>

          <p style={{ textIndent: 32 }}>Sementara itu, asal-usul pemberian nama “Luar Batang” berkaitan dengan eksistensi dan peristiwa wafatnya Habib Husein itu sendiri sebagai seorang Waliyullah. Sebagaimana yang dijelaskan Sayyid Abdullah dalam bukunya yang berjudul “Sepintas Riwayat Shahibul Qutab Alhabib Husein bin Abubakar Alaydrus”, 1998, halaman 4-5 : “Beliau (yang dimaksud adalah Al-habib Husein Al-Aydrus) meninggal pada 27 Juni 1756 dalam usia ke 40 tahun. Jenazahnya diusung dalam kurung batang (bahasa lokal untuk ‘keranda’) ditandu ke kuburan Tanah Abang seperti seharusnya. Namun sesampainya di kuburan, jenazah Habib tiada lagi dan ternyata sudah kembali ke rumahnya (Area Masjid). Hal ini terjadi berulang kali. Maka disepakati, bahwa jenazah ini dikebumikan di rumahnya yang karenanya disebut Luar Batang”.</p>
          <p style={{ textIndent: 32 }}>Selain itu, kawasan perkampungan itu disebut Luar Batang karena terletak di luar batang pengempangan, atau penghalang, yang diletakkan melintang di muara sungai Ciliwung. Pengempangan tersebut terbuat dari batang kayu yang diperkuat juga dengan besi. Dalam bahasa Belanda, batang kayu itu disebut “Boom”, sebagaimana yang diperkirakan sudah tertera pada peta sejak 1623. Ketika VOC berdiri pada abad ke-17, kawasan Luar Batang menjadi tempat penampungan sementara bagi pelaut Nusantara yang akan memasuki pelabuhan Sunda Kelapa. Belanda melarang kapal pelaut Nusantara berlabuh sembarangan di Pelabuhan Sunda kelapa, terutama pada malam hari. Belanda melakukan pengawasan ketat terhadap setiap kapal dan semuanya harus melawati Boom. Seiring berjalannya waktu, kawasan di luar pengempangan dalam bahasa Belanda disebut Buiten de Boom atau biasa diartikan “Luar Batang” (Heuken, 2007:42 dan 186).</p>
          <p style={{ textIndent: 32 }}>Tentang riwayat Habib Husein terdapat sumber, seperti yang diceritakan oleh Rachmat Ruchiat, (2012) yaitu : “puluhan tahun Al-Habib Husein berdakwah di kota-kota pesisir utara pulau jawa, dari Batavia sampai Surabaya. Ia wafat sekitar 1796 dan dimakamkan di luar masjid yang dibangun pada tahun yang sama. “. Selain itu, dalam sumber lain juga disebutkan bahwa : “Suatu makam keramat seorang Tionghoa sudah terdapat di Luar Batang pada 1736. Mushalla atau masjid didirikan pada 29 April 1739. Habib Husein tinggal di daerah itu (Luar Batang) dan diperkirakan meninggal pada 1796 atau 1798. Makam sang Habib mampu menarik banyak peziarah, sehingga masjid Luar Batang menjadi masjid yang terkenal di Batavia. “ (Heuken, 2016 : 213).</p>
          <p style={{ textIndent: 32 }}>Pada sebuah batu yang terdapat di depan pintu makam sang Habib, tertulis sebuah prasasti yang berisi : “Inilah nama keramat Luar Batang Waliy Allah Al-Habib Husein B. Abubakar B. Abdillah Al Aydrus yang telah wafat pada Hari Kamis 17 Puasa 1169 berkebetulan 24 Djuni 1756. “ (Lihat Gambar 2 ).</p>
        
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1tfqpwrgT_CiDSTPA8qnnbDDsIxN_Kzvv" alt='gambar-2' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 2 Batu Prasasti di depan makam Habib Husein
              <br />
              (Dokumentasi pribadi, 2023)
            </div>
          </div>

          <p style={{ textIndent: 32 }}>Oleh karena itu, Nama Habib Husein bin Abubakar Alaydrus sampai saat ini dikeramatkan di dalam kompleks Masjid Kampung Luar Batang tersebut. Setelah beliau meninggal, beliau dimakamkan di area masjid karena itu merupakan satu-satunya peninggalan sang Habib terhadap kampung Luar Batang. Selain itu, disana juga terdapat makam dari Haji Abdul Kadir, murid langsung dari Habib Husein. Keberadaan kedua makam tersebutlah yang membuat masjid Luar Batang mulai diperhatikan oleh pemerintah provinsi Jakarta dan menjadikannya sebagai salah satu masjid/bangunan cagar budaya sejak tahun 1993 dan masuk sebagai kategori salah satu destinasi wisata bahari di Jakarta Utara. Sebagaimana yang sudah tertera dalam halaman resmi dari cagarbudaya.kemendikbud.go.id. Oleh karena itu, Pemprov DKI Jakarta juga terus memberikan perawatan dan renovasi sehingga menjadi lebih indah di kunjungi seperti yang berdiri saat ini. Tidak lupa juga, peran dari masyarakat Kampung Luar Batang yang secara turun temurun ikut serta menjaga serta merawat nilai keramat dari salah satu peninggalan Habib Husein bin Abubakar Alaydrus tersebut.</p>
        
          <h3 style={{ margin: '16px 0 16px 0' }}>C. Deskripsi Situs</h3>
          <h4>Masjid Luar Batang tempo dulu</h4>
          <p style={{ textIndent: 32 }}>Pada zaman penjajahan Belanda, bangunan masjid Luar Batang tampak seperti gudang. Untuk menandai bahwa bangunan tersebut merupakan tempat ibadah, di halaman masjid dibangun bangunan seperti mercusuar dengan puncak menara serupa dengan kubah. Tidak diketahui bagaimana bentuk arsitektur masjid Luar Batang pada periode awal berdirinya. Hal itu disebebakan karena seiring berjalannya waktu selalu dilakukan pemugaran demi pemugaran (Renovasi) sehingga untuk saat ini bagian yang masih dipertahankan bentuk aslinya hanyalah sebuah menara mercusuar kecil yang diatapnya diberi sebuah kubah (Lihat Gambar 1).</p>
        
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1v0Oxa5CkcbxkTUWX7A1sSqKBss_C6pec" alt='gambar-3' width={436} height={436} />
            <div style={{ color: 'white' }}>
            Gambar 3. Tampak Masjid Luar Batang sekitar tahun 1998 
            <br />
            (Depdikbud, 1999 : 123)
            </div>
          </div>

          <p style={{ textIndent: 32 }}>Sumber-sumber yang ada pun tidak memperlihatkan bentuk bagaimana bentuk masjidnya. Kebanyakan sumber/keterangan yang ditemukan hanyalah berupa angka-angka tahun dan deskripsi keberadaan dari sang Habib beserta makamnya sebagai tempat ziarah. Dalam bukunya yang berjudul Mesjid-Mesjid Tua di Jakarta, Heuken menampilkan gambar-gambar bentuk arsitektur masjid Luar Batang pada pertengahan abad ke-20 (Lihat Gambar 1, Gambar 2, dan Gambar 3)</p>
        
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1yl1ihlUYI1y4x0iomwB9IfvXJQTFi1XK" alt='gambar-4' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 4. Tampak depan gerbang Luar Batang
              <br />
              (Heuken, 2003 :45)
            </div>
          </div>
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=17fLk1CWHAldCLXusWdof-pLgrDCp6CXZ" alt='gambar-5' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 5. Tampak depan cungkup makam Luar Batang (terlihat kubahnya)
              <br />
              (Heuken, 2003 : 46)
            </div>
          </div>
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1R1l6U0OEzoUGnf5ng7YhIXs7fJYxrSpf" alt='gambar-6' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 6. Area ruang ziarah makam Habib Husein Luar Batang
              <br />
              (Heuken, 2003 : 46)
            </div>
          </div>

          <p style={{ textIndent: 32 }}>Dalam beberapa catatan sejarah yang tertera pada bagian depan makam, bangunan selesai dibangun pada 20 Muharam 1152 H atau sama dengan tanggal 29 April 1739. Selain itu, terdapat ulama bernama Habib Husein bin Abubakar bin Abdillah Alaydrus yang berasal dari Hadramaut, Yaman yang tinggal di daerah Luar Batang. Setelah beliau meninggal, beliau dimakamkan di dekat masjid. Begitu juga dengan makam Haji Abdul Kadir, yang merupakan murid dari Habib Husein. Dari prasasti yang ada, tertulis Habib Husein bin Abubakar bin Abdillah Alaydrus wafat pada Kamis, 27 Ramadhan 1169 H atau bertepatan dengan 24 Juni 1756. Namun menurut sumber lain yang ditulis oleh Van Den Berg tahun 1886, Habib Husein meninggal tahun 1789 (Heuken, 2003).</p>

          <h4 style={{ margin: '16px 0 16px 0' }}>Masjid Luar Batang di Era Modern</h4>
          <p style={{ textIndent: 32 }}>Bangunan masjid sendiri terletak di Jl. Luar Batang V No.10, RT.6/RW.3, Penjaringan, Kec. Penjaringan, Jakarta Utara, Daerah Khusus Ibukota Jakarta 14440 (sekitar 300 meter dari jalan utama). Jalan tersebut hanya dapat memuat 2 mobil yang harus berjalan pelan. Bus rombongan peziarah harus memutar agak menjauh lewat jalur belakang yang sepi dan becek terkena air pasang laut. Fakta unik terkait dengan letak Situs Masjid luar Batang ini, yaitu terletak di utara zona inti situs Kota Tua, berada tepat di perkampungan padat penduduk, serta berada di seberang kawasan Pasar Ikan dan Situs Pelabuhan Sunda Kelapa (1527). Kompleks Masjid Luar Batang terdiri dari beberapa bangunan dan dua menara. Secara umum bangunan dalam kondisi terawat karena juga merupakan tempat ziarah yang ramai dikunjungi setiap harinya. </p>
        
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1eKJzzHlJ_Z5Nbs07zIzmDoC1Pm4RihVX" alt='gambar-7' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 7. Tampak Masjid Luar Batang sekarang
              <br />
              (Diolah dari https://direktoripariwisata.id/, 2023)
            </div>
          </div>

          <p style={{ textIndent: 32 }}>Tidak mengherankan jika seiring berjalannya waktu, arsitektur bangunan seolah terlihat seperti masjid modern yang dalam kondisi aman dan terawat karena masih digunakan untuk tempat beribadah sebagaimana masjid pada umumnya. Faktor ancaman yang kemungkinan terjadi adalah dari banjir ROB dan kelangkaan air bersih karena kondisi geografis di kawasan tersebut yan memang berbatasan langsung dengan bibir Laut Utara Pulau Jawa. Untuk mempermudah dalam mengenali bagian-bagian atau bangunan apa saja yang terdapat di Komplek Masjid Luar Batang, mari lihat penampakan bangunan masjid jika dilihat dari satelit google maps dibawah ini, kemudian kalian lanjutkan dengan cermat melalui denah berikut ini :</p>
          
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1xiBkr_dAQbIDXWwiAhxRYJlB82HUqMZx" alt='gambar-8' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 8. Tampak Kompleks Masjid Luar Batang jika dilihat dari Google Satelit
              <br />
              (Diolah dari Wikimapia, 2023)
            </div>
          </div>
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=15qz8X2CeJArCFnhLJEFXn13-zWePcB5U" alt='gambar-9' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 9. Denah Kompleks Masjid Luar Batang
              <br />
              (Diolah menggunakan Adobe Ilustrator, 2023)
            </div>
          </div>

          <h5 style={{ margin: '16px 0 16px 0' }}>Keterangan :</h5>
          <ol style={{ listStyle: 'disc' }}>
            <li>Ruangan utama untuk sholat bagi jama’ah laki-laki</li>
            <li>Ruangan utama untuk sholat bagi jama’ah perempuan</li>
            <li>Ruangan utama tempat berziarah, Makam Habib Husein bin Abubakar Alaydrus (C1) dan Makam Haji Abdul Kadir (C2)</li>
            <li>Tempat berwudhu untuk Jama’ah </li>
            <li>Menara mercusuar lama, Menara baru 1 (E1) dan Menara baru 2 (E2)</li>
            <li>Bangunan kantor DKM dan kepengurusan Makam ziarah</li>
            <li>Madrasah Dinniyah Manba’ul Ulum dan TPA An-Nur Masjid Luar Batang</li>
            <li>Toilet baru</li>
            <li>Aula </li>
            <li>Warung dan toilet lama</li>
            <li>Gapura pintu masuk</li>
            <li>Area parkiran</li>
            <li>Pemakaman lama</li>
          </ol>

          <h5 style={{ margin: '16px 0 16px 0' }}>Ruangan utama untuk sholat bagi jama’ah laki-laki</h5>
          <p style={{ textIndent: 32 }}>Ruangan ini merupakan pengembangan masjid baru (yang sekarang terletak disebelah barat ruang sholat Wanita dan ruangan ziarah. Pada sisi timur ruangan ini terdapat 2 buah pintu masuk. Posisi lantai ruangan ini lebih tinggi 60 cm daripada lantai ruangan sholat jama’ah perempuan, sehingga untuk mengaksesnya harus menaiki tiga trap anak tangga. Pada bagian atap ruangan ini terdapat tajuk dengan ukuran dasar 21x21 m yang berbentuk agak meruncing. Di dalam ruangan ini terdapat 12 kolom yang masing-masing berbentuk bujur sangkar berukuran 40x40 cm dengan ketinggian 3,8 m. Keberadaan kolom-kolom ini bukanlah sebagai sebuah penopang atau penyangga apapun, tetapi merupakan tanda bahwa dulunya ditempat kolom-kolom ini terdapat kolom-kolom asli yang menyangga bangunan masjid lama (Lihat Gambar 2.1).</p>
        
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1Vv2QMTAxQ7yW3ItHo1TNd2bsH4KR4teU" alt='gambar-10' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 10. Kolom-kolom diarea Sholat Jama’ah laki-laki yang jika ditotal berjumlah 12 kolom dan tampak atap yang berbentuk meruncing 
              <br />
              (Dokumentasi pribadi, 2023)
            </div>
          </div>

          <p style={{ textIndent: 32 }}>Pada bagian dinding ruang utama disisi barat terdapat 4 kolom bulat dengan tiga lengkungan dibagian atasnya yang membentuk tiga lubang, yakni lubang yang paling besar ditengah diperuntukan sebagai tempat imam memimpin sholat berjama’ah, lubang samping kanannya yang diperuntukkan sebagai mimbar khatib saat berkohtbah serta lubang sebelah kiri yang diisi oleh perabotan masjid seperti Jam digital dan pendingin ruangan Imam dan khotib (Lihat Gambar 2.2). </p>
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1gDkK0BtKk5FtXQJD9NDnNpdVm0J9c9TZ" alt='gambar-11' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 11. Area Imam memimpin sholat berjama’ah dan mimbar Khotib
              <br />
              (Dokumentasi Pribadi, 2023)
            </div>
          </div>

          <p style={{ textIndent: 32 }}>Pada dinding sisi selatan dan utara ruangan ini terdapat masing-masing lima pintu masuk. Dengan adanya pintu-pintu ini menunjukkan bahwa sebenarnya pintu utama ruangan ini bukanlah pintu timur, melainkan pintu selatan karena berhadapan langsung dengan jalan (Lihat Gambar 2.3 dan Gambar 2.4).</p>
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1GZZCYQNFHzv37a-OlnZKqAwQ0VsMAzxp" alt='gambar-12' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 12. Pintu masuk selatan menuju ruangan sholat jama’ah laki-laki
              <br />
              (Dokumentasi pribadi, 2023)
            </div>
          </div>
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1I9vMB9ypc0aahbopyJOf4n6atJr2U6R4" alt='gambar-13' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 13. Pintu timur menuju ruangan sholat bagi jama’ah laki-laki
              <br />
              (Dokumentasi Pribadi, 2023)
            </div>
          </div>

          <p style={{ textIndent: 32 }}>Namun kenyataannya, banyak yang menyangka pintu timur adalah pintu utama karena mayoritas jama’ah datang melalui pintu ini karena sekaligus berziarah didepan makam Habib Husein. Pada dinding didekat pintu timur, terdapat 2 prasasti yaitu prasasti peletakkan batu pertama pemugaran pada tanggal 6 september 1991 yang ditandatangani oleh Gubernur Wiyogo Atmodarminto dan disebelahnya terdapat prasasti kedua yang merupakan prasasti pemugaran tahap pertama tanggal 5 September 1997 yang ditandatangani oleh Gubernur Surjadi Soedirja (Lihat Gambar 2.5 dan Gambar 2.6 ).</p>
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1TtJVEJ1IRFB6L_gVtKDNVzycT4mgPaOZ" alt='gambar-14' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 14. Prasasti peletakkan batu pertama pemugaran masjid luar batang pada tanggal 6 September 1991 oleh Gubernur Wiyogo Atmodarminto
              <br />
              (Dokumentasi Pribadi, 2023)
            </div>
          </div>
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1NXRsBNlzWmZxk_0nF9yegx7J7CbXnpnh" alt='gambar-15' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 15. Prasasti pemugaran masjid luar batang  tahap I pada tanggal 5 September 1997 oleh Gubernur Surjadi Soedirdja
              <br />
              (Dokumentasi Pribadi, 2023)
            </div>
          </div>

          <h5 style={{ margin: '16px 0 16px 0' }}>Ruangan utama untuk sholat bagi jama’ah perempuan</h5>
          <p style={{ textIndent: 32 }}>Ruangan ini merupakan pengembangan dari ruang utama lama masjid dengan ukuran dasar 15x15 m. Ruangan ini terbagi menjadi dua sisi yaitu sisi selatan yang diperuntukan sebagai tempat berdo’a bagi para peziarah sekaligus juga akses masuk untuk menuju ke Ruangan jama’ah laki-laki dan sisi utara sebagai ruang utama tempat jama’ah wanita melaksanakan Sholat. Di dalam ruangan ini terdapat 8 kolom berbentuk bulat bergaris-garis, bergaya kolom yunani dengan ukuran diameter 60 cm pada bagian bawahnya, 40 cm pada bagian atasnya serta memiliki ketinggian 3,8 m. Pada bagian bawah kolom tersebut terdapat umpak berbentuk bujur sangkar setingga 15 cm dengan ukuran 70x70 cm. Plafon ruangan yang mendatar berupa jejeran balok dan papan kayu yang dibiarkan terbuka sehingga menambah kesan indah dari ruangan ini, (Lihat Gambar 2.7 & Gambar 2.8).</p>
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1LlthH7AaqK5mrs3_zAsXpVGG-wnjYyu4" alt='gambar-16' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 16. Area ruangan sholat bagi jama’ah perempuan
              <br />
              (Dokumentasi Pribadi, 2023)
            </div>
          </div>
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1McaFOhDKB-tuXXczRO97izeXR-JXrw85" alt='gambar-17' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 17. Tampak kolom-kolom di area ruangan sholat bagi jama’ah perempuan
              <br />
              (Dokumentasi Pribadi, 2023)
            </div>
          </div>

          <h5 style={{ margin: '16px 0 16px 0' }}>Ruangan utama tempat berziarah, Makam Habib Husein bin Abubakar Alaydrus (C1) dan Makam Haji Abdul Kadir (C2)</h5>
          <p style={{ textIndent: 32 }}>Makam Habib Husein bi Abubakar Alaydrus dan muridnya yang bernama Abdul Kadir berada dalam bangunan yang letaknya bersebelahan (menjadi satu bangunan) dengan ruangan Sholat Jama’ah perempuan. Ruangan utama tempat berziarah ini terletak sejajar atau tepat berada disisi selatan ruangan Jama’ah perempuan. Terdapat 2 pintu untuk masuk ke dalam ruangan ziarah sera 4 buah jendela yang berbebntuk sama dan memiliki jeruji besi dan berjarak sekitar 30 cm dari lantai. Untuk memasuki ruangan ziarah ini, para jama’ah/peziarah dianjurkan berinfak (lihat Gambar 2.9 dan Gambar 2.10)</p>
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1ZGZMBLQPMxesMQ0m4fGhGEhavr15AAPc" alt='gambar-18' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 18. Area ruangan berziarah pada Makam Habib Husein
              <br />
              (Dokumentasi Pribadi, 2023)
            </div>
          </div>
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1ggaCGzn6yDXzOCoe0oggkv2ObTaTTyfF" alt='gambar-19' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 19. Tampak dari luar ruangan area Ziarah yang bersebelahan langsung dengan ruangan sholat bagi jama’ah perempuan
              <br />
              (Dokumentasi Pribadi, 2023)
            </div>
          </div>

          <h5 style={{ margin: '16px 0 16px 0' }}>Tempat berwudhu untuk Jama’ah</h5>
          <p style={{ textIndent: 32 }}>Area berwudhu baik untuk jama’ah laki-laki ataupun perempuan berada disebelah kiri selasar sebelum memasuki bangunan utama Masjid Luar Batang. Khusus untuk tempat wudhu bagi jama’ah perempuan terdapat sebuah tirai dan tembok sebagai pemisah dengan tempat wudhu jama’ah laki-laki (Lihat Gambar 2.11).</p>
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1jWxueAxuQqDsn_jWyAS41w4etUq-mYeY" alt='gambar-20' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 20. Area berwudhu jama’ah laki-laki
              <br />
              (Dokumentasi Pribadi, 2023)
            </div>
          </div>

          <h5 style={{ margin: '16px 0 16px 0' }}>Menara mercusuar lama, Menara baru 1 (E1) dan Menara baru 2 (E2)</h5>
          <p style={{ textIndent: 32 }}>Salah satu arsitektur peninggalan masjid bangunan lama yang masih tersisa adalah sebuah bangunan menara berbentuk bulat dengan diameter bagian bawahnya sekitar 3 m yang semakin ke atas diameternya semakin mengecil. Pada bagian atap menara ini diberikan kubah berbentuk bulat. Menara lama ini terletak di sisi selatan bangunan utama masjid. Selain menara lama, di pojok selatan dan barat kompleks masjid juga terdapat 2 menara baru yang ukurannya jauh lebih tinggi dengan bagian atapnya dibuat meruncing. Menara baru ini memiliki total tinggi 57 m dan terbagi menjadi 4 bagian, yaitu Bagian pertama yang paling dasar berbentuk segienam dengan ketinggian sekitar 9 m dan terdapat pintu masuk menara. Selanjutnya bagian kedua yang berbentuk segidelapan namun sedikit lebih kecil dari bagian pertama dan memiliki ketinggian sekitar 12 m. Bagian ketiga berbentuk segiempat dan lebih kecil juga dari bagian pertama ataupun kedua, namun meiliki ketinggian yang sama seperti bagian pertama yaitu sekitar 9 m. Kemudian yang terakhir adalah bagian keempat yaitu bagian puncak menara yang memiliki tumpuan berbentuk segidelapan dengan ketinggian sekitar 9 m dan Diatas tumpuan inilah bagian runcingnya berdiri dengan ketinggian sekitar 18 m. Sehingga bisa disebutkan bahwa total ketinggian menara baru ini sekitar 57 m, (Lihat Gambar 2.12). </p>
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1U9cdR9_5w9RTSO3yRVnUMB44hR0HYnsJ" alt='gambar-21' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 21. Menara lama (sebelah kiri) dan Menara baru (sebelah kanan)
              <br />
              (Dokumentasi Pribadi, 2023)
            </div>
          </div>

          <h5 style={{ margin: '16px 0 16px 0' }}>Bangunan kantor sekretariat Masjid dan kepengurusan Makam ziarah</h5>
          <p style={{ textIndent: 32 }}>Bangunan ini terletak di sebelah barat Madrasah yang berbentuk memanjang dari timur ke barat dengan luas sekitar 504 m2 (36x14 m2). Bangunan seluas ini terdiri dari beberapa ruangan seperti Guest House (Ruang inap tamu khusus), Ruang tamu, koperasi dan beberapa kantor seperti kantor sekrtariat masjid (DKM), kantor kepengurusan makam ziarah (termasuk ruangan juru kunci), dan kantor keamanan. Satu hal yang perlu diingat adalah walaupun berada didalam satu kompleks yang sama, baik kepengurusan Masjid dan Makam dilakukan oleh orang yang berbeda (Lihat Gambar 2.13).</p>
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1AF8OkRr6hel-Dp0GCuhGCvjq2JGRj1_I" alt='gambar-22' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 22. Area persekratariatan Masjid dan Makam 
              <br />
              (Dokumentasi Pribadi, 2023)
            </div>
          </div>

          <h5 style={{ margin: '16px 0 16px 0' }}>Madrasah Dinniyah Manba’ul Ulum dan TPA An-Nur Masjid Luar Batang</h5>
          <p style={{ textIndent: 32 }}>Madrasah Dinniyah Manba’ul ulum merupakan sebuah jenjang pendidikan sederajat dengan TK yang berada di Kompleks Masjid Luar Batang. Selain menjadi sebuah madrasah, ketika waktu Maghrib tiba bangunan ini difungsikan sebagai sebuah Taman Pendidikan Al-qur’an yang bernama TPA An-nur. Bangunan Madrasah ini terletak disebelah timur laut dari bangunan utama Masjid. Bangunan ini terdiri dari 2 lantai dengan luas masing-masing 360 m2. (Lihat Gambar 2.14).</p>
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1ufprKP3Rc4lZzWs3Fmyfh4MFjTX7d19P" alt='gambar-23' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 23. Madrasah Dinniyah Manbaul Ulum dan TPA An-nur Masjid Luar Batang
              <br />
              (Dokumentasi Pribadi, 2023)
            </div>
          </div>

          <h5 style={{ margin: '16px 0 16px 0' }}>Toilet dan warung</h5>
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1eSyup_cvVCk5cqlNTIhPOvznLqi8vcGH" alt='gambar-24' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 24. Warung dan Toilet lama
              <br />
              (Ashadi dkk, 2017)
            </div>
          </div>

          <h5 style={{ margin: '16px 0 16px 0' }}>Gapura pintu masuk</h5>
          <p style={{ textIndent: 32 }}>Bangunan gapura pintu masuk seolah-olah terdiri dari 2 bagian, yakni bagian atas dan bagian bawah. Pada bagian bawah terdapat lubang pintu masuk berbentuk setengah lingkaran dengan tinggi sekitar 5 m. Sedangkan pada bagian atasnya terdapat 2 tulisan arab berlafadzkan “Alaydrus” yang juga masing-masing terdapat logo bintang diatasnya dan logo bulan-bintang di tengah-tengah gapura pintu masuk tersebut (Lihat Gambar 2.16 dan Gambar 2.17).</p>
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1Ajw4J__8DxFYsB-Mfqe7aN0p87RlBT7r" alt='gambar-25' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 25. Gapura Pintu masuk kompleks Masjid Luar Batang (tampak luar) dan Parkiran Motor Peziarah
              <br />
              (Dokumentasi Pribadi, 2023)
            </div>
          </div>
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1ugnhIQhOEb_G2Pq7rdvgrVzve1ZeaFO-" alt='gambar-26' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 26. Gapura pintu masuk kompleks Masjid Luar Batang (tampak dari dalam)
              <br />
              (Dokumentasi Pribadi, 2023)
            </div>
          </div>

          <h5 style={{ margin: '16px 0 16px 0' }}>Area parkiran</h5>
          <p style={{ textIndent: 32 }}>Area parkir ini terletak disebelah timur dari luar situs Masjid Luar Batang dengan luas sekitar 836 m2. Area parkir ini diperuntukkan bagi para jama’ah/peziarah yang membawa kendaraan pribadi seperti Mobil, sepeda motor atauoun yang menyewa angkutan kota. Sedangkan untuk kendaraan besar seperti bis dari rombongan peziarah disediakan area parkir sekitar 100 m disebelah utara Kompleks Masjid. Diarea parkiran ini juga terdapat warung-warung makan milik masyarakat Kampung Luar Batang (Lihat Gambar 2.18).</p>
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=12EXkjiVWwLl1ms6MV7HY4ocsw41-92Oz" alt='gambar-27' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 27. Area parkir khusus kendaraan Roda 2 dan Roda 4
              <br />
              (Ashadi dkk, 2017)
            </div>
          </div>

          <h5 style={{ margin: '16px 0 16px 0' }}>Pemakaman setempat</h5>
          <p style={{ textIndent: 32 }}>Area ini terdapat dibagian tenggara dalam kompleks Masjid Jami Luar Batang dan merupakan area pemakaman yang sudah berusia tua. Hl itu dapat terlihat dari beberapa batu nisannya yang tidak memiliki keterangan nama ataupun tanggal kematian. Nisan-nisan tersebut memiliki bentuk yang unik dengan bagian atasnya yang berbentuk seperti bunga teratai. Selain itu pada beberapa nisan juga terdapat kaligrafi tulisan arab, sehingga bisa disimpulkan makam-makam ini adalah pemakaman bagi para imigran hadramaut lainnya atau mungkin murid dan pengikut dari Habib Husein. (Lihat Gambar 2.19). </p>
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1dmjY3gnmVXZ7_W3s1pSaah3mhB5cBjb0" alt='gambar-28' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 28. Beberapa contoh pemakaman tua yang berada di Kompleks Masjid Luar Batang
              <br />
              (Ashadi, 2017)
            </div>
          </div>

          <h3 style={{ margin: '16px 0 16px 0' }}>D. Penetapan Situs Sebagai Cagar Budaya Bangunan</h3>
          <p style={{ textIndent: 32 }}>Cagar Budaya adalah suatu bentuk kekayaan budaya bangsa yang berwujud kehidupan manusia dalam pemahaman sejarah, Ilmu pengetahuan dan kebudayaan yang dikelola dengan baik melalui usaha perlindungan ataupun pemanfaatan untuk memaajukan kebudayaan nasional dan kemakmuran rakyat. Dalam pasal 1 UU No. 11 tahun 2010 cagar budaya didefinisikan sebagai warisan budaya yang bersifat kebendaan yang berupa benda, bangunan, struktur, situs, dan kawasan cagar budaya baik di darat ataupun di air yang perlu dilestarikankeberadaannya karena bernilai penting bagi sejarah, ilmu pengetahuan, pendidikan, agama, serta kebudayaan setelah adanya proses penetapan.</p>
          <p style={{ textIndent: 32 }}>Masyarakat berperan sangat penting terhadap usaha pelestarian cagar budaya setempat/lokal karena merekalah yang bersinggungan langsung atau sebagai pewaris kebudayaan yang ditinggalkan oleh cagar budaya yang berada di daerahnya masing-masing. Dengan demikian, kepeduliian serta kesadaran masyarakat terhadap peran tersebut akan berpengaruh besar bagi usaha pelestarian dan keberadaan dari masing-masing cagar budaya. Pelestarian tersebut bukan tanpa alasan, melainkan agar cagar budaya bisa terus dinikmati keberadaannya oleh generasi yang akan datang. Apabila mereka merasa acuh, tidak menutup kemungkinan cagar budaya yang masih ada akan rusak dan binasa seiring berjalannya waktu (Alvat,2019). Tujuan melindungi cagar budaya ini juga tecantum dalam Pasal 3 UU No. 11 tahun 2010, yaitu :</p>
          <ol style={{ listStyle: 'disc', marginLeft: 32 }}>
            <li>Melestarikan budaya bangsa dan warisan manusia</li>
            <li>Meningkatkan martabat dan harkat bangsa</li>
            <li>Penguat kepribadian bangsa</li>
            <li>Mensejahterakan rakyat</li>
            <li>Mempromosikan warisan budaya tersebut kepada dunia luar</li>
          </ol>
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1hoINVL4yy5AqCVh5eIk71g9ndf539HbT" alt='gambar-29' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 29. Tampak Masjid Luar Batang sekarang
              <br />
              (Dokumentasi Pribadi, 2023)
            </div>
          </div>

          <p style={{ textIndent: 32 }}>Begitu juga dengan keberadaan dari Masjid Luar Batang yang sudah berumur sangat Tua dan masih berdiri hingga saat ini. Pada Tahun 1993, Pemerintah Provinsi DKI Jakarta sendiri sudah menetapkan Masjid Keramat Luar Batang sebagai situs sejarah lokal yang sudah menjadi warisan cagar budaya tertua di DKI Jakarta yang berbentuk bangunan tempat ibadah. Mengapa masuk kedalam kategori Jenis Cagar Budaya Bangunan? Sesuai dengan yang tertera dalam Pasal 1 UU No. 11 tahun 2010, yaitu : “Bangunan Cagar Budaya adalah susunan bangunan yang terbuar dari benda alam atau benda buatan manusia untuk memenuhi ketubuhan ruang berdinding dan beratap“. Selain itu disebutkan juga dalam pasal 7 tentang Kriteria bangunanan cagar budaya adalah :</p>
          <ol style={{ listStyle: 'disc', marginLeft: 32 }}>
            <li>Dapat berunsur tunggal atau banyak</li>
            <li>Dapat berdiri bebas atau menyatu dengan formasi alam</li>
          </ol>
          <p style={{ textIndent: 32 }}>Syarat sebuah bangunan untuk bisa ditetapkan sebagai cagar budaya adalah harus berusia 50 tahun atau lebih, berarti khusus terhadap sejarah, Pendidikan, kebudayaan, agama, serta budaya penguatan kebangasaan. Tidak hanya itu, bangunan tersebut wajib melewati berbagai tahap pemerikasaan sebelum akhirnya diteteapkan sebagai bangunan cagar budaya yang tercatat pada register nasional cagar budaya. Pengkategorian sebuah bangunan yang memiliki nilai sejarah sebagai cagar budaya juga merupakan usaha pemerintah dalam rangka menjaga dan melestarikan cirikhas yang dimiliki oleh kotanya masing-masing, Contohnya adalah Masjid Luar Batang ini. </p>
          <p style={{ textIndent: 32 }}>Berdasarkan Daftar Tinggalan Sejarah dan Purbakala yang telah ditetapkan sebagai Benda Cagar Budaya/Situs yang dilindungi UU-RI No. 5 Tahun 1992 tentang Benda Cagar Budaya, masjid Luar Batang terdaftar dengan Nomor Penetapan : 0128/M/1988, dan tanggal penetapan : 27 Februari 1988 (Https:/cagarbudaya.kemendikbud.go.id, akses 5 Oktober 2023). </p>
          <div style={{ textAlign: 'center', margin: '8px 0 8px 0' }}>
            <Image src="https://drive.google.com/uc?export=view&id=1plsMbVUk30z27atgiy0CklBPBBGkGdCY" alt='gambar-30' width={436} height={436} />
            <div style={{ color: 'white' }}>
              Gambar 30. Penetapan Nomor Regnes pada halaman resmi Cagar Budaya
              <br />
              (Diolah dari https:// cagarbudaya.kemendikbud.go.id /, 2023)
            </div>
          </div>

          <p style={{ textIndent: 32 }}>Oleh karena itu, Pemprov DKI Jakarta terus memberikan perawatan dan renovasi sehingga sebuah bangunan bersejarah, terutama yang sudah ditetapakan sebagai bangunan cagar budaya agar menjadi lebih indah di kunjungi seperti Masjid Luar Batang walaupun sudah berdiri sejak tahun 1739 hingga saat ini. Tidak lupa juga, peran dari masyarakat Kampung Luar Batang yang secara turun temurun ikut serta menjaga serta merawat nilai keramat dari salah satu peninggalan Habib Husein bin Abubakar Alaydrus tersebut. Karena bukan hanya tugas dari pemerintah saja, tetapi seluruh elemen masyarakat setempat sudah seharusnya memiliki kepeduliian serta kesadaran terhadap pentingnya melestarikan cagar budaya yang mereka miliki di daerahnya (Alvat, 2019).</p>
        
          <div style={{ textAlign: 'center', height: '100vh', margin: '32px 0 32px 0' }}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd5jqNjmPWhShqoD2CrApfgHsWwkfibXgJ40cOcQvOtWGzKsw/viewform?embedded=true" width="640" height="100%" frameborder="0" marginheight="0" marginwidth="0">Memuat…</iframe>
          </div>

          <div style={{ textAlign: 'center', height: '100vh' }}>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfz48jMtlwNxED3wJGKBdHOQ96oO5cMZ3q-H0bnVFInDMqjPQ/viewform?embedded=true" width="640" height="100%" frameborder="0" marginheight="0" marginwidth="0">Memuat…</iframe>
          </div>
        </div>
      </Content>
    </Layout>
  )
}

export default Materi
