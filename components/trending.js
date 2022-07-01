import { Card, Col, Container, Row, Image } from "react-bootstrap";

const Trending = () => {
  return (
    <Container>
      <Row>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/M.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Minions The Rise Of Gru</Card.Text>
              <Card.Text>Bagus 3.8/4.0</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/T.jpeg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Transformers Age Of Extinction</Card.Text>
              <Card.Text>Bagus 3.8/4.0</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/O.png" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>One Piece Stampede</Card.Text>
              <Card.Text>Bagus 3.8/4.0</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/S.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Sonic 2 The Hedgehog</Card.Text>
              <Card.Text>Bagus 3.8/4.0</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/J.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Jurassic World Dominion</Card.Text>
              <Card.Text>Bagus 3.8/4.0</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/D.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Doctor Stranger In The Multiverse Of Madness</Card.Text>
              <Card.Text>Bagus 3.8/4.0</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/TY.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Toy Story Lightyear</Card.Text>
              <Card.Text>Bagus 3.8/4.0</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/jhdsfjkhsfhsfljkhsfjkhskjflsh.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>Spiderman No Way Home</Card.Text>
              <Card.Text>Bagus 3.8/4.0</Card.Text>
            </div>
          </Card>
        </Col>
        <Col md={4} className="movieWrapper">
          <Card className="bg-transparent text-white text-center movieImage">
            <Image src="/ljlkjdfkldjflksjklfjsfjsjskhfjskhf.jpg" alt="card image" height="auto"></Image>
            <div className="bg-dark p-2 m-1">
              <Card.Text>The Dark Knight</Card.Text>
              <Card.Text>Bagus 3.8/4.0</Card.Text>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Trending;
