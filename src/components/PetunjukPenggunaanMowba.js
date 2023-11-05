import { Typography } from 'antd'
const { Paragraph, Link } = Typography

const PetunjukPenggunaanMowba = () => {
  return (
    <Paragraph style={{ textAlign: 'start', background: 'rgba(241,225,221,1)' }}>
      <ul>
        <li>
          Berdoalah sesuai agama dan keyakinan masing-masing.
        </li>
        <li>
          Siapkan dan pastikan perangkat keras anda terhubung dengan internet.
        </li>
        <li>
          Silahkan membuka browser yang terdapat didalam perangkat keras anda dan akses laman Mowba hanya pada tautan berikut
          <Link href='https://mowba.vercel.app/'> https://mowba.vercel.app/</Link>
        </li>
        <li>
          Mowba terdiri atas tiga bagian, yakni bagian pendahuluan, materi belajar, dan penutup.
        </li>
        <li>
          Bagian pendahuluan berisi petunjuk penggunaan Mowba, daftar isi, daftar gambar, peta konsep, identitas modul, dan kompetensi dasar.
        </li>
        <li>
          Bagian pembelajaran berisi kegiatan pembelajaran yang di dalamnya memuat tujuan pembelajaran, uraian materi, uji kompetensi, kunci jawaban, dan penilaian diri.
        </li>
        <li>
          Bagian penutup memuat glosari, daftar rujukan, dan biografi pengembang.
        </li>
        <li>
          Akan ada info ringkas atau materi tambahan yang disalipkan di sela-sela materi inti. Temukan dan selamat menjelajah.
        </li>
        <li>
          Amati dan bacalah peta konsep, identitas modul, dan kompetensi dasar untuk mengetahui gambaran materi atau rangkaian pembelajaran.
        </li>
        <li>
          Baca dan cermati tujuan pembelajaran yang harus dicapai dalam pembelajaran di masing-masing kegiatan pembelajaran.
        </li>
        <li>
          Baca dan pahami uraian materi. Tandai dan catatlah materi yang tidak anda pahami.
        </li>
        <li>
          Berdiskusi dan tanya jawab kepada teman dan guru mengenai materi yang belum dipahami.
        </li>
        <li>
          Kerjakan uji kompetensi dan penilaian diri yang terdapat dalam Mowba untuk mengevaluasi hasil belajar anda.
        </li>
        <li>
          Selamat belajar, dan bereksplorasi anak-anak cerdas!
        </li>
      </ul>
    </Paragraph>
  )
}

export default PetunjukPenggunaanMowba
