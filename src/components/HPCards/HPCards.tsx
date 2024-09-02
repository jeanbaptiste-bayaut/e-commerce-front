import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './HPCards.scss';

function BasicExample() {
  return (
    <section className='row-cards-3'>
    <article>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="/homepage/3up-women.jpg" />      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </article>
    <article>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/homepage/3up-women.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </article>
    <article>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="/homepage/3up-women.jpg" />      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="secondary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </article>
    </section>
  );
}

export default BasicExample;