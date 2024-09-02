import { Button } from 'react-bootstrap';
import './ProductDetails.scss'

function ProductDetails() {

const cartProducts = [{title: "T-shirt en coton", size: "M", color: "black", price: 19.99, quantity: 1}, {title: "Jean slim", size: "M", color: "black", price: 29.99, quantity: 1}];

  return (
    <div className="product-details">
    <h1>My Cart</h1>
    {cartProducts.map((product) => (
    <>
      <ul className='product'>
        <img src="/plp/t-shirt-plp.jpg" alt="T-shirt blanc" className='cart-product-image'/>
        <li className='title'>{product.title}</li>
        <li>Color: {product.color}</li>
        <li>Size: {product.size}</li>
        <li>- {product.quantity} +</li>
        <li>{product.price} €</li>
        <Button variant="light">Remove</Button>
      </ul>
      </>
          ))}
    </div>
  );
}

export default ProductDetails;