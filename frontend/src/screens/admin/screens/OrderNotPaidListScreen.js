import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Bootstrap Components
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

//Actions
import { listOrders } from '../../../actions/orderActions';
import { ORDER_DELIVER_RESET } from '../../../constants/orderConstants';
import Order from '../../../components/Order';

const OrderNotPaidListScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sortOrders, setSortOrders] = useState([]);

  // Global state --> userLogin
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // Global state --> orderList
  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      // dispatch({ type: ORDER_DELIVER_RESET });
      dispatch(listOrders());
    } else {
      navigate('/account/login');
    }
  }, [dispatch, navigate, userInfo]);

  useEffect(() => {
    if (orders) {
      const notPaidOrders = orders.filter((order) => order.isPaid === false);
      const sortedData = [...notPaidOrders].sort((a, b) => {
        const dataA = new Date(a.paidAt).getTime();
        const dataB = new Date(b.paidAt).getTime();
        return dataA > dataB ? -1 : 1;
      });
      setSortOrders(sortedData);
    }
  }, [orders]);

  return (
    <section className="admin-section">
      <Container className="p-0 m-0">
        <Row className="title">
          <Col>
            <h1>Orders</h1>
          </Col>
        </Row>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <Row className="row-content">
            {sortOrders.map((order) => (
              <Order key={order._id} order={order} />
            ))}
          </Row>
        )}
      </Container>
    </section>
  );
};

export default OrderNotPaidListScreen;
