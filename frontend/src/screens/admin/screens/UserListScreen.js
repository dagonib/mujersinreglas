import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

// Actions
import { listUsers, deleteUser } from '../../../actions/userActions';

// Components
import Icon from '../../../components/Icon';

// Components Bootstrap
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const UserListSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDelete = useSelector((state) => state.userDelete);
  const { success: successDelete } = userDelete;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      navigate('/account/login');
    }
  }, [userInfo, successDelete, dispatch, navigate]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <section className="admin-section">
      <Container className="p-0 m-0">
        <Row className="title">
          <Col>
            <h1>Usuarios</h1>
          </Col>
        </Row>
        <Table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Administrador</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>
                  <div>{user.name}</div>
                </td>
                <td>
                  <div>{user.email}</div>
                </td>
                <td>
                  <div>
                    {user.isAdmin ? (
                      <Icon icon="bi bi-check" color="#7CFC00" />
                    ) : (
                      <Icon icon="bi bi-x-circle-fill" color="#FF0000" />
                    )}
                  </div>
                </td>
                <td>
                  <LinkContainer to={`/admin/user/${user._id}/edit`}>
                    <Button>
                      <Icon icon="bi bi-pencil-square" />
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    onClick={() => deleteHandler(user._id)}
                  >
                    <Icon icon="bi bi-trash-fill" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </section>
  );
};

export default UserListSection;
