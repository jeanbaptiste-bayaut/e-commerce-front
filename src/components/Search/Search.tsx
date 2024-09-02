import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useSearchParams } from 'react-router-dom';

function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');

  console.log(query);

  const products = [
    {
      id: 1,
      title: 'T-shirt en coton',
      short_description: 'T-shirt en coton bio',
      price: 19.99,
    },
    {
      id: 2,
      title: 'Jean slim',
      short_description: 'Jean slim en coton',
      price: 29.99,
    },
  ];
  return (
    <div className="plp-container">
      <section>
        <Container fluid="md">
          <Row>
            {products.map((product) => (
              <Col>
                <Card style={{ width: '18rem' }} id={product.id.toString()}>
                  <Card.Img variant="top" src="/plp/t-shirt-plp.jpg" />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.short_description}</Card.Text>
                    <Card.Text>{product.price} €</Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Search;
