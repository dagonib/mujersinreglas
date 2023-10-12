import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { listOrders } from '../../../actions/orderActions';
import { listProducts } from '../../../actions/productActions';
import { addDecimals } from '../../../maths/Functions';

const DashboardScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalOrdersPaid, setTotalOrdersPaid] = useState(0);
  const [totalOrdersNotPaid, setTotalOrdersNotPaid] = useState(0);
  const [sumaTotal, setSumaTotal] = useState(0);
  const [totalUnitsSold, setTotalUnitsSold] = useState(0);
  const [agendaStock, setAgendaStock] = useState(0);

  // Global state --> userLogin
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // Global state --> orderList
  const orderList = useSelector((state) => state.orderList);
  const { loading: orderLoading, error: orderError, orders } = orderList;

  // Global state --> productList
  const productList = useSelector((state) => state.productList);
  const {
    loading: productLoading,
    error: productError,
    products,
  } = productList;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
      dispatch(listProducts());
    } else {
      navigate('/account/login');
    }
  }, [dispatch, navigate, userInfo]);

  useEffect(() => {
    if (orders || Array.isArray(orders)) {
      const calcTotalOrders = calculateNumberofOrders(orders);
      const calsTotalOrdersPaid = calculateNumberofOrdersPaid(orders);
      const calsTotalOrdersNotPaid = calculateNumberofOrdersNotPaid(orders);
      const total = calculateTotalSells(orders);
      const totalUnits = calculateTotalAgendasSold(orders);
      setSumaTotal(total);
      setTotalUnitsSold(totalUnits);
      setTotalOrders(calcTotalOrders);
      setTotalOrdersPaid(calsTotalOrdersPaid);
      setTotalOrdersNotPaid(calsTotalOrdersNotPaid);
    }

    if (products || Array.isArray(products)) {
      if (products[0]) {
        setAgendaStock(products[0].countInStock);
      }
    }
  }, [orders, products]);

  // Suma Total de las Ventas
  function calculateTotalSells(orders) {
    return orders.reduce((acc, order) => {
      if (order.isPaid) {
        return acc + order.totalPrice;
      }
      return acc;
    }, 0);
  }

  // Suma de las Agendas Vendidas
  function calculateTotalAgendasSold(orders) {
    return orders.reduce((acc, order) => {
      if (order.isPaid && order.orderItems && Array.isArray(order.orderItems)) {
        const orderItemsTotal = order.orderItems.reduce((subtotal, item) => {
          if (item.product === '64ddc3f5437d673dad6aad15') {
            return subtotal + item.qty;
          } else {
            return subtotal;
          }
        }, 0);
        return acc + orderItemsTotal;
      }
      return acc;
    }, 0);
  }

  // Cáculo número de pedidos.
  function calculateNumberofOrders(orders) {
    let sum = 0;
    orders.forEach((order) => {
      sum = sum + 1;
    });
    return sum;
  }

  // Cáculo número de pedidos pagados.
  function calculateNumberofOrdersPaid(orders) {
    let sum = 0;

    orders.forEach((order) => {
      if (order.isPaid) {
        sum = sum + 1;
      }
    });
    return sum;
  }

  // Cáculo número de pedidos NO pagados.
  function calculateNumberofOrdersNotPaid(orders) {
    let sum = 0;

    orders.forEach((order) => {
      if (order.isPaid === false) {
        sum = sum + 1;
      }
    });
    return sum;
  }

  return (
    <section className="dashboard admin-section">
      <Container className="p-0 m-0">
        <Row className="title">
          <Col>
            <h1>Dashboard</h1>
          </Col>
        </Row>
        <Row className="dashboard__info">
          <Col className="dash-card">
            <p className="metric">Número de pedidos</p>
            <p className="number">{totalOrders}</p>
          </Col>
          <Col className="dash-card">
            <p className="metric">Pedidos pagados</p>
            <p className="number">{totalOrdersPaid}</p>
          </Col>
          <Col className="dash-card">
            <p className="metric">Pedido no pagados</p>
            <p className="number">{totalOrdersNotPaid}</p>
          </Col>
        </Row>
        <Row className="dashboard__info">
          <Col className="dash-card">
            <p className="metric">Número de agendas vendidas</p>
            <p className="number">{totalUnitsSold}</p>
          </Col>
          <Col className="dash-card">
            <p className="metric">Número de agendas en stock</p>
            <p className="number">{agendaStock}</p>
          </Col>
          <Col className="dash-card">
            <p className="metric">Ingresos Totales</p>
            <p className="number">{addDecimals(sumaTotal)}€</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DashboardScreen;
