import CartTotal from "./CartTotal/CartTotal";
import ProductDetails from "./ProductDetails/ProductDetails";
import './Cart.scss';

function Cart() {
  return (
    <div className="cart">
        <ProductDetails />
        <CartTotal />
    </div>
  );
}

export default Cart;