import Accordion from 'react-bootstrap/Accordion';

function OrderDetails() {
  const orderDetails = [
    { id: 1, product: 'Product 1', quantity: 1, size: 'M', price: 49.99 },
    { id: 2, product: 'Product 2', quantity: 1, size: 'M', price: 59.99 },
  ];
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Details</Accordion.Header>
        <Accordion.Body>
          {orderDetails.map((order) => {
            return (
              <ul>
                <li>Product: {order.product}</li>
                <li>Quantity: {order.quantity}</li>
                <li>Size: {order.size}</li>
                <li>Price: {order.price} €</li>
              </ul>
            );
          })}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default OrderDetails;
