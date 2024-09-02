import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import BreadcrumbExample from '../Breadcrumb/Breadcrumb';
import './Plp.scss';

function ContainerFluidExample() {
  const products = [
    {
      id: 1,
      title: 'T-shirt en coton',
      short_description:
        'T-shirt 100% coton, coupe classique, disponible en plusieurs couleurs.',
      price: 19.99,
    },
    {
      id: 2,
      title: 'Jeans slim',
      short_description: 'Jeans slim fit, denim stretch pour plus de confort.',
      price: 49.99,
    },
    {
      id: 3,
      title: 'Veste en cuir',
      short_description:
        'Veste en cuir véritable, doublure intérieure douce, style motard.',
      price: 199.99,
    },
    {
      id: 4,
      title: "Robe d'été",
      short_description:
        'Robe légère en coton, imprimé floral, idéale pour les journées chaudes.',
      price: 39.99,
    },
    {
      id: 5,
      title: 'Sweat à capuche',
      short_description:
        'Sweat en coton mélangé avec capuche ajustable et poche kangourou.',
      price: 29.99,
    },
    {
      id: 6,
      title: 'Pantalon de jogging',
      short_description:
        'Pantalon de jogging confortable, idéal pour le sport ou le quotidien.',
      price: 24.99,
    },
    {
      id: 7,
      title: 'Chemise en lin',
      short_description:
        "Chemise légère en lin, coupe décontractée, parfaite pour l'été.",
      price: 34.99,
    },
    {
      id: 8,
      title: 'Pull en laine',
      short_description:
        'Pull chaud en laine mérinos, col rond, disponible en plusieurs couleurs.',
      price: 59.99,
    },
    {
      id: 9,
      title: 'Short en jean',
      short_description:
        'Short en denim avec ourlet effiloché, coupe décontractée.',
      price: 29.99,
    },
    {
      id: 10,
      title: "Manteau d'hiver",
      short_description:
        'Manteau long en laine mélangée, doublé pour une chaleur optimale.',
      price: 149.99,
    },
  ];

  return (
    <div className="plp-container">
      <BreadcrumbExample />
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

export default ContainerFluidExample;
