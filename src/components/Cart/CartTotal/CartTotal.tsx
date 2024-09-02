import { Button } from 'react-bootstrap';
import './CartTotal.scss';

function CartTotal() {

    const deliveryOtptions = [{title: "Standard", price: 4.99, time: "3-5 days"}, {title: "Express", price: 9.99, time: "2-3 days"}];

    const cartProducts = [{title: "T-shirt en coton", price: 19.99, quantity: 1}, {title: "Jean slim", price: 29.99, quantity: 1}];

    const totalHT = cartProducts.map((product) => product.price * product.quantity).reduce((a, b) => a + b, 0);

    const nbArticles = cartProducts.map((product) => product.quantity).reduce((a, b) => a + b, 0);
  return (
    <div className="cart-total">
        <section className='cart-total-top'>
        <h3>Summary</h3>
        <p>Total {totalHT} €</p>
        {nbArticles > 1 ? <p>{nbArticles} articles</p> : <p>{nbArticles} article</p>}
        <Button variant="dark">Checkout</Button>
        </section>
        <section className="delivery-options">
            <h3>Delivery options</h3>
            <section className="delivery-options-row">
            {deliveryOtptions.map((option) => (
                <>
                <div className='delivery-option'>
                <p>{option.title}</p>
                <p>{option.price} €</p>
                <p>{option.time}</p>
                </div>
                </>
            ))}
            </section>
        </section>
    </div>
  );
}

export default CartTotal;