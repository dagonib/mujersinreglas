import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

// Paypal
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

//Actions
import { getOrderDetails } from '../../../actions/orderActions';
import PayPalCheckoutButton from '../../../components/PayPalCheckoutButton';

// Functions
import { addDecimals } from '../../../maths/Functions';

// Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import StripeContainer from '../../../components/StripeContainer';

const PaymentScreen = () => {
  const dispatch = useDispatch();
  let { orderId } = useParams();

  // Global State --> orderDetails
  const orderDetails = useSelector((state) => state.orderDetails);
  const { loading, error, order } = orderDetails;

  useEffect(() => {
    if (!order || order._id !== orderId) {
      dispatch(getOrderDetails(orderId));
    }
  }, [dispatch, orderId, order]);

  return (
    <section className="payment">
      <Container fluid="lg">
        <Row className="mb-5">
          <Link className="main-action-button comeback-btn" to="/shop">
            Volver
          </Link>
        </Row>
        <Row className="totalPrice-box">
          <p className="totalPrice">Total: {addDecimals(order.totalPrice)} €</p>
        </Row>
        <div className="paypal-box">
          {/* <PayPalScriptProvider
            options={{
              'client-id':
                'ATM_kuMOAGKfBAuw_-QKdTdnqdZzqwjUOUKukbH5J8aiC81pzjOTew7qWgVjYoe3X_5JxQcHf03wX5Q3',
              currency: 'EUR',
              intent: 'capture',
            }}
          >
            <PayPalCheckoutButton order={order} />
          </PayPalScriptProvider> */}
        </div>
      </Container>
    </section>
  );
};

export default PaymentScreen;
