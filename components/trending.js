import { Card, Col, Container, Row, Image } from "react-bootstrap";

const Trending = () => {
  return (
    <Container>
      <Row>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/G1.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Cek Toko Sebelah</Card.Text>
              <Card.Text>GOOD 3.7/4.0</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/G2.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Comic 8</Card.Text>
              <Card.Text>RECOMENDED 3.9/4.0</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/G3.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Warkop DKI Reborn</Card.Text>
              <Card.Text>GOOD 3.8/4.0</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/G4.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Sesuai Aplikasi</Card.Text>
              <Card.Text>RECOMENDED 3.9/4.0</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/G5.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Ngeri-Ngeri Sedap</Card.Text>
              <Card.Text>GOOD 3.8/4.0</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/G6.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>My Stupid Boss</Card.Text>
              <Card.Text>GOOD 3.8/4.0</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/G7.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Mangga Muda</Card.Text>
              <Card.Text>GOOD 3.8/4.0</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/G8.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Yowis Ben</Card.Text>
              <Card.Text>GOOD 3.8/4.0</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/G9.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Baby Blues</Card.Text>
              <Card.Text>GOOD 3.6/4.0</Card.Text>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Trending;
