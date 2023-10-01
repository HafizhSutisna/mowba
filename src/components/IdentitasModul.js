import { Row, Col } from 'antd'

const IdentitasModul = () => {
  return (
    <div style={{ textAlign: 'start' }}>
      <Row>
        <Col span={3}>Judul Modul</Col>
        <Col span={8}>: Sejarah Lokal di Jakarta (Masjid Luar Batang)</Col>
      </Row>

      <Row>
        <Col span={3}>Mata Pelajaran</Col>
        <Col span={8}>: Sejarah Indonesia</Col>
      </Row>

      <Row>
        <Col span={3}>Sekolah</Col>
        <Col span={8}>: SMAN 7 Jakarta</Col>
      </Row>

      <Row>
        <Col span={3}>Kelas</Col>
        <Col span={8}>: X</Col>
      </Row>
        
      <Row>
        <Col span={3}>Alokasi Waktu</Col>
        <Col span={8}>: 2 JP/2 Pertemuan</Col>
      </Row>
    </div>
  )
}

export default IdentitasModul