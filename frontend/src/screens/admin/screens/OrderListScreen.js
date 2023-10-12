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

const OrderListScreen = () => {
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
      const paidOrders = orders.filter((order) => order.isPaid);
      const sortedData = [...paidOrders].sort((a, b) => {
        const data_a = Number(a.invoiceNum.split('/')[1]);
        const data_b = Number(b.invoiceNum.split('/')[1]);
        return data_a > data_b ? -1 : 1;
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

export default OrderListScreen;
