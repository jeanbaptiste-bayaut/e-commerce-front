import './Account.scss';
import ModalEditProfil from './Modal/Modal';
import OrderDetails from './OrderDetails/OrderDetails';

function Account() {
  const client = {
    name: 'John Doe',
    email: 'john.doe@test.com',
    address: '26 avenue du Président JF Kennedy, 64200 Biarritz',
    phone: '0612345678',
  };
  const address = client.address.split(',')[0];
  const city = client.address.split(',')[1];
  const clientOrders = [
    { id: 1, date: '01/01/2021', total: 49.99 },
    { id: 2, date: '01/02/2021', total: 59.99 },
  ];

  return (
    <section className="account-container">
      <h1>My Account</h1>
      <div className="account">
        <section className="account-informations">
          <h2>My informations</h2>
          {<p>{client.name}</p>}
          {<p>{client.email}</p>}
          {<p>{address}</p>}
          {<p>{city}</p>}
          {<p>{client.phone}</p>}
          <ModalEditProfil />
        </section>
        <section className="account-orders">
          <h2 className="account-orders-title">My orders</h2>
          <table>
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Total</th>
              <th>Details</th>
            </tr>
            {clientOrders.map((order) => {
              return (
                <tr className="order">
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.total} €</td>
                  <td className="order-details-btn">
                    <OrderDetails />
                  </td>
                </tr>
              );
            })}
          </table>
        </section>
      </div>
    </section>
  );
}

export default Account;
